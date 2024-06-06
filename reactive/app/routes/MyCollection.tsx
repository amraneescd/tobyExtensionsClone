import Divider from '@/components/Divider'
import CollectionInput from '@/components/collections/CollectionInput'
import CollectionItem from '@/components/collections/CollectionItem'
import OpenedTabs from '@/components/collections/OpenedTabs'
import { Collection } from '@/types/collection'

function MyCollection() {
  const [visibleCollectionTextInput, setVisibleCollectionTextInput] =
    useState(false)

  // chrome.storage.local.clear()
  const [collectionsData, setCollectionsData] = useState<Collection[]>([])
  useEffect(() => {
    chrome.storage.local.get(['Collections'], function (result) {
      if (result.Collections) {
        setCollectionsData(result.Collections)
      }
    })
  }, [])

  function newCollection(collectionName?: string) {
    const collectionIndex = collectionsData?.length

    const newCollectionObject = {
      collectionName: collectionName || 'Untitled',
      collectionIndex: collectionIndex,
      isStarredCollection: false,
      tabs: [],
    }

    const updatedCollections = [newCollectionObject, ...collectionsData]

    chrome.storage.local.set({ Collections: updatedCollections }, function () {
      setCollectionsData(updatedCollections)
    })
  }
  return (
    <div className="flex flex-1 overflow-auto">
      {/* All My Collection  */}
      <div className="flex-1">
        <div className="px-4">
          <button
            className="ml-auto bg-rose-500 rounded-md text-white text-11px px-4 py-2 flex items-center gap-2 tracking-wide font-semibold"
            onClick={() => setVisibleCollectionTextInput(true)}
          >
            <div className="i-material-symbols-add-rounded" />
            ADD COLLECTION
          </button>
        </div>

        <Divider />

        {visibleCollectionTextInput && (
          <>
            <CollectionInput
              setVisibleCollectionTextInput={setVisibleCollectionTextInput}
              newCollection={newCollection}
            />

            <Divider />
          </>
        )}

        <div className="h-96">
          {collectionsData.length > 0 ? (
            collectionsData.map((collection) => (
              <>
                <CollectionItem
                  collection={collection}
                  key={collection.collectionIndex}
                  collections={collectionsData}
                  setCollectionsData={setCollectionsData}
                  collectionIndex={collection.collectionIndex}
                  isStarredCollection={collection.isStarredCollection}
                />
                <Divider />
              </>
            ))
          ) : (
            <h3 className="text-center font-bold text-gray-500 text-xl tracking-wide">
              No Collection Has Been Made Yet
            </h3>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="w-1/5 h-fit border-1 border-solid border-b-0 border-gray-300 border-t-0 p-4">
        <OpenedTabs />
      </div>
    </div>
  )
}

export default MyCollection
