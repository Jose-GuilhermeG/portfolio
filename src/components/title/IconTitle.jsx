export default function IconTitle({children , p = "" , icon , className , ...props}){
    return (
        <div className={`text-white flex my-2 ${className || ""}`} {...props} >
            {icon &&<div className="w-fit h-fit self-top text-light-green bg-light-green/30 text-3xl mr-5 p-2 my-2 rounded-[10px] border ">
                {icon}
            </div>}
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-5xl font-bold font-inter mb-2 text-light-green capitalize">
                    {children}
                </h1>
                <p className="text-2xl font-light">
                    {p}
                </p>
            </div>
        </div>

    )
}
