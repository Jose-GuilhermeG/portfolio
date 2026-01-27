import SkillCard from "./SkillCard";

function SkillGalery({skil_list}){
    return (
        <div className="w-full h-fit py-5 max-xl:grid-cols-2 max-sm:grid-cols-1 grid grid-cols-3 grid-row m-auto gap-10 items-center justify-items-center">
            {
                skil_list.map((element , index)=>(
                    <SkillCard image={element.image} hover_image={element.hover_image} key={index} />
                ))
            }
        </div>
    )
}

export default SkillGalery