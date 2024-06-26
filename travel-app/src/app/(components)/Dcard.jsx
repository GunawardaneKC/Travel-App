import Image from "next/image";

export default function Carddesign ({children ,imgSrc,...props}){
    return(
        <div {...props} className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group cardM border-2 border-white hover:border-transparent">
            <Image src={imgSrc} alt="ImageCard" className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-200" width={900} height={900} quality={100} />
        </div>
    )
}