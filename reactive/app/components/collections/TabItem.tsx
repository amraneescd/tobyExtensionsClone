import { Tab } from '@/types/collection'
import CloseButton from '../CloseButton'
import { DragEvent } from 'react'
import { useSetDraggedTabData } from '@/stores/draggedTab'

function TabItem({ tabTitle, tabIcon, tabURL, tabID, closeTab }: Tab) {
  // Handle On Drag Start
  const setDraggedData = useSetDraggedTabData((state) => state.setDraggedIcon)

  function handleDragStart(e: DragEvent<HTMLAnchorElement>) {
    const tabName = e.currentTarget.children.namedItem('tabName')?.textContent
    let tabIcon = e.currentTarget.children
      .namedItem('tabIcon')
      ?.getAttribute('src')
    const href = e.currentTarget.href
    if (tabName && href) {
      if (tabIcon == null) tabIcon = ''
      setDraggedData(tabName, tabIcon, href, tabID)
    }
  }

  // Handle On Drag End
  function handleDragEnd() {
    setDraggedData('', '', '')
  }
  return (
    <div className="relative group">
      <a
        target="_blank"
        href={tabURL}
        draggable="true"
        onDragStart={(e) => handleDragStart(e)}
        onDragEnd={() => handleDragEnd()}
        className="flex gap-1 items-center px-4 py-2 rounded-lg bg-gray-200 shadow-md mb-2 text-black no-underline cursor-grab"
      >
        <img
          src={tabIcon}
          className="w-4 w-4 mr-2"
          id="tabIcon"
        />
        <p
          className="truncate"
          id="tabName"
        >
          {tabTitle}
        </p>
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
