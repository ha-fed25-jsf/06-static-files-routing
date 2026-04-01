import { Outlet } from "react-router"

const Root = () => (
	<div className="app">
		<header>
			<h1> Space images </h1>
			<nav>
				nav här!
			</nav>
		</header>
		<main>
			<Outlet />
		</main>

	</div>
)

export default Root
