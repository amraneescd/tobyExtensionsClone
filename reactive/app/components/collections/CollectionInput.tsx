function CollectionInput({
  setVisibleCollectionTextInput,
  newCollection,
}: {
  setVisibleCollectionTextInput: (isvisible: boolean) => void
  newCollection: (collectionName?: string) => void
}) {
  const [collectionInputValue, setCollectionInputValue] = useState('')
  const mode = useChangeMode((state) => state.mode)

  return (
    <div className="flex gap-4">
      <input
        type="text"
        className={`${mode == 'black' && 'text-white'} outline-none p-2 text-xl border-b-2 border-gray-500 bg-inherit border-white border-solid border-1 rounded-lg`}
        placeholder="Type the collection title"
        onChange={(event) => setCollectionInputValue(event.target.value)}
      />
      <div className="flex gap-4">
        <button
          className="tracking-wide text-rose-500 text-xs font-semibold bg-inherit"
          onClick={() => setVisibleCollectionTextInput(false)}
        >
          CANCEL
        </button>

        <button
          className="tracking-wide text-white bg-rose-500 text-xs font-semibold px-4 py-1 rounded-lg"
          onClick={() => {
            setVisibleCollectionTextInput(false)
            newCollection(collectionInputValue)
          }}
        >
          SAVE
        </button>
      </div>
    </div>
  )
}

export default CollectionInput
