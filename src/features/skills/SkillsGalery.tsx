import { SkillType } from "../../types/skillsTypes";

import SkillCard from "./SkillCard";

interface SkillGaleryProtocol{
    skill_list : Array<SkillType>;
}

function SkillGalery({skill_list} : SkillGaleryProtocol){

    const orderSkills : SkillType[] = skill_list.sort((a,b) => b.level - a.level);

    return (
        <div className="w-full h-fit max-sm:grid-cols-2 grid grid-cols-3 grid-row m-auto gap-10 items-center justify-items-center">
            {
                orderSkills.map((element , index)=>(
                    <SkillCard key={index} level={element.level}>
                        {element.icon}
                    </SkillCard>
                ))
            }
        </div>
    )
}

export default SkillGalery