import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router";
import { routerConfig } from './routes.js'

const config = createHashRouter(routerConfig)

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={config} />
	</StrictMode>,
);
