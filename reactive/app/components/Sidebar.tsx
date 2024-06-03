import { LinksNext, spaces } from '@/utils/sidebarItems'
import Divider from './Divider'
import { useChangeNavBarTitle } from '@/stores/navBar'

function Sidebar() {
  const [activeItem, setActiveItem] = useState(
    window.location.hash.slice(1) || ''
  )

  const changeNavBarTitle = useChangeNavBarTitle((state) => state.changeTitle)

  const navigateTo = (path: string, title: string) => {
    // Update fragment manually
    window.location.hash = path
    // Update active item state and title
    setActiveItem(path.slice(1))
    changeNavBarTitle(title)
  }

  return (
    <div className="w-1/5 border-1 border-solid border-gray-300 h-full pt-8">
      {LinksNext.map((item) => (
        <div
          key={item.name}
          className={`cursor-pointer hover:text-rose-500 transition-all ${
            activeItem === item.name ? 'font-bold text-rose-500' : ''
          }`} // Apply active styles conditionally
          onClick={() => navigateTo(`/${item.name}`, item.title)}
        >
          <div className="flex flex items-center gap-2 px-4 py-1">
            <div className={item.icon} />
            <div>{item.title}</div>
          </div>
        </div>
      ))}
      <Divider />
      <div className="font-bold text-xs px-4 tracking-widest text-gray-700 mb-2">
        SPACES
      </div>
      {spaces.map((item) => (
        <div
          key={item.name}
          className={`cursor-pointer hover:text-rose-500 transition-all ${
            activeItem === item.name ? 'font-bold text-rose-500' : ''
          }`} // Apply active styles conditionally
          onClick={() => navigateTo(`/${item.name}`, item.title)}
        >
          <div className="flex flex items-center gap-2 px-4 py-1">
            <div className={item.icon} />
            <div>{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sidebar
