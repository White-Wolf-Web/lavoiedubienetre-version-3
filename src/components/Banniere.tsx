import Image from "next/image"
import Banner from '../../public/img/banniere-la-voie-du-bien-etre.webp'
import { MetadataBanner } from "./metadata/MetadataBanner"

export default function Banniere() {
  return (
    <div className="mb-0">
     
    <Image src={Banner} alt="Vue sur un Bouddha de mon salon de massage - shiatsu" className="banner" title="salon de soins relaxant" loading="eager" decoding="async" data-nimg="1" ></Image>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataBanner) }} />
    </div>
  )
}
