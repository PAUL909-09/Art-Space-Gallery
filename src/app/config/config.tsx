// import all the pages here

//userPages
import LandingPage from "../pages/userPage/landingPage";
import ExhibitPage from "../pages/userPage/exhibitPage";
import FeaturedArtist from "../pages/userPage/featuredArtist";
import AllArtPage from "../pages/userPage/allArt";
import LogIn from "../pages/userPage/logIn";

//adminPages
import CreateAccountAdmin from "../pages/adminPage/createAccount";
//import ProfileAdmin from "../pages/adminPage/profile";
import LandingPageAdmin from "../pages/adminPage/landingPageAdmin";
import ExhibitPageAdmin from "../pages/adminPage/exhibitPageAdmin";
import FeaturedArtistPageAdmin from "../pages/adminPage/featuredArtistAdmin";
import AllArtPageAdmin from "../pages/adminPage/allArtAdmin";
import DashboardAdmin from "../pages/adminPage/dashboard";
import LogInAdmin from "../pages/adminPage/logInAdmin";
import AddExhibitAdmin from "../pages/adminPage/addExhibit";

//artistPages
import AllArtArtist from "../pages/artistPage/allArtAdminArtist";
import ExhibitPageArtist from "../pages/artistPage/exhibitPageArtist";
import FeaturedArtistPageArtist from "../pages/artistPage/featuredArtistArtist";
import LandingPageArtist from "../pages/artistPage/landingPageArtist";
import LogInArtist from "../pages/artistPage/logInArtist";
import ProfileArtist from "../pages/artistPage/profile";





import BGexhibitions from "../../assets/BGexhibitions.png";
import imageSlide from "../../assets/Image slide.png";
import lopenzeLogo from "../../assets/lopenze_logo.png";
import Exhibit_1 from "../../assets/Exhibits/Exhibit_1.png";
import Exhibit_2 from "../../assets/Exhibits/Exhibit_2.png";
import Exhibit_3 from "../../assets/Exhibits/Exhibit_3.png";
import Artist_1 from "../../assets/Artist/Artist_1.png";
import Artist_2 from "../../assets/Artist/Artist_2.png";
import Artist_3 from "../../assets/Artist/Artist_3.png";
import Artist_4 from "../../assets/Artist/Artist_4.png";
import Artist_5 from "../../assets/Artist/Artist_5.png";
import art1 from "../../assets/Arts/art1.png";
import art2 from "../../assets/Arts/art2.png";
import art3 from "../../assets/Arts/art3.png";
import art4 from "../../assets/Arts/art4.png";
import art5 from "../../assets/Arts/art5.png";
import art6 from "../../assets/Arts/art6.png";
import art7 from "../../assets/Arts/art7.png";
import art8 from "../../assets/Arts/art8.png";
import art9 from "../../assets/Arts/art9.png";
import art10 from "../../assets/Arts/art10.png";
import art11 from "../../assets/Arts/art11.png";
import imageArt1 from "../../assets/Arts/imageArt1.png";
import imageArt2 from "../../assets/Arts/imageArt2.png";
import imageArt3 from "../../assets/Arts/imageArt3.png";
import imageArt4 from "../../assets/Arts/imageArt4.png";
import imageArt5 from "../../assets/Arts/imageArt5.png";
import imageArt6 from "../../assets/Arts/imageArt6.png";
import imageArt7 from "../../assets/Arts/imageArt7.png";
import imageArt8 from "../../assets/Arts/imageArt8.png";
import imageArt9 from "../../assets/Arts/imageArt9.png";
import ExhibitImage1 from "../../assets/Exhibits/ExhibitImage1.png";
import ExhibitImage2 from "../../assets/Exhibits/ExhibitImage2.png";
import ExhibitImage3 from "../../assets/Exhibits/ExhibitImage3.png";
import ExhibitImage4 from "../../assets/Exhibits/ExhibitImage4.png";
import LogOutAdmin from "../pages/adminPage/logOutAdmin";
import LoginImage from "../../assets/LoginImage.png";
import AddImageIcon from "../../assets/AddImageIcon.png"
import AddArt from "../pages/adminPage/addArt";
import Profile from "../pages/adminPage/profile";

// import createAccount from "../pages/userPage/createAccount";

//Images
export const Image = [
  { src: imageSlide, alt: "Image Slide" },
  { src: lopenzeLogo, alt: "Lopenze Logo" },
  { src: BGexhibitions, alt: "BGexhibitions" },
];

