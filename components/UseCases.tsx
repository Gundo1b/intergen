"use client"

import { useEffect, useState } from "react"
import { Icons } from "./ui/icons"

const useCases = [
  {
    title: "Creative",
    subtitle: "Creators & Designers",
    description: "Storyboard campaigns, generate moodboards, and iterate on visuals in a unified workspace.",
    icon: "visualCreation",
  },
  {
    title: "Education",
    subtitle: "Students & Learners",
    description: "Get deep explanations, summarize complex topics, and create multimodal study guides.",
    icon: "brain",
  },
  {
    title: "Engineering",
    subtitle: "Developers & Engineers",
    description: "Generate boilerplate, refactor legacy code, and debug with context-aware AI assistance.",
    icon: "codeDevelopment",
  },
  {
    title: "Business",
    subtitle: "Startups & Teams",
    description: "Ship products faster with shared workspaces and unified tools for the whole team.",
    icon: "rocket",
  },
  {
    title: "Enterprise",
    subtitle: "Enterprise",
    description: "Secure, compliant AI integration with custom workflows and role-based access control.",
    icon: "strategicPlanning",
  },
]

export const UseCases = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const timers = useCases.map((_, index) =>
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index])
      }, index * 200)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-brand-start/5 via-brand-start/10 to-brand-end/10 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-start to-brand-end rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-brand-end to-brand-start rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-brand-start to-brand-end rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Built for every kind of builder
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 mb-8">
            Whether you're writing code, designing assets, or learning a new skill, Integen adapts to your workflow.
          </p>
          <button className="bg-gradient-to-r from-brand-start to-brand-end text-white px-8 py-3 rounded-full font-semibold hover:from-brand-start/90 hover:to-brand-end/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View all examples →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = Icons[useCase.icon as keyof typeof Icons]
            return (
              <div
                key={index}
                className={`bg-white/20 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 dark:border-gray-700/50 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                  }`}
              >
                <IconComponent className="w-16 h-16 text-brand-start dark:text-brand-end mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {useCase.title}
                </h3>
                <h4 className="text-lg font-semibold text-brand-start dark:text-brand-end mb-4">
                  {useCase.subtitle}
                </h4>
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="mt-6 w-full h-1 bg-gradient-to-r from-brand-start to-brand-end rounded-full animate-pulse"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
