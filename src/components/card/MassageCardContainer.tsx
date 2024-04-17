import React from "react";
import MassageCard from "./MassageCard";
import MassageCarData from "../../data/massageCardData.json";



export default function MassageCardContainer() {
	return (
		<div id="massages" className="w-full  custom-3d-effect">
			<div className="bg-black text-white p-4 rounded-lg">
				<div className="container max-w-[1000px] mx-auto px-4 my-12">
				<h2 className="text-3xl md:text-4xl leading-snug mb-4">Soins thérapeutiques</h2>
					<div className="flex flex-wrap -mx-4">
					{MassageCarData.map((card) => (
              <MassageCard key={card.id} {...card} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
