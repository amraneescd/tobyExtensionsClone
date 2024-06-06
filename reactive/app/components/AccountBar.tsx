function AccountBar() {
  return (
    <div className="p-4 h-full flex flex-col items-center gap-4">
      <div className="bg-rose-500 w-10 h-10 p-2px rounded-full">
        <div className="bg-rose-500 border-white border-solid border-1px w-full h-full rounded-full flex justify-center items-center text-white font-bold">
          UO
        </div>
      </div>
      <button onClick={() => mode.toggleColorMode()}>
        {mode.value == 'light' ? (
          <div className="i-ph-moon-stars w-6 h-6" />
        ) : (
          <div className="i-ph-sun-dim-light w-6 h-6 bg-white" />
        )}
      </button>
    </div>
  )
}

export default AccountBar
