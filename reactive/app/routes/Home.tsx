import NavBar from '@/components/NavBar'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <NavBar />
        <Outlet />
      </div>
    </div>
  )
}
