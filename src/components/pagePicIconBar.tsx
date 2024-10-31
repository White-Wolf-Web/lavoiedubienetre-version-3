import React from "react";
import Link from "next/link";
import Image from "next/image";

import miniTao from "@public/icon/mini-tao.webp";
import miniAmma from "@public/icon/mini-amma.webp";
import miniAntiCellulite from "@public/icon/mini-anti-cellulite.webp";
import miniMassageDos from "@public/icon/mini-massage-dos.webp";
import miniMassageRelaxant from "@public/icon/mini-massage-relaxant.webp";
import miniReflexologie from "@public/icon/mini-reflexologie.webp";
import miniReiki from "@public/icon/mini-reiki.webp";
import miniShiatsu from "@public/icon/mini-shiatsu.webp";
import miniSportif from "@public/icon/mini-sportif.webp";
import miniVoyage from "@public/icon/mini-voyage-des-sens.webp";

export default function PagePicIconBar() {
	return (
		<section className="flex justify-center my-8 ">
			<Link href={"/shiatsu/amma"} title="Shiatsu - amma">
				<Image src={miniAmma} alt="un homme assis pour un amma" width={100} height={100} title="Massage sur Chaise" />
			</Link>
			<Link href="/massage/anti-cellulite" title="Le massage qui draine la peau d'orange">
				<Image src={miniAntiCellulite} alt="La ventouse agit en profondeur pour éliminer la peau d'orange" width={100} height={100} title="Massage Anti-cellulite" />
			</Link>
			<Link href="/massage/douceur-dorsale" title="Massage du dos">
				<Image src={miniMassageDos} alt="De la nuque aux lombaires en passant par les épaules" width={100} height={100} title="Douceur Dorsale" />
			</Link>
			<Link href="/massage/relaxant" title="toucher tres doux">
				<Image src={miniMassageRelaxant} alt="Moment de detente absolu" width={100} height={100} title="Massage relaxant" />
			</Link>
			<Link href="/reflexologie-plantaire" title="Massage des pieds permettant la libération">
				<Image src={miniReflexologie} alt="Massage des pieds" width={100} height={100} title="Réflexologie plantaire" />
			</Link>
			<Link href="/reiki" title="Séance énergétique">
				<Image src={miniReiki} alt="Séance d'apposition des mains avec l'energie universelle" width={100} height={100} title="Reiki" />
			</Link>
			<Link href="/shiatsu/traditionnel" title="le Tuina version japonaise">
				<Image src={miniShiatsu} alt="Medecine douce originaire du Japon" width={100} height={100} title="Shiatsu" />
			</Link>
			<Link href="/massage/sportif" title="Exclusivement réservé au sportif">
				<Image src={miniSportif} alt="Enlever les noeuds et les contractures musculaires" width={100} height={100} title="Massage sportif" />
			</Link>
			<Link href="/massage/voyage-des-sens" title="Moment de relaxation profonde">
				<Image src={miniVoyage} alt="Voyage à travers soi" width={100} height={100} title="Voyage des sens" />
			</Link>
			<Link href="/massage/tao" title="massage nu">
				<Image src={miniTao} className="rounded-full mt-2" alt="Voyage à travers soi" width={85} height={85} title="voyage sensoriel & sensuel" />
			</Link>
		</section>
	);
}
