import './Gallery.css'
import { media } from '../data/media.js'
// Eftersom filerna mappas dynamiskt, kan vi inte använda import. Filerna måste ligga under /public och länkas med direktlänk. Vi lägger till /media eftersom filerna kommer hamna i /dist/media/

const Gallery = () => {

	return (
		<div className="gallery-page">
			{media.map(img => (
				<section key={img.id} className="img-card">
					<img src={'/media/' + img.src} alt={img.title} />
					<h3> {img.title} </h3>
					<a href={img.url}> More information... </a>
				</section>
			))}
		</div>
	)
}

export default Gallery
