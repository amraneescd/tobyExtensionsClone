import Divider from '@/components/Divider'
import CollectionInput from '@/components/collections/CollectionInput'
import Collections from '../json/collections.json'
import CollectionItem from '@/components/collections/CollectionItem'

function MyCollection() {
  const [visibleCollectionTextInput, setVisibleCollectionTextInput] =
    useState(false)

  const [collectionsData, setCollectionsData] = useState(Collections)

  function newCollection(collectionName?: string) {
    if (collectionName) {
      const collectionIndex = collectionsData.length

      const newCollectionObject = {
        collectionName: collectionName,
        collectionIndex: collectionIndex,
        tabs: [],
      }

      setCollectionsData([newCollectionObject, ...collectionsData])
    }
  }
  return (
    <div>
      <div>
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

        {collectionsData.map((collection) => (
          <CollectionItem
            collection={collection}
            key={collection.collectionIndex}
          />
        ))}
      </div>

      {/* Tabs */}
      <div></div>
    </div>
  )
}

export default MyCollection
