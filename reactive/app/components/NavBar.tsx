import { useChangeNavBarTitle } from '@/stores/navBar'
import Divider from './Divider'

function NavBar() {
  const navBarTitle = useChangeNavBarTitle((state) => state.title)

  return (
    <div>
      <div className="px-6 pt-2 text-xl">{navBarTitle}</div>
      <Divider />
    </div>
  )
}

export default NavBar
