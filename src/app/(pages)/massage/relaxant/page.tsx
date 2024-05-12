import type { Metadata } from "next";
import Image from "next/image";
import MassageRelaxation from "@public/img/massage-relaxation-profonde.webp";
import { MetadataMassageRelaxant } from "@/components/metadata/MetadataMassageRelaxant";
import PagePicIconBar from "@/components/pagePicIconBar";
import VideoMassageRelaxant from "@/components/video/videoMassageRelaxant";

export const metadata: Metadata = {
	title: "Massage relaxant à Courcelles | La voie du bien-être",
	description: "Massage relaxant à Courcelles. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
	alternates: {
		canonical: "https://lavoiedubienetre.be/massage/relaxant",
	},
	openGraph: {
		title: "Massage relaxant à Courcelles | La voie du bien-être",
		description: "Massage relaxant à Courcelles. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
		url: "https://lavoiedubienetre.be/massage/relaxant",
		type: "website",
		images: [
			{
				url: "https://lavoiedubienetre.be/img/OpenGraph/OG-massage-relaxant.jpg",
				width: 1200,
				height: 627,
				alt: "Une longue séance de massage lui permetant de tout oublier",
			},
		],
	},
};

export default function Relaxant() {
	return (
		<main>
			<h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight">Découvrez le Massage Relaxant</h1>
			<section className="container space-y-4 max-w-4xl mx-auto p-4 mb-12">
				<h2 className=" text-gray-300  font-medium text-l md:text-xl lg:text-2xl mb-8 tracking-tighter">Offrez-vous une parenthèse de bien-être</h2>

				<p>
					Dans le tumulte du quotidien, où le stress et la fatigue s&apos;accumulent, le massage relaxant émerge comme une bouffée d&apos;air pur, un havre de paix où l&apos;on peut enfin
					lâcher prise. Ici à La voie du bien-Etre, nous comprenons l&apos;importance de se ressourcer, de prendre un moment pour soi. C&apos;est pourquoi j&apos;ai conçu votre massage
					relaxant aux huiles essentielles, pour vous offrir une expérience de détente profonde, adaptée à chacun de vous.{" "}
				</p>

				<div>
					<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">L&apos;Art du Massage Relaxant</h3>
					<Image src={MassageRelaxation} alt="massage relaxant" width={400} className="rounded mr-4 mt-4 float-left h-auto" />
					<p>
						Le massage relaxant, pratiqué avec des huiles essentielles choisies pour leurs propriétés apaisantes, est une technique douce visant à détendre l&apos;ensemble du corps et à
						apaiser l&apos;esprit.
					</p>
					<p>
						Par des mouvements lents et fluides, des pétrissages délicats et des effleurages, notre masseur aux mains expertes va vous libérer des tensions musculaires que vous avez
						accumulé au fil du temps. Parfois il aura besoin de travailler sur des zones de tensions spécifiques qui nécessitent une attention particulière.
					</p>
					<p>Il peut utiliser ses mains, ses coudes, ses avant-bras afin d&apos;appliquer la pression nécessaire ce qui vous permettra de connaitre par la suite détente et relaxation.</p>
					<p>Ce soin du corps favorisera ainsi une relaxation complète et une meilleure qualité de sommeil.</p>
					<p>
						Ce massage permet à vos &apos;fascias&apos; de réagir face au stress et aux émotions. En ostéopathie les fascias sont &apos;le squelette psychique de l’individu&apos;
						puisqu’ils impriment tous les évènements traumatique de votre vie. Ce massage permet donc de libérer ces traumatismes en douceur.
					</p>
				</div>
				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Les Bienfaits Incomparables</h3>
				<p>Au-delà d&apos;un simple moment de détente, le massage relaxant offre de multiples bienfaits pour la santé :</p>
				<ul>
					<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
						<strong>Réduction du stress et de l&apos;anxiété</strong> : En stimulant la production d&apos;endorphines, le massage relaxant aide à réduire le niveau de stress, procurant une
						sensation de bien-être général.
					</li>
					<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
						<strong>Amélioration de la circulation sanguine</strong> : Les techniques de massage spécifiques aident à améliorer la circulation, facilitant ainsi l&apos;oxygénation et la
						nutrition des tissus musculaires.
					</li>
					<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
						<strong>Soulagement des douleurs musculaires</strong> : Par le relâchement des tensions musculaires, le massage contribue à atténuer les douleurs musculaires, les zones de
						tension ainsi qu&apos;à améliorer la souplesse.
					</li>
					<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
						<strong>Meilleure qualité de sommeil</strong> : En induisant un état de relaxation profonde, le massage relaxant favorise un sommeil plus réparateur.
					</li>
					<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
						<strong>Activation du système lymphatique</strong> : Il a un rôle décisif pour la détoxication de l’organisme.
					</li>
				</ul>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Une Expérience Personnalisée</h3>
				<p>
					A la voie du Bien-être, chaque séance de massage relaxant est unique. Nous commençons par une consultation personnelle pour comprendre vos besoins spécifiques, l&apos;origine de
					vos douleurs physiques, ce que nous pouvons vous apporter...
				</p>
				<p>
					Cette approche sur mesure assure que votre expérience de massage soit parfaitement alignée avec vos attentes, pour une satisfaction maximale. Il est important d&apos;être honnête
					et complet lors de la consultation afin que le massothérapeute puisse adapter la séance à vos besoins spécifiques.
				</p>
				<p>
					La salle sera préparée de manière à créer une atmosphère paisible et relaxante. Vous serez invité à vous déshabiller (pas plus que nécessaire) et à vous allonger sur une table de
					massage confortable, généralement recouverte d&apos;une serviette.
				</p>
				<p>
					Il est courant de ressentir une légère somnolence ou une sensation de bien-être après une séance de massage. Prenez le temps de vous détendre et de vous hydrater après la séance
					afin de prolonger les bienfaits du massage.
				</p>
				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Un Cadre Idyllique pour une Évasion Totale</h3>
				<p>
					Notre espace dédié aux massages relaxants est conçu pour transporter vos sens dans un monde de tranquillité et de sérénité. Des lumières douces, une musique apaisante et des arômes
					envoûtants créent l&apos;ambiance parfaite pour une évasion totale du stress quotidien.
				</p>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Rejoignez-nous pour une Pause Bien-être</h3>
				<p>
					Nous invitons à découvrir les plaisirs et les bienfaits du massage relaxant chez la voie du bien-être. Que vous cherchiez à vous libérer du stress, à améliorer votre bien-être
					physique, ou simplement à vous offrir un moment de détente, mon temps vous est dédié. Vous êtes ici pour être accompagné dans cette quête du bien-être.
				</p>

				<p>
					Prenez rendez-vous dès aujourd&apos;hui et préparez-vous à vivre une expérience de relaxation profonde qui revitalisera votre corps et votre esprit. Laissez derrière vous le
					tumulte de la vie quotidienne et plongez dans un univers de calme et de détente. Votre voyage vers le bien-être commence ici et maintenant.
				</p>
				<VideoMassageRelaxant />
			</section>
			<PagePicIconBar />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataMassageRelaxant) }} />
		</main>
	);
}
