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
import DashboardAdmin from "../pages/adminPage/dashboardAdmin";
import LogInAdmin from "../pages/adminPage/logInAdmin";
import AddExhibitAdmin from "../pages/adminPage/addExhibit";
import LandingPage1 from "../../assets/landingPage/LandingPage1.png";
import LandingPage2 from "../../assets/landingPage/LandingPage2.png";
import LandingPage3 from "../../assets/landingPage/LandingPage3.png";
//artistPages
import AllArtArtist from "../pages/artistPage/allArtArtist";
import ExhibitPageArtist from "../pages/artistPage/exhibitPageArtist";
import FeaturedArtistPageArtist from "../pages/artistPage/featuredArtistArtist";
import LandingPageArtist from "../pages/artistPage/landingPageArtist";
import LogInArtist from "../pages/artistPage/logInArtist";
import ProfileArtist from "../pages/artistPage/artistProfile";

import BGexhibitions from "../../assets/BGexhibitions.png";

import lopenzeLogo from "../../assets/lopenze_logo.png";
import Exhibit_1 from "../../assets/Exhibits/Exhibit_1.png";
import Exhibit_2 from "../../assets/Exhibits/Exhibit_2.png";
import Exhibit_3 from "../../assets/Exhibits/Exhibit_3.png";
import Exhibit_4 from "../../assets/Exhibits/Exhibit_4.png";
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
import AddImageIcon from "../../assets/AddImageIcon.png";
import AddArt from "../pages/adminPage/addArt";
import Profile from "../pages/adminPage/profile";
import logOutAdmin from "../pages/adminPage/logOutAdmin";
import LogOutArtist from "../pages/artistPage/logOutArtist";
import ViewArts from "../pages/userPage/viewArts";
import ViewExhibits from "../pages/userPage/viewExhibits";
import Guest from "../pages/userPage/Guest";
import ContactUs from "../pages/userPage/ContactUs";
import ContactUsAdmin from "../pages/adminPage/ContactUsAdmin";
import History from "../pages/adminPage/history";
import GuestAdmin from "../pages/adminPage/GuestAdmin";
import ViewArtsArtist from "../pages/artistPage/viewArtsArtist";
import ViewArtsAdmin from "../pages/adminPage/viewArtsAdmin";
import AddExhibitArtist from "../pages/artistPage/addExhibitArtist";
import ArtistEditProfile from "../pages/artistPage/artistEditProfile";
import ViewArtistProfile from "../pages/userPage/viewArtistProfile";
import ViewExhibitsArtist from "../pages/artistPage/viewExhibitsArtist";
import ViewArtistProfileArtist from "../pages/artistPage/viewArtistProfileArtist";
import ViewExhibitsAdmin from "../pages/adminPage/viewExhibitsAdmin";
import ViewArtistAdmin from "../pages/adminPage/viewArtistProfileAdmin";
// import createAccount from "../pages/userPage/createAccount";

//Images
export const Image = [
  { src: lopenzeLogo, alt: "Lopenze Logo" },
  { src: BGexhibitions, alt: "BGexhibitions" },
];

export const LandingPageImage = [
  { src: LandingPage1, alt: "Landing Page1" },
  { src: LandingPage2, alt: "Landing Page2" },
  { src: LandingPage3, alt: "Landing Page3" },
];

