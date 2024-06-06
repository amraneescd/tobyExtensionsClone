function DragArea() {
  const tabName = useSetDraggedTabData((state) => state.tabTitle)
  let tabIcon = useSetDraggedTabData((state) => state.tabIcon)
  return (
    <div
      className={`flex justify-center items-center font-bold tracking-wide border-dotted border-gray-500 rounded-lg overflow-hidden transition-all opacity-50 pointer-events-none`}
      onDragOver={(e) => {
        e.preventDefault()
      }}
    >
      <div className="w-full rounded-md px-4 overflow-hidden no-underline text-black group relative cursor-pointer">
        <div className="flex items-center gap-4">
          <img
            src={tabIcon}
            className="w-6 h-6"
          />

          <p className={`truncate ${mode.value == 'dark' && 'text-white'}`}>
            {tabName}
          </p>
        </div>
        <Divider />

        <p className="truncate text-xs text-gray-500">{tabName}</p>

        {/* Tab Options  */}
        <div className="absolute flex flex-row-reverse gap-1 bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all"></div>
        {/* Tab Options  */}
      </div>
    </div>
  )
}

export default DragArea
