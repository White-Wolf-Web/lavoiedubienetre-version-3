import Image from "next/image"
import PresentForMassage from '../../public/img/bon-cadeau-massage-courcelles.webp'
import Style from "./components.module.css"


export default function Gift() {
  return (
<section className="flex flex-col sm:flex-row border border-emerald-500 rounded px-2.5 mt-5" >
   <div><h2><strong>Offrez un bon cadeau pour un massage de votre choix</strong></h2>
    <p>C&apos;est le cadeau parfait pour permettre à vos proches de libérer le stress et de jouir d&apos;une relaxation intense. </p>
    <p>Encouragez la détente et la relaxation chez vos amis ou collègues avec nos chèques cadeaux pour une séance de massage, disponible du lundi au samedi.</p>
    <p>C&apos;est le présent idéal pour ceux qui cherchent à relâcher les muscles et à améliorer leur sommeil et détente, permettant une sensation de bien-être durable.</p></div> 

<Image src={PresentForMassage} alt="Boite blanche avce un ruban rouge représentant le bon cadeau pour un massage offert" width={250} height={245} className={Style.giftBox} />
</section>
  )
}
