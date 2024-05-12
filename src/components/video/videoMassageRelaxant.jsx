import React from "react";
import { MetadataVideoMassageRelaxant } from "../metadata/videos/metadataVideoMassageRelaxant";
import Image from "next/image";

export default function VideoMassageRelaxant() {
	return (
		<div className="video-container aspect-w-16 aspect-h-9">

<h2 className=" text-gray-300  font-medium text-l md:text-xl lg:text-2xl mb-8 tracking-tighter">Courte vidéo d&apos;un massage effectuer avec douceur</h2>
			<video
				width="320"
				height="240"
				controls
        autoPlay
        loop
				preload="none"
				className="w-full"
				aria-label="Massage relaxant professionnel"
				title="Vidéo de massage relaxant"
				aria-describedby="2 mains effectuant un massage tres doux sur un dos"
        poster="/videos/img/Img-video-massage-professional-relaxant.webp"
        >
				<source src="/videos/massage-professional-relaxant.mp4" type="video/mp4" />
			</video>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify( MetadataVideoMassageRelaxant) }} />
		</div>
	);
}
