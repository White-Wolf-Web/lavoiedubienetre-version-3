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

const navigation = {
	main: [
	  { name: 'Accueil', href: '/' },
	  { name: 'Massage', href: '#' },
	  { name: 'Shiatsu', href: '#' },
	  { name: 'Reiki', href: '#' },
	  { name: 'Reflexologie', href: '#' },
	],
	social: [
		{
			name: "Facebook",
			href: "#",
			icon: (props: React.SVGProps<SVGSVGElement>) => (
			  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<path
				  fillRule="evenodd"
				  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
				  clipRule="evenodd"
				/>
			  </svg>
			),
		  },
	  {
		name: 'Instagram',
		href: '#',
		icon: (props: React.SVGProps<SVGSVGElement>) => (
		  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path
			  fillRule="evenodd"
			  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
			  clipRule="evenodd"
			/>
		  </svg>
		),
	  },
	  {
		name: 'X',
		href: '#',
		icon: (props: React.SVGProps<SVGSVGElement>) => (
		  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
		  </svg>
		),
	  },
	 
	  {
		name: 'YouTube',
		href: 'https://www.youtube.com/@lavoiedubien-etre',
		icon: (props: React.SVGProps<SVGSVGElement>) => (
		  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path
			  fillRule="evenodd"
			  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
			  clipRule="evenodd"
			/>
		  </svg>
		),
	  },
	  {
		name: 'Pinterest',
		href: '#',
		icon: (props: React.SVGProps<SVGSVGElement>) => (
		  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path
			  fillRule="evenodd"
			  d="M12.997 2C7.476 2 3 6.476 3 11.997c0 4.16 2.667 7.712 6.403 9.003-.088-.764-.167-1.94.034-2.776.18-.761 1.158-4.846 1.158-4.846s-.295-.596-.295-1.474c0-1.38.8-2.411 1.796-2.411.847 0 1.256.637 1.256 1.4 0 .854-.54 2.13-.82 3.314-.23.964.49 1.75 1.453 1.75 1.744 0 3.08-1.84 3.08-4.487 0-2.346-1.68-3.978-4.078-3.978-2.78 0-4.417 2.081-4.417 4.232 0 .848.328 1.76.74 2.255a.3.3 0 01.068.287c-.074.316-.24.965-.275 1.098-.043.18-.142.22-.33.134-1.237-.575-2.008-2.38-2.008-3.838 0-3.122 2.27-5.986 6.558-5.986 3.443 0 6.118 2.456 6.118 5.743 0 3.417-2.157 6.169-5.156 6.169-1.006 0-1.952-.525-2.275-1.149l-.617 2.356c-.224.858-.832 1.927-1.243 2.578.935.288 1.922.447 2.951.447 5.523 0 9.997-4.476 9.997-9.997C21.997 6.476 17.52 2 12.997 2z"
			  clipRule="evenodd"
			/>
		  </svg>
		),
	  },
	],
  }

export default function Footer() {
	return (
<footer className="bg-black">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pt-12 sm:pt-12 lg:px-8">
	  <nav aria-label="Footer" className="sm:flex sm:justify-center sm:space-x-12">
          <ul className="flex justify-center space-x-6">
            {navigation.main.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-gray-400">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="h-6 w-6" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2024 La voie du bien-être & Massage à domicile - Tous droits réservés
        </p>
      </div>
    </footer>



		)






	{/*	<footer className=" px-4 mt-4 flex flex-col sm:flex-row justify-between ">
			<div id="contact" className="">
				<p className="text-center">
					<strong>CONTACT</strong>
				</p>
				<div className="flex ml-1">
					<Image src={Mail} alt="Enveloppe qui fait allusion à un Email" width={20} height={20} />
					<p className="text-left flex-1">&nbsp; lavoiedubienetre @outlook.com</p>
				</div>
				<div className="flex items-center">
					<Image src={Phone} alt="GSM avec son numero pour réserver" width={24} height={24} />
					<p className="text-left flex-1">&nbsp; 0477 13 19 93</p>
				</div>
				<div className="flex">
					<Image src={Adress} alt=" adresse: Oct de Kerchove d'exaerdestraat 193, 1501 Buizingen" width={24} height={24} />
					<p className="text-left flex-1">&nbsp; Oct K. ExaerdeStraat 193, 1501 Buizingen</p>
				</div> 
				<div><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Massage Bruxelles-Capitale, Brabant Wallon et Brabant Flamand </p></div>
			</div>

			<div className="">
				<p className="prose prose-neutral dark:prose-invert text-center">
					<strong>Massages Shiatsu,</strong>
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
					<Link href="https://www.youtube.com">
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
		</footer>*/ }
	
}
