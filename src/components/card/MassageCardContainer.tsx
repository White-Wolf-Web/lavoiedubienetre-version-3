import React from "react";
import MassageCard from "./MassageCard";
import MassageCarData from "../../data/massageCardData.json";
import { MetadataCardContainer } from "../metadata/MetadataCardContainer";



export default function MassageCardContainer() {
	return (
		<section id="massages" className="w-full  custom-3d-effect">
			<div className="bg-black text-white p-4 rounded-lg">
				<div className="container max-w-[1000px] mx-auto px-4 my-12">
				<h2 className="text-3xl font-semibold leading-7 text-cyan-500">Soins thérapeutiques</h2>
					<div className="flex flex-wrap -mx-4">
					{MassageCarData.map((card) => (
              <MassageCard key={card.id} {...card} />
						))}
					</div>
				</div>
			</div>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataCardContainer) }} />
		</section>
	);
}
