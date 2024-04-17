import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./components.module.css";
import MiniFacebook from "../../public/icon/mini-facebook.webp";
import MiniInstagram from "../../public/icon/mini-instagram.webp";
import MiniYouTube from "../../public/icon/mini-youtube.webp";
import MiniPinterest from "../../public/icon/mini-pinterest.webp";
import CtaButton from "./CtaButton";
import Adress from "../../public/svg/adress.svg";
import Phone from "../../public/svg/smartphone.svg";
import Mail from "../../public/svg/email.svg";

export default function Footer() {
	return (
		<footer className=" px-4 mt-4 flex flex-col sm:flex-row justify-between ">
			<div id="contact" className="">
				<p className="text-center">
					<strong>CONTACT</strong>
				</p>
				<div className="flex ml-1">
					<Image src={Mail} alt="Enveloppe qui fait allusion à un Email" width={20} height={20} />
					<p className="text-left flex-1">&nbsp; lavoiedubienetre@outlook.com</p>
				</div>
				<div className="flex items-center">
					<Image src={Phone} alt="GSM" width={24} height={24} />
					<p className="text-left flex-1">&nbsp; 0477 13 19 93</p>
				</div>
				<div className="flex">
					<Image src={Adress} alt=" adresse: Rue de Chapelle 54, 6183 Courcelles" width={24} height={24} />
					<p className="text-left flex-1">&nbsp; Rue de Chapelle 54, 6183 Courcelles</p>
				</div> 
				<div><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Massage Courcelles & environs</p></div>
			</div>

			<div className="">
				<p className="prose prose-neutral dark:prose-invert text-center">
					<strong>Massages, Shiatsu,</strong>
				</p>
				<p className="prose prose-neutral dark:prose-invert text-center">
					<strong>Réflexologie plantaire</strong>
				</p>
				<div className={Styles.socialNetworkIcon}>
					<Link href="https://www.facebook.com/lavoiedubienetremassageshiatsureikireflexologie/">
						<Image src={MiniFacebook} alt="Notre page Facebook" width={40} height={40} />
					</Link>
					<Link href="https://instagram.com">
						<Image src={MiniInstagram} alt="Note page Instagram" width={40} height={40} />
					</Link>
					<Link href="https://instagram.com">
						<Image src={MiniYouTube} alt="Notre chaine Youtube" width={40} height={40} />
					</Link>
					<Link href="https://pinterest.com">
						<Image src={MiniPinterest} alt="Notre tableau Pinterest" width={40} height={40} />
					</Link>
				</div>
				<div className="flex justify-center mt-11">
					<CtaButton />
				</div>
			</div>
		</footer>
	);
}
