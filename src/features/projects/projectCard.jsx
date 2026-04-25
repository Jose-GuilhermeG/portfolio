export default function ProjectCard({title , description = "" , skills = []  }){
    return (
        <div className="flex flex-col justify-around bg-gray-800 min-h-[35vh] w-3/10 my-5 rounded-[10px] p-2 text-white">
            <h1 className="text-4xl font-medium font-serif py-2 capitalize">
                {title}
            </h1>
            <div className="flex flex-wrap justify-start items-center my-5">
                {skills.map(element=>(
                    <div className="font-medium mx-2 border border-gray-500 p-1 my-1 rounded-[5px] capitalize">
                        {element}
                    </div>
                ))}
            </div>
            <p className="px-2 py-5">
                {description}
            </p>
            <button className="w-full text-center py-5 bg-white text-black rounded-[10px]">
                Ver No GitHub 
            </button>
        </div>
    )
}