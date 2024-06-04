function SaveName({ SaveName }: { SaveName: () => void }) {
  return (
    <button
      className="p-1 rounded-md bg-red-200 hover:shadow shadow-red-500 transition-all"
      onClick={() => SaveName()}
    >
      <div className="i-icon-park-solid-correct bg-red-700 w-4 h-4" />
    </button>
  )
}

export default SaveName
