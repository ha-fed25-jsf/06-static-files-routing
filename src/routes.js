// Importera komponenter
import Root from "./layout/Root.jsx";


// Lista med route-objekt
export const routerConfig = [
	{
		path: '/',  // man kan också skriva:  index: true
		Component: Root,
		children: [
			// startsida
			// galleri
		]
	}
]