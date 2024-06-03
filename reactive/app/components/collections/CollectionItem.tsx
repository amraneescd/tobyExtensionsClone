import { Collection } from '@/types/collection'
import Divider from '../Divider'
import { useSetDraggedTabData } from '@/stores/draggedTab'
import DefaultTabIcon from '../../assets/defaultTabIcon.png'

function CollectionItem({
  collection,
  collections,
  setCollectionsData,
}: {
  collection: Collection
  collections: Collection[]
  setCollectionsData: any
}) {
  const tabName = useSetDraggedTabData((state) => state.tabTitle)
  let tabIcon = useSetDraggedTabData((state) => state.tabIcon)
  const tabURL = useSetDraggedTabData((state) => state.tabURL)

  if (tabIcon == '') tabIcon = DefaultTabIcon // Set a default icon

  // Handle the dropped tabs inside the collection
  function handleDrop() {
    // Define the dragged tab info in case there is one
    if (tabName && tabURL) {
      const tabs = collection.tabs
      collection.tabs = [
        ...tabs,
        {
          tabName: tabName,
          tabIndex: tabs.length,
          tabIcon: tabIcon,
          tabLink: tabURL,
        },
      ]

      const updatedCollections = collections.slice()
      chrome.storage.local.set(
        { Collections: updatedCollections },
        function () {
          setCollectionsData(updatedCollections)
        }
      )
    }
  }

  return (
    <div
      key={collection.collectionIndex}
      className="p-4 border-b-1.2px border-gray-300 my-4"
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => handleDrop()}
    >
      <h3 className="text-xl text-gray-700 tracking-wide mb-2">
        {collection.collectionName}
      </h3>

      {/* Tabs  */}
      <div>
        {collection.tabs.length > 0 ? (
          <div className="grid grid-cols-4 gap-4">
            {collection.tabs.map((tab) => (
              <a
                className="rounded-md shadow p-4 overflow-hidden no-underline text-black"
                key={`${collection.collectionIndex}${tab.tabIndex}`}
                href={tab.tabLink}
                target="_blank"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={tab.tabIcon}
                    className="w-6 h-6"
                  />

                  <p className="truncate">{tab.tabName}</p>
                </div>
                <Divider />

                <p className="truncate text-xs text-gray-500">{tab.tabName}</p>
              </a>
            ))}
          </div>
        ) : (
          <div className="p-2 text-xs text-gray-500 w-full text-center border-2 border-dotted">
            This collection is empty, drag and drop a tab
          </div>
        )}
      </div>
    </div>
  )
}

export default CollectionItem
