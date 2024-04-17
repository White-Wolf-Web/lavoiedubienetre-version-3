import Image from "next/image"
import Banner from '../../public/img/banniere-la-voie-du-bien-etre.webp'


export default function Banniere() {
  return (
    <div>
    <Image src={Banner} alt="Vue sur un Bouddha de mon salon de massage - shiatsu" className="banner" title="salon de soins relaxant"></Image>
    </div>
  )
}
