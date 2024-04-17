import Image from "next/legacy/image";
import Link from "next/link";


interface MassageCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  url: string;

}
export default function MassageCard({ title, description, imageUrl, imageAlt, url}: MassageCardProps) {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 px-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 h-487px m-0 ">
            <Link href={url} >
            <Image src={imageUrl} alt={imageAlt} width={256} height={192} layout="fixed" loading="lazy" title={title} />
            <div className="p-1 mt-2 mx-4">
              <h3 className="text-xl text-black  text-center font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-ellipsis">{description}</p>
            </div>
            </Link>
          </div>
        </div>
      );
    };