import Image from "next/image"
import Testimonial from "@/data/testimonial.json"


  
  export default function Testimonials() {
    return (
      <div className="bg-black py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-semibold leading-8 tracking-tight text-cyan-700">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
              De nombreuses personnes sont venu se faire masser ...
            </p>
          </div>
          <div className="mx-auto mt-5 flow-root max-w-2xl sm:mt-10 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {Testimonial.map((testimonial) => (
                <div key={testimonial.author.handle} className="pt-2 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-gray-50 p-4 text-sm leading-6">
                    <blockquote className="text-gray-900">
                      <p className="text-gray-900">{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-0 flex items-center gap-x-4">
                      <Image className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} width={100} height={100} alt="" />
                      <div className="font-semibold text-gray-900">
                        <div className='my-auto'>{testimonial.author.name}</div>
                       
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  