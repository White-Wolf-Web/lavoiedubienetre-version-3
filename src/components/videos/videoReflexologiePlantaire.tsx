import { MetadataVideoReflexologiePlantaire } from "../metadata/videos/metadataVideoReflexologiePlantaire";


export default function VideoReflexologiePlantaire() {
    return (
		<div className="video-container aspect-w-16 aspect-h-9">

<h2 className=" text-gray-300  font-medium text-l md:text-xl lg:text-2xl mb-8 tracking-tighter">Petite vidéo d&apos;une séance de reflexologie plantaire</h2>
			<video
				width="320"
				height="240"
				controls
        autoPlay
        loop
				preload="none"
				className="w-full"
				aria-label="Réflexologie plantaire professionnel"
				title="Vidéo d'une séance de réflexologie plantaire"
				aria-describedby="2 mains massant un pied"
        poster="/videos/img/Img-video-reflexologie-plantaire.webp"
        >
				<source src="/videos/reflexologie-plantaire-video.mp4" type="video/mp4" />
			</video>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify( MetadataVideoReflexologiePlantaire) }} />
		</div>
	);
}
