import type { Metadata } from "next";
import Image from "next/image";
import MassageVentouses from "@public/img/massage-avec-ventouses.webp";
import { MetadataMassageAntiCellulite } from "@/components/metadata/MetadataMassageAntiCellulite";
import PagePicIconBar from "@/components/pagePicIconBar";

export const metadata: Metadata = {
	title: "Massage anti-cellulite à Courcelles | La voie du bien-être",
	description: "Massage anti-cellulite à Courcelles. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
	alternates: {
		canonical: "https://lavoiedubienetre.be/massage/anti-cellulite",
	},
	openGraph: {
		title: "Massage anti-cellulite à Courcelles | La voie du bien-être",
		description: "Massage anti-cellulite à Trazegnies. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
		url: "https://lavoiedubienetre.be/massage/anti-cellulite",
		type: 'website',
		images: [{
			url: 'https://lavoiedubienetre.be/img/OpenGraph/OG-image-massage-Courcelles.jpg',
			width: 1200,
			height: 627,
			alt: 'La voie du bien-être à Courcelles',
		  }],
	},
};
export default function AntiCellulite() {
	return (
		<main>
			<h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight">le Massage Anti-Cellulite</h1>
			<section className="container space-y-4 max-w-4xl mx-auto p-4 mb-12">
			<h2 className=" text-gray-300  font-medium text-l md:text-xl lg:text-2xl mb-8 tracking-tighter">
					Redéfinissez Votre Silhouette grâce aux Ventouses
				</h2>
				<p>
					Dans la quête d&apos;une silhouette affinée et d&apos;une peau lisse, le massage anti-cellulite aux ventouses proposé par la voie du bien-être se présente comme une solution
					innovante et efficace.{" "}
				</p>
				<p>
					Cette technique ancestrale, remise au goût du jour avec des connaissances et des pratiques modernes, cible la cellulite de manière directe, favorisant une réduction visible de
					l&apos;aspect &apos;peau d&apos;orange&apos; et une amélioration de la tonicité cutanée.
				</p>
				<div>
					<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">L&apos;Approche Révolutionnaire du Massage aux Ventouses</h3>
					<Image src={MassageVentouses} alt="massage profond sur une omoplate" width={400} className="rounded mr-4 mt-4 float-left h-auto" />
					<p>
						Le massage aux ventouses utilise des coupelles spécialement conçues pour créer un vide partiel sur la peau, stimulant ainsi la circulation sanguine et lymphatique dans les
						zones traitées.
					</p>
					<p> Cette stimulation aide à briser les dépôts de cellulite, à favoriser l&apos;élimination des toxines et à encourager le renouvellement cellulaire. </p>
					<p> Associée à des techniques de massage manuelles ciblées, cette méthode offre une approche holistique pour combattre efficacement la cellulite.</p>
				</div>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Un Bouquet de Bienfaits pour le Corps</h3>
				<p>Le massage anti-cellulite par les ventouses va bien au-delà de la simple réduction de la cellulite :</p>
				<ul>
					<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
						<strong>Stimulation de la circulation</strong> : Il favorise une meilleure oxygénation et nutrition des tissus, participant à la vitalité générale de la peau.
					</li>
					<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
						<strong>Détoxification</strong> : En encourageant l&apos;élimination des toxines, ce massage contribue à purifier le corps, pour une sensation de légèreté.
					</li>
					<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
						<strong>Relaxation musculaire</strong>: Les tensions musculaires sont apaisées, les douleurs diminuées, favorisant un bien-être physique global.
					</li>
					<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
						<strong>Amélioration de l&apos;élasticité cutanée</strong> : La peau devient plus ferme et plus tonique, retrouvant élasticité et jeunesse.
					</li>
				</ul>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Un soin adapté</h3>
				<p>Chez La voie du bien-être, nous savons que chaque corps est unique. C&apos;est pourquoi notre massage anti-cellulite est entièrement personnalisable. </p>
				<p>
					En fonction de vos objectifs et des zones à traiter, nous adaptons l&apos;intensité des ventouses et combinons différentes techniques de massage pour une efficacité maximale et une
					expérience agréable.
				</p>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Rejoignez-nous pour Sculpter Votre Silhouette</h3>
				<p>
					Le massage anti-cellulite aux ventouses est plus qu&apos;un traitement (non médical); c&apos;est une invitation à redécouvrir votre corps, à embrasser votre beauté naturelle et à
					vous sentir bien dans votre peau.{" "}
				</p>
				<p>
					Que vous souhaitiez cibler des zones spécifiques ou chercher une solution globale pour combattre la cellulite, nous sommes là pour vous accompagner dans votre parcours vers une
					silhouette redéfinie et une confiance renouvelée. Prenez rendez-vous aujourd&apos;hui et commencez votre transformation.{" "}
				</p>
				<p>Laissez-nous vous guider vers une peau plus lisse, une silhouette plus ferme et un bien-être accru. </p>
				<p>Avec le massage anti-cellulite aux ventouses, ouvrez la porte à une nouvelle version de vous-même, où la confiance et la beauté vont de pair avec la santé et la vitalité.</p>

				
			</section>
			<PagePicIconBar />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataMassageAntiCellulite) }} />
		</main>
	);
}
