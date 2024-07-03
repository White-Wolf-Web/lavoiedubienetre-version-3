import React from "react";
import { MetadataVideoSalonZen } from "../metadata/videos/metadataVideoSalonZen";

export default function VideoSalonZenCourcelles() {
  return (
    <div className="video-container mt-0 aspect-w-16 aspect-h-9">
      <h2 className="text-gray-300 font-medium text-l md:text-xl lg:text-2xl mb-8 tracking-tighter">
        Vidéo vous montrant ma petite salle zen ou je donne des massages
      </h2>
      <video
        width="320"
        height="240"
        controls
        autoPlay
        loop
        preload="none"
        className="w-full"
        aria-label="Salle zen de massage"
        title="Vidéo d'une salle de massage à Courcelles"
        aria-describedby="video-description"
        poster="/videos/img/img-video-salle-zen.webp"
      >
        <source src="/videos/salle-zen-massage-la-voie-du-bien-etre.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la balise vidéo.
      </video>
      <div id="video-description" className="sr-only">
        Des Bouddhas, une table de massage, un coffre, des plantes.
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataVideoSalonZen) }} />
    </div>
  );
}
