import { Collection } from '@/types/collection'
import Divider from '../Divider'

function CollectionItem({ collection }: { collection: Collection }) {
  return (
    <div
      key={collection.collectionIndex}
      className="p-4 border-b-1.2px border-gray-300 my-4"
    >
      <h3 className="text-xl text-gray-700 tracking-wide">
        {collection.collectionName}
      </h3>

      {/* Tabs  */}
      <div className="flex gap-4">
        {collection.tabs.length > 0 ? (
          collection.tabs.map((tab) => (
            <div
              className="rounded-md shadow p-4 w-50 overflow-hidden"
              key={`${collection.collectionIndex}${tab.tabIndex}`}
            >
              <img
                src={tab.tabIcon}
                alt=""
              />

              <p>{tab.tabName}</p>
              <Divider />

              <p className="text-xs text-gray-500">{tab.tabName}</p>
            </div>
          ))
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
