function TextLink({text , link}){
    return (
        <li className="text-[20px] font-inter text-white font-medium tracking-normal cursor-pointer link relative">
            <a href={link}>
                {text}
            </a>
        </li>
    )
}

export default TextLink