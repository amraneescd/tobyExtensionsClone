import MyCollection from './MyCollection'
import Next from './Next'
import StarredCollections from './StarredCollections'
import ToLinks from './ToLinks'

export default function Home({ activeComponent }: any) {
  let content

  switch (activeComponent) {
    case '/':
      content = <MyCollection />
      break
    case '':
      content = <MyCollection />
      break
    case '//next':
      content = <Next />
      break
    case '//starredCollections':
      content = <StarredCollections />
      break
    case '//toLinks':
      content = <ToLinks />
      break
    default:
      content = <div>No content found</div>
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <NavBar />
        {content}
      </div>
    </div>
  )
}
