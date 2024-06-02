import { Tab } from '@/types/collection'
import CloseButton from '../CloseButton'

function TabItem({ tabTitle, tabIcon, tabURL, closeTab }: Tab) {
  return (
    <div className="relative group">
      <a
        target="_blank"
        href={tabURL}
        className="flex gap-1 items-center px-4 py-2 rounded-lg bg-gray-200 shadow-md mb-2 text-black no-underline"
      >
        <img
          src={tabIcon}
          className="w-4 w-4 mr-2"
        />
        <p className="truncate">{tabTitle}</p>
      </a>
      <button
        className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-all p-2px bg-red-400 rounded-md"
        onClick={closeTab}
      >
        <CloseButton />
      </button>
    </div>
  )
}

export default TabItem
