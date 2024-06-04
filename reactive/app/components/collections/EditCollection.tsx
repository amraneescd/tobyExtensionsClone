function EditCollection({
  editCollectionName,
}: {
  editCollectionName: () => void
}) {
  return (
    <button
      className="h-fit p-1 rounded-md bg-red-200 hover:shadow shadow-red-500 transition-all"
      onClick={editCollectionName}
    >
      <div className="i-material-symbols-edit-outline bg-red-700 w-4 h-4" />
    </button>
  )
}

export default EditCollection
