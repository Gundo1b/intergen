import React, { useState } from 'react';
import { Download, Sparkles, Palette, Image as ImageIcon } from 'lucide-react';
import { Theme } from '../types';

interface AIImageProps {
  theme: Theme;
}

interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  provider: string;
  timestamp: Date;
}

const AI_IMAGE_PROVIDERS = [
  { name: 'DALL-E', id: 'dalle', color: 'text-green-500', description: 'OpenAI DALL-E' },
  { name: 'Midjourney', id: 'midjourney', color: 'text-purple-500', description: 'High-quality artistic images' },
  { name: 'Stable Diffusion', id: 'stablediffusion', color: 'text-blue-500', description: 'Open-source image generation' },
  { name: 'Imagen', id: 'imagen', color: 'text-orange-500', description: 'Google Imagen' },
];

export const AIImage: React.FC<AIImageProps> = ({ theme }) => {
  const [prompt, setPrompt] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('dalle');
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // Simulate API call
    setTimeout(() => {
      const newImage: GeneratedImage = {
        id: Date.now().toString(),
        url: `https://picsum.photos/512/512?random=${Date.now()}`,
        prompt: prompt,
        provider: selectedProvider,
        timestamp: new Date(),
      };

      setGeneratedImages([newImage, ...generatedImages]);
      setIsGenerating(false);
    }, 2000);
  };

  const handleDownload = (imageUrl: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `ai-generated-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const promptSuggestions = [
    "A futuristic cityscape at sunset with flying cars",
    "A serene mountain lake with reflection",
    "An abstract digital art piece with vibrant colors",
    "A cozy coffee shop interior with warm lighting",
    "A fantasy dragon flying over a medieval castle",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-bg-dark dark:to-slate-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-display bg-gradient-to-r from-brand-start to-brand-end text-transparent bg-clip-text mb-4">
            AI Image Generator
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Create stunning images with the power of AI
          </p>
        </div>

        {/* Provider Selection */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wide">
            Choose AI Provider
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {AI_IMAGE_PROVIDERS.map((provider) => (
              <button
                key={provider.id}
                onClick={() => setSelectedProvider(provider.id)}
                className={`p-4 rounded-lg border transition-all duration-200 text-left ${
                  selectedProvider === provider.id
                    ? 'border-brand-end bg-brand-end/10 text-brand-end'
                    : 'border-slate-200 dark:border-slate-700 hover:border-brand-start dark:hover:border-brand-start'
                }`}
              >
                <div className={`text-sm font-medium ${provider.color} mb-1`}>
                  {provider.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {provider.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Generation Interface */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Describe your image
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A beautiful landscape, a portrait, abstract art..."
                className="w-full h-32 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-end resize-none"
              />
            </div>
            <div className="lg:w-48 flex flex-col justify-end">
              <button
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                className="w-full px-6 py-3 bg-brand-end text-white rounded-lg hover:bg-brand-end/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="animate-spin" size={20} />
                    Generating...
                  </>
                ) : (
                  <>
                    <Palette size={20} />
                    Generate Image
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Prompt Suggestions */}
          <div className="mt-4">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
              Need inspiration? Try these prompts:
            </p>
            <div className="flex flex-wrap gap-2">
              {promptSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(suggestion)}
                  className="px-3 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full hover:bg-brand-start/10 hover:text-brand-start transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Generated Images */}
        {generatedImages.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
              <ImageIcon size={20} />
              Generated Images
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generatedImages.map((image) => (
                <div key={image.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="aspect-square">
                    <img
                      src={image.url}
                      alt={image.prompt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 line-clamp-2">
                      {image.prompt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {AI_IMAGE_PROVIDERS.find(p => p.id === image.provider)?.name}
                      </span>
                      <button
                        onClick={() => handleDownload(image.url)}
                        className="p-2 text-slate-600 dark:text-slate-400 hover:text-brand-end transition-colors"
                      >
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info */}
        <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>Currently showing placeholder images. In a real implementation, this would connect to actual AI image generation APIs.</p>
        </div>
      </div>
    </div>
  );
};