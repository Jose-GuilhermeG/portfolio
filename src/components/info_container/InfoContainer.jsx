function InfoContainer({children ,title , id , ...props}){
    return (
        <div className="w-4/5 h-full bg-white relative block m-auto rounded-2xl" {...props} id={id}>
            <h1 className="px-5 text-2xl font-medium py-5 capitalize ">
                {title}
            </h1>
            {children}
        </div>
    )
}

export default InfoContainer