import { FaArrowDown, FaCode} from "react-icons/fa"

export default function KnowledgeCard({knowledgeName , knowledgeIcon = <FaCode/> , knowDescription}){
    return (
        <div className="group text-white p-4 w-full bg-gray-800 rounded-[10px] origin-top cursor-pointer overflow-hidden h-[12vh] hover:h-[50vh] transition-all duration-700">
            <div className="h-20 flex items-center gap-5 relative">
                <div className="p-1 border rounded-[10px] text-3xl w-fit h-fit">
                    {knowledgeIcon}
                </div>
                <h1 className="text-3xl font-black font-serif">
                    {knowledgeName}
                </h1>
                <span>
                    <FaArrowDown className="text-3xl group-hover:rotate-[-180deg] transition-transform duration-600 absolute right-2 top-2/6"/>
                </span>
            </div>
            <p className="origin-top h-fit opacity-0 group-hover:opacity-100 transition-all duration-600">
                {knowDescription}
            </p>
        </div>
    )
}