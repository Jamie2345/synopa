import { FunnelIcon, QuestionMarkCircleIcon, TableCellsIcon, MagnifyingGlassIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { PiBrain } from "react-icons/pi";
import { RiSpeakLine } from "react-icons/ri";

const features = [
  {
    name: 'Filter Out the Noise',
    description:
      'Filter out irrelevant information and focus on what matters most. Our algorithm highlights the most important parts of the video, saving you time and effort.',
    icon: FunnelIcon,
  },
  {
    name: 'Ask & Get Answers',
    description:
      'Ask questions about the video and our AI will provide instant answers, helping you quickly understand complex concepts and get the most out of your watch time.',
    icon: RiSpeakLine,
  },
  {
    name: 'Section Breakdown',
    description:
      'Break down long videos into easily digestible sections with timestamps, so you can quickly find the parts that matter most.',
    icon: TableCellsIcon,
  },
  {
    name: 'AI-generated Notes',
    description:
      'Stay on top of complex content with AI-generated notes that summarize key points and highlight important information.',
    icon: PiBrain,
  },
  {
    name: 'Take Notes, Anytime',
    description:
      'Create personalized notes within the app and access them anywhere. Jot down important points, questions, or insights and review them securely whenever you need to.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Quickly Find Your Notes',
    description:
      "Use our powerful search bar to quickly locate specific notes, keywords, or phrases across your entire note collection. Get instant results and refine your search with filters to find exactly what you're looking for.",
    icon: MagnifyingGlassIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white sm:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-content">Learn faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to learn new things
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Synopa uses AI to summarize YouTube videos into key points and sections, providing instant insights, notes, and clarity. Gain a deeper understanding, save time, and focus on what matters most.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}