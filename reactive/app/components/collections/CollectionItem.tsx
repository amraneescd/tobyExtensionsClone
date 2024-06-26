import { Collection } from '@/types/collection'
import Divider from '../Divider'
import { useSetDraggedTabData } from '@/stores/draggedTab'
import DefaultTabIcon from '../../assets/defaultTabIcon.png'
import EditCollection from './EditCollection'
import SaveCollectionName from './SaveName'
import Delete from './DeleteCollection'
import DeleteTab from './DeleteTab'
import StarCollectionButton from './StarCollectionButton'
import DragArea from './DragArea'

function CollectionItem({
  collection,
  collections,
  setCollectionsData,
  collectionIndex,
  isStarredCollection,
}: {
  collection: Collection
  collections: Collection[]
  setCollectionsData: any
  collectionIndex: number
  isStarredCollection: boolean
}) {
  // Collection name
  const [collectionName, setCollectionName] = useState(
    collection.collectionName
  )

  // Collapsing
  const [isCollapse, setIsCollapse] = useState(false)

  const editCollectionNameRef = useRef<HTMLInputElement>(null)
  const [isNameInEdit, setIsNameInEdit] = useState(false)

  // Handle Dragged tabs into the collection
  const tabName = useSetDraggedTabData((state) => state.tabTitle)
  let tabIcon = useSetDraggedTabData((state) => state.tabIcon)
  const tabURL = useSetDraggedTabData((state) => state.tabURL)
  const tabID = useSetDraggedTabData((state) => state.tabID)

  // Handle while dragging the tab
  const [isDraggingTab, setIsDraggingTab] = useState(false)

  if (tabIcon == '') tabIcon = DefaultTabIcon // Set a default icon

  // Handle the dropped tabs inside the collection
  function handleDrop() {
    // Define the dragged tab info in case there is one
    if (tabName && tabURL) {
      setIsDraggingTab(false)
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

      if (tabID) chrome.tabs.remove(tabID, () => {}) // Close the tab after dragging it to a collection
    }
  }

  // Handle collection deletion
  function deleteCollection() {
    const updatedCollections = collections.filter(
      (collection) => collection.collectionIndex !== collectionIndex
    )

    chrome.storage.local.set({ Collections: updatedCollections }, function () {
      setCollectionsData(updatedCollections)
    })
  }

  // Edit collection name
  function editCollectionName() {
    setIsNameInEdit(true)
    editCollectionNameRef.current?.removeAttribute('readOnly')
    editCollectionNameRef.current?.focus()
  }

  // Save The collection
  function saveCollectionName() {
    editCollectionNameRef.current?.setAttribute('readOnly', 'true')
    setIsNameInEdit(false)

    // Save the name
    const newCollectionName = editCollectionNameRef.current?.value
    collections[collectionIndex].collectionName =
      newCollectionName || 'Untitled'

    const updatedCollections = collections.slice()
    chrome.storage.local.set({ Collections: updatedCollections }, () => {
      setCollectionName(collections[collectionIndex].collectionName)
    })
  }

  // Assuming collections is an array of objects
  function deleteTab(tabIndex: number) {
    const parentCollectionIndex = collections.findIndex(
      (collection) => collection['collectionIndex'] === collectionIndex
    )

    const parentCollection = collections[parentCollectionIndex]
    const tabToDeleteIndex = parentCollection.tabs.findIndex(
      (tab) => tab['tabIndex'] === tabIndex
    )

    parentCollection.tabs.splice(tabToDeleteIndex, 1)

    const updatedCollections = collections.slice()
    setCollectionsData(updatedCollections)

    chrome.storage.local.set({ Collections: updatedCollections }, function () {
      setCollectionsData(updatedCollections)
    })
  }

  // Star a collection
  function starCollection() {
    const collection = collections.find(
      (collection) => collection.collectionIndex == collectionIndex
    )
    const isStarredCollection = collection?.isStarredCollection

    if (!isStarredCollection && collection) {
      collection.isStarredCollection = true
      const updatedCollections = collections.slice()
      chrome.storage.local.set({ Collections: updatedCollections }, () => {
        setCollectionsData(updatedCollections)
      })
    } else if (isStarredCollection && collection) {
      collection.isStarredCollection = false
      const updatedCollections = collections.slice()
      chrome.storage.local.set({ Collections: updatedCollections }, () => {
        setCollectionsData(updatedCollections)
      })
    }
  }

  function collapse() {
    if (isCollapse) {
      setIsCollapse(false)
      return
    }

    setIsCollapse(true)
  }
  // Collaps the collection

  return (
    <div
      key={collection.collectionIndex}
      className="p-4 border-b-1.2px border-gray-300 my-4 relative overflow-hidden"
      onDragOver={(e) => {
        e.preventDefault()
        setIsDraggingTab(true)
      }}
      onDrop={() => handleDrop()}
      onDragLeave={() => setIsDraggingTab(false)}
    >
      {/* collection options  */}

      <div className="absolute flex flex-row-reverse gap-1 w-full h-full top-2 right-2 opacity-0 hover:opacity-100 transition-all">
        <Delete deleteItem={deleteCollection} />
        <EditCollection editCollectionName={editCollectionName} />
        <StarCollectionButton
          starCollection={starCollection}
          isStarredCollection={isStarredCollection}
        />
      </div>
      {/* collection options  */}

      <div>
        <input
          className={`text-xl ${mode.value == 'light' ? 'text-gray-700' : 'text-white'} tracking-wide mb-2 text-ellipsis bg-inherit`}
          value={collectionName}
          onChange={(e) => setCollectionName(e.target.value)}
          readOnly
          ref={editCollectionNameRef}
        />

        {isNameInEdit && <SaveCollectionName SaveName={saveCollectionName} />}

        <button onClick={() => collapse()}>
          <div
            className={`i-material-symbols-keyboard-arrow-down-rounded ${isCollapse && 'rotate-180'} bg-rose-500 w-6 h-6 transition-transform`}
          />
        </button>
      </div>

      {/* Tabs  */}
      <div
        className={`overflow-hidden transition-all ${isCollapse ? 'h-0 p-0' : 'py-4'}`}
      >
        {collection.tabs?.length > 0 ? (
          <div className="grid grid-cols-4 gap-4">
            {collection.tabs.map((tab) => (
              <div
                className={`rounded-md shadow ${mode.value == 'dark' && 'shadow-white'} text-inherit p-4 overflow-hidden no-underline text-black group relative cursor-pointer`}
                key={`${collection.collectionIndex}${tab.tabIndex}`}
                onClick={() => {
                  window.open(tab.tabLink, '_blank')
                }}
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

                {/* Tab Options  */}
                <div className="absolute flex flex-row-reverse gap-1 bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all">
                  <DeleteTab
                    deleteTab={deleteTab}
                    tabIndex={tab.tabIndex}
                  />
                </div>
                {/* Tab Options  */}
              </div>
            ))}

            {isDraggingTab && <DragArea />}
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
