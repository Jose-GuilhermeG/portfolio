function ItemListIcon({src , content , alt , ...props}){
    return (
        <li className="flex items-center justify-start px-5 text-2xl my-5" {...props}>
            <img src={src} alt={alt} className="w-5 h-5 mx-5"/>
            {content}
        </li>
    )
}

export default ItemListIcon