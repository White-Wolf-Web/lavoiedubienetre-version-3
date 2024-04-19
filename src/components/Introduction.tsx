"use client";
import React from "react";
import Image from "next/image";
import Masseur from "../../public/img/stephane-gamot-masseur.webp";
import CtaButton from "./CtaButton";

export default function Introduction() {
	return (
		<section>
			<div>
				<p>
					Au cœur de Courcelles, la voie du bien-être vous invite à découvrir l&apos;art ancestral du massage, une porte ouverte vers l&apos;équilibre et l&apos;harmonie intérieure.
					Spécialiste en Shiatsu, Reiki et réflexologie plantaire, je m&apos;engage à vous offrir des soins personnalisés et profondément régénérants pour le corps et l&apos;esprit.
				</p>
			</div>
			<Image src={Masseur} alt="Votre masseur Courcelles Belgique"   className="float-none m-auto sm:float-right sm:m-3" title="Votre massothérapeuthe Courcelles" width={300} height={450}></Image>
			
			<div>
				<h3 className="inline-header">Massage</h3>
				<p>
					Imaginez un moment où le monde extérieur s’efface, laissant place à une quiétude absolue. C’est ce que vous promettent mes massages, une expérience unique qui vous transporte loin
					de tout.</p><p> Ici à Courcelles chaque massage relaxant est une invitation à un voyage intérieur, où l’on peut tout oublier, s’abandonner et profiter d&apos;un réconfort profond.
				</p>
				<p>Lors d&apos;une séance de massage, vous sentirez vos muscles se dénouer, apportant une relaxation intense et un soulagement des douleurs musculaires.
Votre système lymphatique va s’activer de lui même, facilitant ainsi l&apos;élimination des toxines. Cela permettra également de renforcer votre circulation sanguine et d’améliorer votre bien-être général.
</p>
				<p>
					
					Laissez-vous bercer par la promesse d’une relaxation profonde avec notre massage spécial du dos. Ici à la voie du bien-être, ce ne sont pas juste des massages, vous venez vous
					réfugier dans votre sas de décompression, votre bulle de sérénité. Les bienfaits du massage ne sont plus à prouver aujourd&apos;hui alors selon vos besoins du moment vous pourrez choisir le soin désiré.
				</p>
			</div>
			<div className="inline-header divIntroduction">
				<h3>Shiatsu</h3>
				<p>
					Une thérapie manuelle japonaise qui, par une stimulation douce des points d&apos;acupuncture à travers le vêtement, ne se contente pas de masser mais libère les blocages
					énergétiques. </p><p> Ce processus emprunte les méridiens de la médecine chinoise. Il permet de rééquilibrer les flux vitaux, de libérer les toxines tout en offrant un soulagement et une détente musculaire. Il s&apos;agit d&apos;une invitation pour un lâcher-prise profond.
				</p>
			</div>
			<div className="inline-header divIntroduction">
				<h3>Reiki</h3>
				<p>
					Au-delà d&apos;une simple pratique énergétique, le Reiki est un voyage vers le rééquilibrage et la guérison sur tous les plans de l&apos;être. Par une stimulation non invasive, il
					apaise le mental et le corps, favorisant une relaxation profonde et stimulante et renforce l&apos;énergie vitale.
				</p>
			</div>
			<div className="inline-header divIntroduction">
				<h3>Réflexologie plantaire</h3>
				<p>
					Cette technique ne se limite pas au massage des pieds mais est une voie vers une santé optimale et un bien-être accru.</p><p>  Chaque pression appliquée est un geste d&apos;acupression qui
					soulage les courbatures, active le système lymphatique et libère les tensions. Ce massage des pieds a pour fonction secondaire d&apos;assouplir la voûte plantaire et donc de réduire significativement les douleurs physiques.
					Tout en améliorant la flexibilité et la mobilité du pied et de la cheville, idéal pour ceux qui passent de longues heures debout.
				</p>
			</div>
			<CtaButton />
		</section>
	);
}
