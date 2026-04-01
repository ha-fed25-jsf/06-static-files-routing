// Importera komponenter
import Root from "./layout/Root.jsx";
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'


// Lista med route-objekt
export const routerConfig = [
	{
		path: '/',  // man kan också skriva:  index: true
		Component: Root,
		children: [
			{
				path: '/',
				Component: Home
			},
			{
				path: '/gallery',
				Component: Gallery
			}
		]
	}
]