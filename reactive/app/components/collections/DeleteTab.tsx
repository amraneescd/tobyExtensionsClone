function DeleteTab({
  deleteTab,
  tabIndex,
}: {
  deleteTab: (tabIndex: number) => void
  tabIndex: number
}) {
  return (
    <button
      className="h-fit p-1 rounded-md bg-red-200 hover:shadow shadow-red-500 transition-all"
      onClick={(e) => {
        e.stopPropagation()
        deleteTab(tabIndex)
      }}
    >
      <div className="i-material-symbols-delete bg-red-700 w-4 h-4" />
    </button>
  )
}

export default DeleteTab
