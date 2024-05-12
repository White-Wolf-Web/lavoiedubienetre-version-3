import React from "react";


export default function VideoSalonZenCourcelles() {
    return (
        <div className="video-container aspect-w-16 aspect-h-9">

<h2 className="font-medium text-2xl md:text-3xl lg:text-4xl mb-8 tracking-tighter">La salle de massage</h2>
         <iframe
            className="w-full"
            src={`https://www.youtube.com/embed/${"WtQZKdBuS84"}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1`}
            title="YouTube video player"
            width="960"
            height="515"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    };


