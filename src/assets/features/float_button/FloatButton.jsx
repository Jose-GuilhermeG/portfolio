function FloatButton({src , alt , event , ...props}){
    const BASE_URL = import.meta.env.BASE_URL

    return(
        <button className="fixed bg-white border-2 border-black bottom-10 right-10 p-5 rounded-2xl flex justify-center items-center cursor-pointer hover:bg-gray-200 transition-colors" onClick={event} {...props} >
            <img src={BASE_URL + src} alt={alt} className="w-10 h-10" />
        </button>
    )
}

export default FloatButton