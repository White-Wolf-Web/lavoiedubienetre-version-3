import type { Metadata } from "next";
import Image from "next/image";
import MassageTaoImage from "@public/img/massage-tao.webp"
import PagePicIconBar from "@/components/pagePicIconBar";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
	title: "Massage Tao à Halle - Bruxelles| La voie du bien-être",
	description: "Massage Tao à Halle - Bruxelles. Un voyage sensoriel et apaisant vous attend, où chaque toucher célèbre votre bien-être.",
	alternates: {
		canonical: "https://lavoiedubienetre.be/massage/tao",
	},
	openGraph: {
		title: "Massage tao à Halle - Bruxelles | La voie du bien-être",
		description: "Massage Tao à Halle. Un voyage sensoriel et apaisant vous attend, où chaque toucher célèbre votre bien-être.",
		url: "https://lavoiedubienetre.be/massage/tao",
		type: 'website',
		siteName: 'La voie du bien-être - massage Tao',
    locale: 'fr_BE',
		images: [{
			url: 'https://lavoiedubienetre.be/img/OpenGraph/OG-image-massage-Courcelles.jpg',
			width: 1200,
			height: 627,
			alt: 'La voie du bien-être à Halle - Bruxelles',
		  }],
	},
};

export default function Tao() {
	return (
		<div className="bg-black text-gray-200 py-12 px-6 lg:px-24">
			<div className="text-center mb-12">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-cyan-500">
					Massage Tao - Halle
				</h1>
				<h2 className="text-gray-400 font-light text-xl md:text-2xl lg:text-3xl mt-4 tracking-wider italic">
					Un voyage sensoriel et apaisant vous attend
				</h2>
			</div>

			<div className="space-y-8">
				<p className="text-lg leading-relaxed">
					Imaginez-vous dans un cocon de sérénité où chaque mouvement, chaque souffle, est une invitation à lâcher prise. Le{' '}
					<strong className="text-cyan-400">massage Tao</strong>, proposé en toute intimité à Halle ou dans le confort de
					votre domicile, est un soin complet et respectueux qui honore le corps dans son entièreté. Ce massage se pratique
					généralement sur peau nue pour permettre une fluidité totale des mouvements et une meilleure connexion des
					énergies, mais dans un respect absolu : la zone intime située à l’entrejambe n’est pas touchée, car l’intention ici
					est bien plus profonde que la simple relaxation physique.
				</p>

				<Image
					src={MassageTaoImage}
					alt="Une femme élégante recevant un massage tao"
					width={1024}
					title="Massage sensuel et libérateur"
					className="rounded-lg mt-8 w-full h-auto object-cover shadow-lg"
				/>

				<p className="text-lg leading-relaxed">
					En choisissant le <strong className="text-cyan-400">massage Tao à Halle</strong>, vous optez pour une expérience
					enveloppante et bienveillante où la sensualité s&apos;exprime de manière subtile et respectueuse. Les mains du
					praticien, guidées par une attention particulière, glissent le long de votre corps, offrant des gestes lents et
					rythmés qui activent chaque cellule et éveillent vos sens. C’est un voyage sensoriel qui respecte vos limites tout
					en vous plongeant dans une harmonie intérieure. <strong className="text-cyan-400">Les bienfaits vont bien au-delà
					de la détente musculaire</strong> : ce massage permet de reconnecter avec soi-même, d’apaiser le mental et de
					libérer les tensions émotionnelles enfouies.
				</p>

				<p className="text-lg leading-relaxed">
					L’ambiance est soigneusement créée pour transformer votre espace en un véritable sanctuaire personnel, avec des
					bougies, une musique apaisante, et des effluves d’huiles essentielles qui accompagnent chaque geste. Tout est
					pensé pour que vous puissiez vivre cette expérience comme une véritable renaissance, un moment où le temps
					s’arrête et où vous vous recentrez sur l’essentiel : vous-même.
				</p>

				<p className="text-lg leading-relaxed">
					Vous sortirez de ce soin le cœur léger et le corps apaisé, avec un sentiment de bien-être durable. Le massage Tao
					n’est pas qu’un moment de plaisir ; c’est un acte de soin envers soi-même, une parenthèse qui invite à célébrer
					la vie et l’équilibre intérieur. Laissez-vous emporter dans cette aventure sensorielle et énergétique, et
					redécouvrez le plaisir d’être en harmonie totale avec votre corps et votre esprit.
				</p>

				<CtaButton />

				<p className="text-lg leading-relaxed mt-8">
					Pour réserver votre moment de sérénité à Halle ou dans le confort de votre domicile, laissez-vous guider par
					l’envie de vous offrir une expérience sensorielle unique, pleine de douceur et de respect.
				</p>

				<p className="text-lg font-semibold text-cyan-400 mt-4">
					Tarifs : Dans mon cabinet à Halle à partir de 120€ pour une séance de 1h30, jusqu’à 180€ pour un soin complet de
					2h30.
				</p>
			</div>

			<PagePicIconBar />
		</div>
	);
}
