import React, { useState } from 'react';
import { Download, Sparkles, Video, Film } from 'lucide-react';
import { Theme } from '../types';

interface AIVideoProps {
  theme: Theme;
}

interface GeneratedVideo {
  id: string;
  url: string;
  prompt: string;
  provider: string;
  timestamp: Date;
}

const AI_VIDEO_PROVIDERS = [
  { name: 'Sora', id: 'sora', color: 'text-blue-500', description: 'OpenAI Sora' },
  { name: 'Runway', id: 'runway', color: 'text-purple-500', description: 'Runway ML Gen-2' },
  { name: 'Pika', id: 'pika', color: 'text-green-500', description: 'Pika Labs' },
  { name: 'Lumiere', id: 'lumiere', color: 'text-orange-500', description: 'Google Lumiere' },
];

export const AIVideo: React.FC<AIVideoProps> = ({ theme }) => {
  const [prompt, setPrompt] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('sora');
  const [generatedVideos, setGeneratedVideos] = useState<GeneratedVideo[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // Simulate API call
    setTimeout(() => {
      const newVideo: GeneratedVideo = {
        id: Date.now().toString(),
        url: '/pictures/Gradio_2.mp4', // Using a local placeholder video
        prompt: prompt,
        provider: selectedProvider,
        timestamp: new Date(),
      };

      setGeneratedVideos([newVideo, ...generatedVideos]);
      setIsGenerating(false);
    }, 3000); // Longer delay for video
  };

  const handleDownload = (videoUrl: string) => {
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = `ai-generated-${Date.now()}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const promptSuggestions = [
    "A majestic lion roaring on a rocky cliff at sunrise",
    "A bustling futuristic city with flying vehicles and neon lights",
    "A time-lapse of a flower blooming from bud to full blossom",
    "An astronaut floating in zero gravity inside a space station",
    "A chef preparing a complex dish in a hyper-realistic kitchen",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-bg-dark dark:to-slate-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-display bg-gradient-to-r from-brand-start to-brand-end text-transparent bg-clip-text mb-4">
            AI Video Generator
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Bring your ideas to life with AI-powered video generation
          </p>
        </div>

        {/* Provider Selection */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wide">
            Choose AI Provider
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {AI_VIDEO_PROVIDERS.map((provider) => (
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
                Describe your video scene
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A cinematic shot of a car driving on a mountain road, a cute dog playing in a park..."
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
                    <Film size={20} />
                    Generate Video
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

        {/* Generated Videos */}
        {generatedVideos.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
              <Video size={20} />
              Generated Videos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {generatedVideos.map((video) => (
                <div key={video.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="aspect-video bg-black">
                    <video
                      src={video.url}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 line-clamp-2">
                      {video.prompt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {AI_VIDEO_PROVIDERS.find(p => p.id === video.provider)?.name}
                      </span>
                       <button
                        onClick={() => handleDownload(video.url)}
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
          <p>Currently showing a placeholder video. In a real implementation, this would connect to actual AI video generation APIs.</p>
        </div>
      </div>
    </div>
  );
};