import type { Metadata } from "next";
import Image from "next/image";
import MassageDorsale from "@public/img/massage-dorsale.webp";
import { MetadataDouceurDorsale } from "@/components/metadata/MetadataDouceurDorsale";
import PagePicIconBar from "@/components/pagePicIconBar";

export const metadata: Metadata = {
	title: "Massage Dos, Epaules & Nuque à Courcelles | Douceur dorsale",
	description: "Massage du dos, des épaules et de la nuque à Trazegnies. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
	alternates: {
		canonical: "https://lavoiedubienetre.be/massage/douceur-dorsale",
	},
	openGraph: {
		title: "Massage Dos, Epaules & Nuque à Courcelles | La voie du bien-être",
		description: "Massage du dos, des épaules et de la nuque à Trazegnies. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
		url: "https://lavoiedubienetre.be/massage/douceur-dorsale",
		type: 'website',
		images: [{
			url: 'https://lavoiedubienetre.be/img/OpenGraph/OG-massage-dos.jpg',
			width: 1200,
			height: 627,
			alt: 'Massage des épaules à Courcelles',
		  }],
	},
};
export default function DouceurDorsale() {
	return (
		<main>
			<h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight">Le Massage &quot;Douceur Dorsale&quot;</h1>
			<section className="container space-y-4 max-w-4xl mx-auto p-4 mb-12">
			<h2 className=" text-gray-300  font-medium text-l md:text-xl lg:text-2xl mb-8 tracking-tighter">
					Une Ode au Soulagement du Dos, des Épaules et de la Nuque
				</h2>
				<p>
					Dans notre quête quotidienne du bien-être, la zone dorsale mérite une attention toute particulière. Souvent victime de tensions et de douleurs dues au stress, à une mauvaise
					posture ou à un mode de vie sédentaire, le dos, les épaules et la nuque réclament un soin spécifique pour retrouver détente et souplesse. C&apos;est dans cet esprit que La voie du
					bien-être a conçu ce massage entierement dédié à la colonne vertebrale (des cervicales aux lombaires), aux omoplates, ..., un traitement exclusif centré sur ces zones cruciales
					pour offrir un soulagement profond et durable.
				</p>
				<div>
					<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">L&lsquo;Essence du Massage &lsquo;Douceur Dorsale&lsquo;</h3>
					<Image src={MassageDorsale} alt="massage profond sur une omoplate" width={400} className="rounded mr-4 mt-4 float-left h-auto" />{" "}
					<p>
						Ce massage du dos est une technique raffinée qui combine des mouvements doux et apaisants avec des techniques de pétrissage et d&apos;effleurage ciblées sur le dos, les
						épaules, les omoplates et la nuque.
					</p>
					<p>
						{" "}
						Cette approche spécifique permet de dénouer les tensions accumulées au fil du temps, de soulager les douleurs et de rétablir une circulation optimale dans ces zones souvent
						surchargées.
					</p>
					<p> Car n&apos;oublions pas que c&apos;est dans le dos ou du moins la partie postérieure de notre corps que nous logeons tout ce que nous ne voulons pas voir</p>
				</div>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Les Bienfaits Multifacettes des soins apportés à votre dos</h3>
				<p>En se focalisant sur le dos, les épaules et la nuque, Douceur Dorsale offre une multitude de bienfaits :</p>
				<ul>
					<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
						<strong>Soulagement des tensions et des douleurs</strong>En ciblant les zones de tension, ce massage aide à réduire les douleurs dorsales, les raideurs des épaules et les maux
						de nuque, les céphalées, contribuant à une meilleure qualité de vie.
					</li>
					<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
						<strong>Amélioration de la posture </strong>En relâchant les tensions musculaires, ce soin favorise une posture plus naturelle et détendue, essentielle pour prévenir les
						douleurs récurrentes.
					</li>
					<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
						<strong>Stimulation de la circulation sanguine</strong>Les techniques utilisées durant le massage encouragent une meilleure circulation, facilitant l&apos;apport d&apos;oxygène
						et de nutriments essentiels aux muscles et aux tissus.
					</li>
					<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
						<strong>Réduction du stress</strong>Par son action relaxante, ce massage du dos aide à libérer le stress et les tensions psychiques, favorisant un état de bien-être général.
					</li>
				</ul>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Une Expérience Personnalisée</h3>
				<p>
					Chez La voie du bien-être, nous croyons en une approche personnalisée du bien-être. Avant chaque séance, une évaluation permet de cerner vos besoins spécifiques et vos préférences,
					assurant ainsi un massage sur mesure qui répond à vos attentes et contribue efficacement à votre soulagement.
				</p>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Un Cadre Apaisant pour une Relaxation Totale</h3>
				<p>
					Notre espace est conçu pour être un sanctuaire de tranquillité. Dans un cadre apaisant, avec une ambiance douce et enveloppante, chaque détail est pensé pour faciliter votre
					détente et maximiser les bienfaits du massage.
				</p>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Pourquoi Choisir le Massage &ldquo;Douceur Dorsale&ldquo; ?</h3>
				<p>
					Ce n&apos;est pas seulement un massage ; c&apos;est une invitation à prendre soin de votre bien-être dorsal avec une attention et une expertise que seul La voie du bien-être peut
					offrir. Que vous souffriez de tensions chroniques, que vous cherchiez à prévenir les douleurs liées au travail de bureau ou que vous désiriez simplement un moment de détente
					profonde, ce massage est fait pour vous.
				</p>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Prenez Rendez-vous Aujourd&apos;hui</h3>
				<p>
					Ne laissez pas les douleurs dorsales, les tensions des épaules et les maux de nuque entraver votre quotidien. Offrez-vous le soin que vous méritez avec &apos;Douceur Dorsale&apos;.
					Contactez-nous dès aujourd&apos;hui pour planifier votre séance et entamez votre chemin vers un soulagement durable et une relaxation profonde.
				</p>
			</section>
			<PagePicIconBar />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataDouceurDorsale) }} />
		</main>
	);
}
