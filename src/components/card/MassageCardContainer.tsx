import React from "react";
import MassageCard from "./MassageCard";
import MassageCarData from "../../data/massageCardData.json";

interface massageCardData {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	imageAlt: string;
	url: string;
	titleImg:string;
	width:number;
	height:number;
}

export default function MassageCardContainer() {
	return (
		<div id="massages" className="w-full  custom-3d-effect">
			<div className="bg-black text-white rounded-lg">
				<div className="container mx-auto my-12">
				<h2 className="text-3xl md:text-4xl leading-snug mb-4">Soins thérapeutiques</h2>
					<div className="flex flex-wrap  justify-between">
						{MassageCarData.map((card: massageCardData) => (
							<MassageCard key={card.id} title={card.title} description={card.description} imageUrl={card.imageUrl} imageAlt={card.imageAlt}  url={card.url} titleImg={card.titleImg} width={card.width} height={card.height}  />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
