import NavigationBar from '../components/forArtist/navigationBarArtist'
import { Outlet } from 'react-router-dom'
import Footer from '../components/forArtist/footerArtist'

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