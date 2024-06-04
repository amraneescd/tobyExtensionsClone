import { useState, useEffect } from 'react'
import TabItem from './TabItem'
import DefaultTabIcon from '../../assets/defaultTabIcon.png'

function OpenedTabs() {
  const [allTabs, setAllTabs] = useState<chrome.tabs.Tab[]>([])

  useEffect(() => {
    chrome.tabs.query({}, (tabs) => {
      setAllTabs(tabs)
    })
  }, [allTabs])

  function closeTab(tabId: number): void {
    chrome.tabs.remove(tabId, () => {})
  }
  return (
    <div>
      <h3 className="text-xl mb-4">All Tabs</h3>
      {allTabs.map((tab) => (
        <TabItem
          key={tab.id}
          tabTitle={tab.title || 'Untitled'}
          tabIcon={tab.favIconUrl || DefaultTabIcon}
          tabURL={tab.url || ''}
          closeTab={() => closeTab(tab.id || 0)}
          tabID={tab.id}
          draggingTab={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      ))}
    </div>
  )
}

export default OpenedTabs
