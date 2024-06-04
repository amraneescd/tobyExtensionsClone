import MyCollection from './MyCollection'
import StarredCollections from './StarredCollections'

export default function Home({ activeComponent }: any) {
  let content

  switch (activeComponent) {
    case '/':
      content = <MyCollection />
      break
    case '':
      content = <MyCollection />
      break
    case '//starredCollections':
      content = <StarredCollections />
      break
    default:
      content = <div>Wrong Page</div>
  }

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Warning for smaller screens  */}
      <h3 className="w-full h-full absolute top-0 left-0 flex justify-center items-center lg:hidden text-xl text-gray-500 tracking-wide text-center">
        This Extension Was Designed For Computers And Bigger Screens Only
      </h3>

      <div className="h-full hidden lg:flex">
        <Sidebar />
        <div className="h-full flex-1 flex flex-col">
          <NavBar />
          {content}
        </div>
      </div>
    </div>
  )
}