export const ExhibitsImages = [
  {
    src: Exhibit_1,
    alt: "Exhibit 1",
    title: "Exhibit Title 1",
    description: "Description of Exhibit 1",
    date: "January 15, 2025",
  },
  {
    src: Exhibit_2,
    alt: "Exhibit 2",
    title: "Exhibit Title 2",
    description: "Description of Exhibit 2",
    date: "February 20, 2025",
  },
  {
    src: Exhibit_3,
    alt: "Exhibit 3",
    title: "Exhibit Title 3",
    description: "Description of Exhibit 3",
    date: "March 10, 2025",
  },
];

// File: src/app/config/config.tsx

export const ExhibitsData = [
  {
    title: "Shades of Solitude",
    date: "December 10–December 30, 2024",
    location: "Serenity Art Gallery, Davao City",
    description:
      "A collection of introspective artworks exploring solitude, self-reflection, and inner peace. Paintings, photographs, and installations reveal the profound power of stillness in a chaotic world.",
    image: { src: ExhibitImage1, alt: "ExhibitsImage1" },
  },
  {
    title: "The Art of Now",
    date: "January 15–February 5, 2024",
    location: "Boundless Arts Studio, Makati",
    description:
      "Step into a realm where imagination knows no bounds. This exhibit brings together an eclectic collection of artworks that traverse diverse styles, mediums, and perspectives.",
    image: { src: ExhibitImage2, alt: "ExhibitsImage2" },
  },
  {
    title: "Faces of Humanity",
    date: "September 1–September 20, 2024",
    location: "Cultural Center of the Philippines, Pasay City",
    description:
      "A powerful exploration of identity and diversity. This exhibit features portraits, sculptures, and multimedia projects that celebrate the stories and struggles that define us as human beings.",
    image: { src: ExhibitImage3, alt: "ExhibitsImage3" },
  },
  {
    title: "Fragments of Time",
    date: "April 10–April 30, 2024",
    location: "Metropolitan Art Museum, Quezon City",
    description:
      "Explore the relationship between history and memory through mixed-media art and photography. 'Fragments of Time' captures moments that define our collective past and inspire reflections on our shared future.",
    image: { src: ExhibitImage4, alt: "ExhibitsImage4" },
  },
];

export const ArtisyImage = [
  {
    src: Artist_1,
    Alt: "Artist1",
    Name: "Ajihmer Balahula",
    Email: "Aje@gmail.com",
  },
  {
    src: Artist_2,
    Alt: "Artist2",
    Name: "John Paul Almazan",
    Email: "Almazan@gmail.com",
  },
  {
    src: Artist_3,
    Alt: "Artist3",
    Name: "Arianne Gupa",
    Email: "Gupaa9@gmail.com",
  },
  {
    src: Artist_4,
    Alt: "Artist4",
    Name: "Martinne Tanada",
    Email: "Mars29@gmail.com",
  },
  {
    src: Artist_5,
    Alt: "Artist5",
    Name: "Stephanie Lucero",
    Email: "Lucero090@gmail.com",
  },
];

