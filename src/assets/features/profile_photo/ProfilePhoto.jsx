function ProfilePhoto({image_url , alt = "Imagem de perfil"}){
    const BASE_URL = import.meta.env.BASE_URL
    return (
        <div className="m-auto w-[380px] h-[380px] relative mt-25">
            <img src={BASE_URL + image_url} alt={alt} className="w-full h-full rounded-full"/>
        </div>
    )
}

export default ProfilePhoto;