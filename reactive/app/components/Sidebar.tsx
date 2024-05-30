import { LinksNext, spaces } from '@/utils/sidebarItems'
import Divider from './Divider'
import { useChangeNavBarTitle } from '@/stores/navBar'

function Sidebar() {
  const changeNavBarTitle = useChangeNavBarTitle((state) => state.changeTitle)

  return (
    <div className="w-1/5 border-2 border-gray-300 h-screen pt-8">
      {LinksNext.map((item) => (
        <NavLink
          onClick={() => changeNavBarTitle(item.title)}
          key={item.name}
          to={`/${item.name}`}
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-rose-500 cursor-pointer'
              : 'cursor-pointer hover:text-rose-500 transition-all'
          }
        >
          <div className="flex flex items-center gap-2 px-4 py-1">
            <div className={item.icon} />

            <div>{item.title}</div>
          </div>
        </NavLink>
      ))}
      <Divider />
      <div className="font-bold text-xs px-4 tracking-widest text-gray-700 mb-2">
        SPACES
      </div>
      {spaces.map((item) => (
        <NavLink
          onClick={() => changeNavBarTitle(item.title)}
          key={item.name}
          to={`/${item.name}`}
          className={({ isActive }) =>
            isActive
              ? 'font-bold cursor-pointer text-rose-500'
              : 'cursor-pointer hover:text-rose-500 transition-all'
          }
        >
          <div className="flex flex items-center gap-2 px-4 py-1">
            <div className={item.icon} />
            <div>{item.title}</div>
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar
