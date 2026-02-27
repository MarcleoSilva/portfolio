export default function TypingText({text}:{text:string}){

    return(
        <div className="flex w-fit">
            <h1 className="overflow-hidden border-r-2 text-white border-r-blue-800
             font-[--primary-font]
            whitespace-nowrap m-auto animate-(--typing-animation)">{text}</h1>
        </div>
    )

}