export const ExhibitsData = [
  {
    id: "1",
    title: "Shades of Solitude",
    date: "December 10–December 30, 2024",
    location: "Serenity Art Gallery, Davao City",
    description:
      "A collection of introspective artworks exploring solitude, self-reflection, and inner peace. Paintings, photographs, and installations reveal the profound power of stillness in a chaotic world.",
    image: {
      src: ExhibitImage1,
      alt: "ExhibitsImage1",
    },
    views: 250,
  },
  {
    id: "2",
    title: "The Art of Now",
    date: "January 15–February 5, 2024",
    location: "Boundless Arts Studio, Makati",
    description:
      "Step into a realm where imagination knows no bounds. This exhibit brings together an eclectic collection of artworks that traverse diverse styles, mediums, and perspectives.",
    image: {
      src: ExhibitImage2,
      alt: "ExhibitsImage2",
    },
    views: 400,
  },
  {
    id: "3",
    title: "Faces of Humanity",
    date: "September 1–September 20, 2024",
    location: "Cultural Center of the Philippines, Pasay City",
    description:
      "A powerful exploration of identity and diversity. This exhibit features portraits, sculptures, and multimedia projects that celebrate the stories and struggles that define us as human beings.",
    image: {
      src: ExhibitImage3,
      alt: "ExhibitsImage3",
    },
    views: 320,
  },
  {
    id: "4",
    title: "Fragments of Time",
    date: "April 10–April 30, 2024",
    location: "Metropolitan Art Museum, Quezon City",
    description:
      "Explore the relationship between history and memory through mixed-media art and photography. 'Fragments of Time' captures moments that define our collective past and inspire reflections on our shared future.",
    image: {
      src: ExhibitImage4,
      alt: "ExhibitsImage4",
    },
    views: 500,
  },
  {
    id: "5",
    title: "Brushstrokes of Heritage",
    date: "January 15, 2025",
    location: "National Museum of Fine Arts, Manila, Philippines",
    description:
      "This exhibit showcases the richness of Filipino heritage through traditional and contemporary art forms. Featuring intricate paintings, sculptures, and crafts from local artists, 'Brushstrokes of Heritage' highlights the stories and culture of the Philippines. Visitors can also enjoy live painting sessions, craft demonstrations, and cultural performances that bring the artwork to life.",
    image: {
      src: Exhibit_1,
      alt: "Exhibit 1",
    },
    views: 650,
  },
  {
    id: "6",
    title: "Cultural Kaleidoscope",
    date: "February 20, 2025",
    location: "Cultural Center of the Philippines, Pasay City",
    description:
      "Experience a vibrant celebration of cultural diversity through an array of art forms, including painting, sculpture, and digital media. The 'Cultural Kaleidoscope' exhibit brings together artists from different backgrounds to showcase the beauty of cultural fusion and the power of artistic expression in fostering understanding among communities.",
    image: {
      src: Exhibit_4,
      alt: "Exhibit 4",
    },
    views: 456,
  },
  {
    id: "7",
    title: "Art Beyond Boundaries",
    date: "March 5, 2025",
    location: "Ayala Museum, Makati City",
    description:
      "Breaking traditional boundaries, 'Art Beyond Boundaries' features innovative works by contemporary artists who challenge the status quo. This exhibit explores themes of identity, technology, and the future, offering visitors a glimpse into the possibilities of art in a rapidly changing world.",
    image: {
      src: Exhibit_2,
      alt: "Exhibit 5",
    },
    views: 54,
  },
  {
    id: "8",
    title: "Nature's Symphony",
    date: "March 25, 2025",
    location: "The Mind Museum, Taguig City",
    description:
      "Delve into the harmonious relationship between art and nature with 'Nature's Symphony.' This exhibit features breathtaking landscapes, wildlife art, and environmental installations that highlight the beauty and fragility of our natural world. Join us in celebrating the wonders of nature and the artists who capture its essence.",
    image: {
      src: Exhibit_3,
      alt: "Exhibit 6",
    },
    views: 23,
  },
];

