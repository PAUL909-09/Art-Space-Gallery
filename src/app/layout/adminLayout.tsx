import NavigationBar from '../components/forAdmin/navigationBarAdmin'
import { Outlet } from 'react-router-dom'
import FooterAdmin from '../components/forAdmin/footerAdmin'

const adminLayout = () => {
  return (
    <div>
      <NavigationBar hamburgerShow={true} role="admin" />
      <Outlet />
      <FooterAdmin />
    </div>
  )
}

export default adminLayout