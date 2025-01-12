import NavigationBar from '../components/navigationBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

const artistLayout = () => {
  return (
    <div>
      <NavigationBar hamburgerShow={true} role="artist" />
      <Outlet />
      <Footer />
    </div>
  )
}

export default artistLayout