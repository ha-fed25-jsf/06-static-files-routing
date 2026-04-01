import './Root.css'
import { Outlet, NavLink } from "react-router"

const Root = () => (
	<div className="app">
		<header>
			<h1> Space images </h1>
			<nav>
				<NavLink to="/"> Home </NavLink>
				<NavLink to="/gallery"> Gallery </NavLink>
			</nav>
		</header>
		<main>
			<Outlet />
		</main>

	</div>
)

export default Root
