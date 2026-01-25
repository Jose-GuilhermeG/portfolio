function TextLink({text , link}){
    return (
        <li className="text-[20px] max-lg:text-[15px] max-md:text-[10px] font-inter text-white font-medium tracking-normal cursor-pointer link relative">
            <a href={link}>
                {text}
            </a>
        </li>
    )
}

export default TextLink