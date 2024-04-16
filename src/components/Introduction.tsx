"use client";
import React from "react";
import Image from "next/image";
import Masseur from "../../public/img/massage-relaxant-courcelles-halle.webp";
import CtaButton from "./CtaButton";

export default function Introduction() {
	return (
		<section>
			<div>
				<p>
					Au cœur de Courcelles, la voie du bien-être vous invite à découvrir l&apos;art ancestral du massage, une porte ouverte vers l&apos;équilibre et l&apos;harmonie intérieure.
					Spécialistes en Shiatsu, Reiki et réflexologie plantaire, je me suis engagé à vous offrir des soins personnalisés et profondément régénérants pour le corps et l&apos;esprit.
				</p>
			</div>
			<Image src={Masseur} alt="Votre masseur à Courcelles Belgique" className="float-right m-3" title="Votre massothérapeuthe Stéphane"></Image>
			<div>
				<h3 className="inline-header">Massage</h3>
				<p>
					Imaginez un moment où le monde extérieur s’efface, laissant place à une quiétude absolue. C’est ce que vous promettent nos massages, une expérience unique qui vous transporte loin
					de tout.</p><p> Ici à Courcelles chaque massage relaxant est une invitation à un voyage intérieur, où l’on peut tout oublier, s’abandonner et profiter d&apos;un réconfort profond d’un
					massage.
				</p>
				<p>
					{" "}
					Laissez-vous bercer par la promesse d’une relaxation profonde avec notre spécial massage du dos. Ici à la voie du bien-être, ce ne sont pas juste des massages, vous venez vous
					réfugier dans votre sas de décompression, votre bulle de sérénité.
				</p>
			</div>
			<div className="inline-header divIntroduction">
				<h3>Shiatsu</h3>
				<p>
					Une thérapie manuelle japonaise qui, par une stimulation douce des points d&apos;acupuncture à travers le vêtement, ne se contente pas de masser mais libère les blocages
					énergétiques. </p><p> Ce processus permet de rééquilibrer les flux vitaux, offrant ainsi soulagement et détente musculaire, et invitent à un lâcher-prise profond.
				</p>
			</div>
			<div className="inline-header divIntroduction">
				<h3>Reiki</h3>
				<p>
					Au-delà d&apos;une simple pratique énergétique, le Reiki est un voyage vers le rééquilibrage et la guérison sur tous les plans de l&apos;être. Par une stimulation non invasive, il
					apaise le mental et le corps, favorisant une relaxation profonde et stimulante.
				</p>
			</div>
			<div className="inline-header divIntroduction">
				<h3>Réflexologie Plantaire</h3>
				<p>
					Cette technique ne se limite pas au massage des pieds mais est une voie vers une santé optimale et un bien-être accru.</p><p>  Chaque pression appliquée est un geste d&apos;acupression qui
					soulage les courbatures et libère les tensions.
				</p>
			</div>
			<CtaButton />
		</section>
	);
}
