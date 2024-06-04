function StarCollectionButton({
  starCollection,
  isStarredCollection,
}: {
  starCollection: () => void
  isStarredCollection: boolean
}) {
  return (
    <button
      className="h-fit p-1 rounded-md bg-red-200 hover:shadow shadow-red-500 transition-all"
      onClick={() => starCollection()}
    >
      <div
        className={`${isStarredCollection ? 'i-material-symbols-star' : 'i-material-symbols-star-outline'} bg-red-700 w-4 h-4`}
      />
    </button>
  )
}

export default StarCollectionButton
