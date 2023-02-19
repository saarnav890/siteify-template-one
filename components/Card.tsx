interface i{
    title: string
    description: string
    url: string
    stars: number,
    language: string
}

import Link from "next/link"


export default function Card({title, description, url, stars, language}: i) {



    return (
        <Link href={url}>
     <div className="bg-white rounded-xl h-[24rem] w-96 flex flex-col hover:scale-105 active:scale-90 duration-200"
     >
        
        <div className="flex justify-center text-gray-900 text-2xl mt-6 ">
            {title}
        </div>
        <div className="justify-self-end mt-60 bg-slate-100 self-center">
            {description}
        </div>
        
        
        
     </div>
     </Link>
    )
}