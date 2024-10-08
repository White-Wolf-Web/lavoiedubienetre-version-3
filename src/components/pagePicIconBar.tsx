import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PagePicIconBar() {
	return (
		<section className="flex justify-center mb-8">
			<Link href="/shiatsu/amma" className="" title="Shiatsu - amma">
				<Image src="/icon/mini-amma.webp" alt="un homme assis pour un amma" width={100} height={100} title="Massage sur Chaise" />
			</Link>
			<Link href="/massage/anti-cellulite" title="Le massage qui draine la peau d'orange" className="">
				<Image src="/icon/mini-anti-cellulite.webp" alt="La ventouse agit en profondeur pour éliminer la peau d'orange" width={100} height={100} title="Massage Anti-cellulite" />
			</Link>
			<Link href="/massage/douceur-dorsale" className="" title="Massage du dos">
				<Image src="/icon/mini-massage-dos.webp" alt="De la nuque aux lombaires en passant par les épaules" width={100} height={100} title="Douceur Dorsale" />
			</Link>
			<Link href="/massage/relaxant" className="" title="toucher tres doux">
				<Image src="/icon/mini-massage-relaxant.webp" alt="Moment de detente absolu" width={100} height={100} title="Massage relaxant" />
			</Link>
			<Link href="/reflexologie-plantaire" className="" title="Massage des pieds permettant la libération">
				<Image src="/icon/mini-reflexologie.webp" alt="Massage des pieds" width={100} height={100} title="Réflexologie plantaire" />
			</Link>
			<Link href="/reiki" className="" title="Séance énergétique">
				<Image src="/icon/mini-reiki.webp" alt="Séance d'apposition des mains avec l'energie universelle" width={100} height={100} title="Reiki" />
			</Link>
			<Link href="/shiatsu/traditionnel" className="" title="le Tuina version japonaise">
				<Image src="/icon/mini-shiatsu.webp" alt="Medecine douce originaire du Japon" width={100} height={100} title="Shiatsu" />
			</Link>
			<Link href="/massage/sportif" className="" title="Exclusivement réservé au sportif">
				<Image src="/icon/mini-sportif.webp" alt="Enlever les noeuds et les contractures musculaires" width={100} height={100} title="Massage sportif" />
			</Link>
			<Link href="/massage/voyage-des-sens" className="" title="Moment de relaxation profonde">
				<Image src="/icon/mini-voyage-des-sens.webp" alt="Voyage à travers soi" width={100} height={100} title="Voyage des sens" />
			</Link>
		</section>
	);
}