export const ArtisyImage = [
  {
    src: Artist_1,
    Alt: "Artist1",
    Name: "Ajihmer Balahula",
    Email: "Aje@gmail.com",
    Instagram: "@ajihmer.art",
    Facebook: "Ajihmer Balahula Art",
    Description:
      "Contemporary artist specializing in abstract expressionism. My work explores themes of identity and cultural heritage through bold colors and dynamic compositions.",
  },
  {
    src: Artist_2,
    Alt: "Artist2",
    Name: "John Paul Almazan",
    Email: "Almazan@gmail.com",
    Instagram: "@jpalmazan",
    Facebook: "JP Almazan Fine Arts",
    Description:
      "Traditional oil painter focused on Philippine landscapes and cultural scenes. Each piece tells a story of our rich heritage and natural beauty.",
  },
  {
    src: Artist_3,
    Alt: "Artist3",
    Name: "Arianne Gupa",
    Email: "Gupaa9@gmail.com",
    Instagram: "@arianne.creates",
    Facebook: "Arianne Gupa Arts",
    Description:
      "Mixed media artist combining traditional techniques with digital elements. I create immersive pieces that bridge the gap between classical and contemporary art.",
  },
  {
    src: Artist_4,
    Alt: "Artist4",
    Name: "Martinne Tanada",
    Email: "Mars29@gmail.com",
    Instagram: "@martinne.art",
    Facebook: "Martinne T Gallery",
    Description:
      "Digital artist and illustrator specializing in fantasy and surreal artwork. My pieces transport viewers to dreamlike worlds filled with wonder and imagination.",
  },
  {
    src: Artist_5,
    Alt: "Artist5",
    Name: "Stephanie Lucero",
    Email: "Lucero090@gmail.com",
    Instagram: "@steph.lucero",
    Facebook: "Stephanie Lucero Art",
    Description:
      "Watercolor specialist focusing on botanical and nature-inspired pieces. I capture the delicate beauty of flora and fauna through subtle colors and precise brushwork.",
  },
  {
    src: Artist_4,
    Alt: "Artist1",
    Name: "Ajihmer Balahula",
    Email: "Aje@gmail.com",
    Instagram: "@ajihmer.art",
    Facebook: "Ajihmer Balahula Art",
    Description:
      "Contemporary artist specializing in abstract expressionism. My work explores themes of identity and cultural heritage through bold colors and dynamic compositions.",
  },
  {
    src: Artist_5,
    Alt: "Artist2",
    Name: "John Paul Almazan",
    Email: "Almazan@gmail.com",
    Instagram: "@jpalmazan",
    Facebook: "JP Almazan Fine Arts",
    Description:
      "Traditional oil painter focused on Philippine landscapes and cultural scenes. Each piece tells a story of our rich heritage and natural beauty.",
  },
  {
    src: Artist_1,
    Alt: "Artist3",
    Name: "Arianne Gupa",
    Email: "Gupaa9@gmail.com",
    Instagram: "@arianne.creates",
    Facebook: "Arianne Gupa Arts",
    Description:
      "Mixed media artist combining traditional techniques with digital elements. I create immersive pieces that bridge the gap between classical and contemporary art.",
  },
  {
    src: Artist_3,
    Alt: "Artist4",
    Name: "Martinne Tanada",
    Email: "Mars29@gmail.com",
    Instagram: "@martinne.art",
    Facebook: "Martinne T Gallery",
    Description:
      "Digital artist and illustrator specializing in fantasy and surreal artwork. My pieces transport viewers to dreamlike worlds filled with wonder and imagination.",
  },
  {
    src: Artist_2,
    Alt: "Artist5",
    Name: "Stephanie Lucero",
    Email: "Lucero090@gmail.com",
    Instagram: "@steph.lucero",
    Facebook: "Stephanie Lucero Art",
    Description:
      "Watercolor specialist focusing on botanical and nature-inspired pieces. I capture the delicate beauty of flora and fauna through subtle colors and precise brushwork.",
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
    views: 123,
    image: { src: imageArt1, alt: "imageArt1" },
  },
  {
    title: "Oaxaca Landscape",
    artist: "Abelardo Lopez",
    type: "Painting/Print",
    description:
      "Abelardo Lopez, born in 1957, depicts the landscapes of Oaxaca in his paintings and prints, capturing the region's vibrant colors and rich cultural heritage.",
    views: 456,
    image: { src: imageArt2, alt: "imageArt2" },
  },
  {
    title: "Our Lady of Guidance",
    artist: "Juan Pedro López",
    type: "Painting on Canvas",
    description:
      "Created by one of Venezuela's most accomplished 18th-century artists, this painting reflects López's mastery in religious iconography, depicting the Virgin Mary as a guide and protector.",
    views: 789,
    image: { src: imageArt3, alt: "imageArt3" },
  },
  {
    title: "The Enchanted Forest",
    artist: "Emily Rivera",
    type: "Oil Painting",
    description:
      "This piece brings to life the magical charm of forests, creating a captivating blend of realism and fantasy through vibrant brushstrokes.",
    views: 101,
    image: { src: imageArt4, alt: "imageArt4" },
  },
  {
    title: "Dreamscape",
    artist: "Carlos Martinez",
    type: "Watercolor",
    description:
      "A surreal depiction of dreamlike states, crafted with soft, flowing watercolors to evoke a sense of wonder and tranquility.",
    views: 234,
    image: { src: imageArt5, alt: "imageArt5" },
  },
  {
    title: "Modern Chaos",
    artist: "Sophia Chan",
    type: "Digital Collage",
    description:
      "A bold digital collage capturing the chaotic energy of urban life, blending abstract and geometric elements with vivid colors.",
    views: 567,
    image: { src: imageArt6, alt: "imageArt6" },
  },
  {
    title: "Golden Horizon",
    artist: "Samuel Ortiz",
    type: "Acrylic Painting",
    description:
      "A stunning acrylic work capturing the beauty of a golden sunset across a tranquil horizon, blending warm hues with striking contrasts.",
    views: 890,
    image: { src: imageArt7, alt: "imageArt7" },
  },
  {
    title: "Clay Majesty",
    artist: "Ana Valdez",
    type: "Clay Sculpture",
    description:
      "A remarkable clay sculpture showcasing intricate detailing, celebrating traditional artistry with a modern twist.",
    views: 345,
    image: { src: imageArt8, alt: "imageArt8" },
  },
  {
    title: "The Future",
    artist: "Mia Lee",
    type: "Mixed Media",
    description:
      "An innovative mixed media piece that imagines a futuristic world, combining digital and physical elements for a compelling narrative.",
    views: 678,
    image: { src: imageArt9, alt: "imageArt9" },
  },
];

