import Image from "next/legacy/image";
import Link from "next/link";


interface MassageCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  url: string;
  titleImg: string;
  width:number;
  height:number;
}
export default function MassageCard({ title, description, imageUrl, imageAlt, url, titleImg, width, height}: MassageCardProps) {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Link href={url} >
            <Image src={imageUrl} alt={imageAlt} width={width} height={height} layout="responsive" title={titleImg} />
            <div className="p-1">
              <h3 className="text-xl text-black font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
            </Link>
          </div>
        </div>
      );
    };