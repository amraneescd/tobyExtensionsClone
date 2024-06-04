import CollectionItem from '@/components/collections/CollectionItem'
import { Collection } from '@/types/collection'

function StarredCollections() {
  const [collectionsData, setCollectionsData] = useState<Collection[]>([])

  useEffect(() => {
    chrome.storage.local.get(['Collections'], function (result) {
      if (result.Collections) {
        setCollectionsData(result.Collections)
      }
    })
  }, [])

  return collectionsData.length > 0 ? (
    collectionsData.map(
      (collection) =>
        collection.isStarredCollection == true && (
          <CollectionItem
            collection={collection}
            key={collection.collectionIndex}
            collections={collectionsData}
            setCollectionsData={setCollectionsData}
            collectionIndex={collection.collectionIndex}
            isStarredCollection={collection.isStarredCollection}
          />
        )
    )
  ) : (
    <div className="text-center font-bold text-gray-500 text-xl tracking-wide">
      You Havent Starred Any Collections Yet
    </div>
  )
}
export default StarredCollections
