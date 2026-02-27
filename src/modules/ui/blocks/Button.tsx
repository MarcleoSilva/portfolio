import { BsTranslate } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";

export function ButtonText({text}:{text:string}){
    return(
        <div className="text-white text-2xl sm:text-2xl bg-[#393389]
         hover:bg-[#1B1843] font-[--primary] rounded-[20px] shadow-sm 
         hover:shadow-lg w-fit h-fit p-4 sm:p-5 cursor-pointer
         select-none">{text}</div>
    )
}

export function ButtonTranslate({text}:{text:string}){
    return(
        <div className="text-white text-2xl sm:text-2xl bg-[#393389]
         hover:bg-[#1B1843] font-[--primary] rounded-[100px] shadow-sm 
         hover:shadow-lg w-fit h-fit p-4 sm:p-5 fixed right-5 bottom-2 cursor-pointer
         ">{text} <BsTranslate /></div>
    )
}

export function ButtonGitHub({text}:{text:string}){
    return(
        <div className="text-white text-2xl sm:text-2xl bg-[#393389]
         hover:bg-[#1B1843] font-[--primary] rounded-[100px] shadow-sm 
         hover:shadow-lg w-fit h-fit p-4 sm:p-3 cursor-pointer
         ">{text} <FaGithub /></div>
    )
}

export function ButtonLinkedin({text}:{text:string}){
    return(
        <div className="text-white text-2xl sm:text-2xl bg-[#393389]
         hover:bg-[#1B1843] font-[--primary] rounded-[100px] shadow-sm 
         hover:shadow-lg w-fit h-fit p-4 sm:p-3 cursor-pointer
         ">{text} <FaLinkedin /></div>
    )
}

export function ButtonCV({text}:{text:string}){
    return(
        <div className="text-white text-2xl sm:text-2xl bg-[#393389]
         hover:bg-[#1B1843] font-[--primary] rounded-[100px] shadow-sm 
         hover:shadow-lg w-fit h-fit p-4 sm:p-3 cursor-pointer
         ">{text} <SiReaddotcv /></div>
    )
}