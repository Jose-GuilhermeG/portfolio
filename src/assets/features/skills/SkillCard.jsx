function SkillCard({image , hover_image , alt}){
    const BASE_URL = import.meta.env.BASE_URL

    return (
        <div className="w-[330px] h-[140px] bg-white rounded-2xl flex justify-center items-center hover:bg-light-green transition-colors [&_img]:w-16 cursor-pointer group ">
            <img src={BASE_URL + image} alt={alt} className="block group-hover:hidden transition-transform" />
            <img src={BASE_URL + hover_image} alt={alt} className="hidden group-hover:block transition-transform" />
        </div>
    )
}

export default SkillCard