//mock up data for history

export type HistoryEntry = {
  userImage: string;
  userName: string;
  userEmail: string;
  action: string;
  date: string;
};
export const mockHistoryData: HistoryEntry[] = [
  {
    userImage: ArtisyImage[0].src,
    userName: ArtisyImage[0].Name,
    userEmail: ArtisyImage[0].Email,
    action: "Added a new art piece",
    date: "Jan 19, 2025",
  },
  {
    userImage: ArtisyImage[1].src,
    userName: ArtisyImage[1].Name,
    userEmail: ArtisyImage[1].Email,
    action: "Updated profile information",
    date: "Jan 18, 2025",
  },
  {
    userImage: ArtisyImage[2].src,
    userName: ArtisyImage[2].Name,
    userEmail: ArtisyImage[2].Email,
    action: "Created a new exhibition",
    date: "Jan 17, 2025",
  },
  {
    userImage: ArtisyImage[3].src,
    userName: ArtisyImage[3].Name,
    userEmail: ArtisyImage[3].Email,
    action: "Deleted an artwork",
    date: "Jan 16, 2025",
  },
  {
    userImage: ArtisyImage[0].src,
    userName: ArtisyImage[0].Name,
    userEmail: ArtisyImage[0].Email,
    action: "Modified exhibition details",
    date: "Jan 15, 2025",
  },
  {
    userImage: ArtisyImage[1].src,
    userName: ArtisyImage[1].Name,
    userEmail: ArtisyImage[1].Email,
    action: "Added new social media links",
    date: "Jan 14, 2025",
  },
  {
    userImage: ArtisyImage[2].src,
    userName: ArtisyImage[2].Name,
    userEmail: ArtisyImage[2].Email,
    action: "Updated artwork description",
    date: "Jan 13, 2025",
  },
  {
    userImage: ArtisyImage[3].src,
    userName: ArtisyImage[3].Name,
    userEmail: ArtisyImage[3].Email,
    action: "Changed profile picture",
    date: "Jan 12, 2025",
  },
  {
    userImage: ArtisyImage[0].src,
    userName: ArtisyImage[0].Name,
    userEmail: ArtisyImage[0].Email,
    action: "Added new art collection",
    date: "Jan 11, 2025",
  },
];

