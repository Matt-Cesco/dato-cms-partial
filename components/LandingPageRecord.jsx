import Link from "next/link"
import Image from "next/image";

const LandingPageRecord = ({details}) => {
  return (
    <div className="bg-gray-200 py-20 px-10 flex flex-col items-center">
      <h1 className="text-2xl text-center text-gray-600 font-bold">
        {details.bigTitleH1}
        <span className="block text-gray-900 text-5xl font-bold mb-10">
          {details.subtitleH2}
        </span>
      </h1>
      <p className="bg-yellow-300 max-w-lg text-gray-800 text-lg">
        {details.firstButton}
      </p>
      <div className="w-full p-4">
         <Image 
            src={details.image.url}
            alt={details.bigTitleH1}
            width={450}
            height={450}
         />
      </div>
      <Link href="#Pricing" className="rounded-md bg-yellow-300 mt-8 py-3 px-4 text-gray-800 text-xl">link</Link>
    </div>
    
  );
}

export default LandingPageRecord;