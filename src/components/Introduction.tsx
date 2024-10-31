"use client";
import React from "react";
import Image from "next/image";
import Masseur from "../../public/img/stephane-gamot-masseur.webp";
import CtaButton from "./CtaButton";
import { MetadataIntroduction } from "./metadata/MetadataIntroduction";

export default function Introduction() {
	return (
		<section className="bg-gray-900 text-gray-200 py-12 px-6 lg:px-24">
			<div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 mb-12">
				<div className="lg:w-2/3 text-center lg:text-left">
					<p className="text-lg leading-relaxed">
						Au cœur du Brabant Flamand à Halle, la voie du bien-être vous invite à découvrir l&apos;art ancestral du massage, une
						porte ouverte vers l&apos;équilibre et l&apos;harmonie intérieure. Spécialiste en Shiatsu, Reiki, et réflexologie plantaire,
						je m&apos;engage à vous offrir des soins personnalisés et profondément régénérants pour le corps et l&apos;esprit.
					</p>
				</div>

				<Image
					src={Masseur}
					alt="Stéphane votre masseur Halle - Bruxelles Belgique"
					className="rounded-lg shadow-lg mt-8 lg:mt-0 lg:ml-8 "
					title="Votre massothérapeute Halle"
					width={180}
					height={270}
				/>
			</div>

			<div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 max-w-4xl mx-auto">
				<div className="mt-8 lg:mt-0">
					<h2 className="text-3xl font-bold text-cyan-400 mb-4">Massage</h2>
					<p className="text-lg leading-relaxed mb-4">
						Imaginez un moment où le monde extérieur s’efface, laissant place à une quiétude absolue. Mes massages vous
						offrent une expérience unique, vous transportant loin de tout.
					</p>
					<p className="text-lg leading-relaxed mb-4">
						Ici à Halle, chaque massage relaxant est une invitation à un voyage intérieur, où l’on peut tout oublier,
						s’abandonner et profiter d&apos;un réconfort profond.
					</p>
					<p className="text-lg leading-relaxed">
						Grâce à des techniques de relaxation profonde, vos muscles se dénouent, le système lymphatique s’active et la
						circulation sanguine s’améliore, facilitant l&apos;élimination des toxines et apportant un bien-être général durable.
					</p>
				</div>
			</div>

			<div className="mt-12 space-y-12">
				<div>
					<h2 className="text-3xl font-bold text-cyan-400 mb-4">Shiatsu</h2>
					<p className="text-lg leading-relaxed mb-2">
						Cette thérapie manuelle japonaise, par une stimulation douce des points d&apos;acupuncture à travers le vêtement,
						libère les blocages énergétiques pour un équilibre intérieur.
					</p>
					<p className="text-lg leading-relaxed">
						En empruntant les méridiens de la médecine chinoise, le Shiatsu aide à libérer les toxines, à équilibrer les
						flux vitaux et à offrir un profond lâcher-prise.
					</p>
				</div>

				<div>
					<h2 className="text-3xl font-bold text-cyan-400 mb-4">Reiki</h2>
					<p className="text-lg leading-relaxed mb-2">
						Le Reiki est bien plus qu’une simple pratique énergétique : c’est un voyage vers la guérison et le
						rééquilibrage de l&apos;être. Ce soin apaise le mental, stimule l&apos;énergie vitale et apporte une relaxation
						profonde.
					</p>
				</div>

				<div>
					<h2 className="text-3xl font-bold text-cyan-400 mb-4">Réflexologie plantaire</h2>
					<p className="text-lg leading-relaxed mb-2">
						La réflexologie plantaire va au-delà du simple massage des pieds, ouvrant la voie vers une santé optimale.
					</p>
					<p className="text-lg leading-relaxed">
						Chaque pression est un geste d&apos;acupression qui active le système lymphatique, soulage les courbatures et
						réduit les tensions, tout en améliorant la mobilité du pied pour ceux passant de longues heures debout.
					</p>
				</div>
			</div>

			<div className="text-center mt-16">
				<CtaButton />
			</div>

			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataIntroduction) }} />
		</section>
	);
}
