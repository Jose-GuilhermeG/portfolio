function ItemListTitle({title , content , extra , ...props}){
    return (
        <li className="w-full px-5 text-[16px] font-normal" {...props}>
            <h1 className="font-medium text-[20px]">
                {title}
            </h1>
            <p className="my-2">
                {content}
            </p>
            {extra}
        </li>
    )
}

export default ItemListTitle