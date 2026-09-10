function ProfilePhoto({image_url , alt = "Imagem de perfil"}){
    const BASE_URL = import.meta.env.BASE_URL
    return (
        <div className="m-auto w-6/10 max-w-[380px] relative mt-25 overflow-clip">
            <img src={BASE_URL + image_url} alt={alt} className="aspect-square w-full h-full rounded-full object-cover object-top"/>
        </div>
    )
}

export default ProfilePhoto;