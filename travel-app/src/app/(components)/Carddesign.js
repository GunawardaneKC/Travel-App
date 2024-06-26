import Image from "next/image";

export default function Carddesign ({children ,imgSrc,...props}){
    return(
        <div {...props} className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group cardM border-2 border-orange-400 hover:border-transparent">
            <Image src={imgSrc} alt="ImageCard" className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-200" width={800} height={800} quality={100} />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/20 to-transparent">
                <div className=" w-full p-2 text-white bg-black bg-opacity-50 " >{children}</div>
            </div>
        </div>
    )
}