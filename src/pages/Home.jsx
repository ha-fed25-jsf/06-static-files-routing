// Använd "import" när bilden ligger under /src
import earthImg from './earth.jpg'
import './Home.css'

const Home = () => {

	return (
		<div className="home-page">
			<h2> Welcome to space! </h2>
			<p> The images are from NASA. </p>
			<img src={earthImg} alt="Earth" />
		</div>
	)
}

export default Home