export const ArtsImage = [
  { src: art1, alt: "art1" },
  { src: art2, alt: "art2" },
  { src: art3, alt: "art3" },
  { src: art4, alt: "art4" },
  { src: art5, alt: "art5" },
  { src: art6, alt: "art6" },
  { src: art7, alt: "art7" },
  { src: art8, alt: "art8" },
  { src: art9, alt: "art9" },
  { src: art10, alt: "art10" },
  { src: art11, alt: "art11" },
];
export const ArtsData = [
  {
    title: "Our Lady",
    artist: "Alma Lopez",
    type: "Digital Print",
    description:
      "Created in 1999, this artwork presents a contemporary interpretation of the Virgin of Guadalupe, blending traditional religious iconography with modern digital techniques.",
    image: { src: imageArt1, alt: "imageArt1" },
  },
  {
    title: "Oaxaca Landscape",
    artist: "Abelardo Lopez",
    type: "Painting/Print",
    description:
      "Abelardo Lopez, born in 1957, depicts the landscapes of Oaxaca in his paintings and prints, capturing the region's vibrant colors and rich cultural heritage.",
    image: { src: imageArt2, alt: "imageArt2" },
  },
  {
    title: "Our Lady of Guidance",
    artist: "Juan Pedro López",
    type: "Painting on Canvas",
    description:
      "Created by one of Venezuela's most accomplished 18th-century artists, this painting reflects López's mastery in religious iconography, depicting the Virgin Mary as a guide and protector.",
    image: { src: imageArt3, alt: "imageArt3" },
  },
  {
    title: "The Enchanted Forest",
    artist: "Emily Rivera",
    type: "Oil Painting",
    description:
      "This piece brings to life the magical charm of forests, creating a captivating blend of realism and fantasy through vibrant brushstrokes.",
    image: { src: imageArt4, alt: "imageArt4" },
  },
  {
    title: "Dreamscape",
    artist: "Carlos Martinez",
    type: "Watercolor",
    description:
      "A surreal depiction of dreamlike states, crafted with soft, flowing watercolors to evoke a sense of wonder and tranquility.",
    image: { src: imageArt5, alt: "imageArt5" },
  },
  {
    title: "Modern Chaos",
    artist: "Sophia Chan",
    type: "Digital Collage",
    description:
      "A bold digital collage capturing the chaotic energy of urban life, blending abstract and geometric elements with vivid colors.",
    image: { src: imageArt6, alt: "imageArt6" },
  },
  {
    title: "Golden Horizon",
    artist: "Samuel Ortiz",
    type: "Acrylic Painting",
    description:
      "A stunning acrylic work capturing the beauty of a golden sunset across a tranquil horizon, blending warm hues with striking contrasts.",
    image: { src: imageArt7, alt: "imageArt7" },
  },
  {
    title: "Clay Majesty",
    artist: "Ana Valdez",
    type: "Clay Sculpture",
    description:
      "A remarkable clay sculpture showcasing intricate detailing, celebrating traditional artistry with a modern twist.",
    image: { src: imageArt8, alt: "imageArt8" },
  },
  {
    title: "The Future",
    artist: "Mia Lee",
    type: "Mixed Media",
    description:
      "An innovative mixed media piece that imagines a futuristic world, combining digital and physical elements for a compelling narrative.",
    image: { src: imageArt9, alt: "imageArt9" },
  },
];


// App Routes
export const APP_ROUTES = {
  MAIN: [
    { path: "/", element: <LandingPage /> },
    { path: "/exhibitionsPage", element: <ExhibitPage /> },
    { path: "/featuredArtistPage", element: <FeaturedArtist /> },
    { path: "/allArtPage", element: <AllArtPage /> },
    { path: "/logIn", element: <LogIn /> },
    { path: "/profile", element: <Profile /> },
  ],
  ADMIN: [
    { path: "/admin", element: <LandingPageAdmin /> },
    { path: "/exhibitionsPageAdmin", element: <ExhibitPageAdmin /> },
    { path: "/featuredArtistPageAdmin", element: <FeaturedArtistPageAdmin /> },
    { path: "/allArtPageAdmin", element: <AllArtPageAdmin /> },
    { path: "/dashboardAdmin", element: <DashboardAdmin /> },
    { path: "/addExhibitAdmin", element: <AddExhibitAdmin /> },
    { path: "/createAccountAdmin", element: <CreateAccountAdmin /> },
    { path: "/logInAdmin", element: <LogInAdmin /> },
    { path: "/profileAdmin", element: <ProfileAdmin /> },
  ],
  ARTIST: [
    { path: "/artist", element: <LandingPageArtist /> },
    { path: "/allArtArtist", element: <AllArtArtist /> },
    { path: "/exhibitPageArtist", element: <ExhibitPageArtist /> },
    { path: "/featuredArtistArtist", element: <FeaturedArtistPageArtist /> },
    { path: "/landingPageArtist", element: <LandingPageArtist /> },
    { path: "/logInArtist", element: <LogInArtist /> },
    { path: "/profileArtist", element: <ProfileArtist /> },
  ],
};
=======
//Login Image
export const LoginPicture = [
  { src: LoginImage, alt: "Login Picture" },
];

//Icons
export const Icons =[
  { src: AddImageIcon, alt: "Add Image Icon" },
];


// API Endpoints
export const API_ENDPOINTS = {
  USER: {
    GET_ALL: "api/user/get/all",
    GET: "api/user/get/:id",
    CREATE: "api/user/create",
    UPDATE: "api/user/update",
    DELETE: "api/user/delete/:id",
  },
};

export const APP_COLORS = {
  primary: "bg-[#FAF9F6]",
  secondary: "bg-[#C62A35]",
};
