function ProfilePhoto({image_url , alt = "Imagem de perfil"}){
    return (
        <div className="m-auto w-[380px] h-[380px] relative mt-25">
            <img src={image_url} alt={alt} className="w-full h-full rounded-full"/>
        </div>
    )
}

export default ProfilePhoto;