// Mock data for invited guests and artists
export interface InvitedGuest {
  id: string;
  name: string;
  email: string;
  status: "Pending" | "Accepted" | "Declined";
}

export interface InvitedArtist {
  id: string;
  name: string;
  email: string;
  status: "Pending" | "Accepted" | "Declined";
}

export const mockInvitedGuests: InvitedGuest[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    status: "Accepted",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    status: "Pending",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike.j@example.com",
    status: "Declined",
  },
];

export const mockInvitedArtists: InvitedArtist[] = [
  {
    id: "1",
    name: "Maria Garcia",
    email: "maria.art@example.com",
    status: "Accepted",
  },
  {
    id: "2",
    name: "David Chen",
    email: "david.chen@example.com",
    status: "Pending",
  },
  {
    id: "3",
    name: "Sarah Wilson",
    email: "sarah.w@example.com",
    status: "Accepted",
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
    { path: "/viewArtistProfile", element: <ViewArtistProfile /> },
    { path: "/viewArts", element: <ViewArts /> },
    { path: "/viewExhibits", element: <ViewExhibits /> },
    { path: "/guest", element: <Guest /> },
    { path: "/contactUs", element: <ContactUs /> },
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
    { path: "/logOutAdmin", element: <LogOutAdmin /> },
    { path: "/addArt", element: <AddArt /> },
    { path: "/contactUsAdmin", element: <ContactUsAdmin /> },
    { path: "/history", element: <History /> },
    { path: "/guestAdmin", element: <GuestAdmin /> },
    { path: "/viewArtsAdmin", element: <ViewArtsAdmin /> },
    { path: "/dashboardAdmin", element: <DashboardAdmin /> },
    { path: "/viewExhibitsAdmin", element: <ViewExhibitsAdmin /> },
    { path: "/viewArtistProfileAdmin", element: <ViewArtistAdmin /> },
    // { path: "/profileAdmin", element: <ProfileAdmin /> },
  ],
  ARTIST: [
    { path: "/artist", element: <LandingPageArtist /> },
    { path: "/allArtArtist", element: <AllArtArtist /> },
    { path: "/exhibitPageArtist", element: <ExhibitPageArtist /> },
    { path: "/addExhibitArtist", element: <AddExhibitArtist /> },
    { path: "/featuredArtistArtist", element: <FeaturedArtistPageArtist /> },
    { path: "/landingPageArtist", element: <LandingPageArtist /> },
    { path: "/logInArtist", element: <LogInArtist /> },
    { path: "/logOutArtist", element: <LogOutArtist /> },
    { path: "/profileArtist", element: <ProfileArtist /> },
    { path: "/viewArtsArtist", element: <ViewArtsArtist /> },
    { path: "/viewExhibitsArtist", element: <ViewExhibitsArtist /> },
    { path: "/artistEditProfile", element: <ArtistEditProfile /> },
    { path: "/viewArtistProfileArtist", element: <ViewArtistProfileArtist /> },
  ],
};

//Login Image
export const LoginPicture = [{ src: LoginImage, alt: "Login Picture" }];

//Icons
export const Icons = [{ src: AddImageIcon, alt: "Add Image Icon" }];

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
