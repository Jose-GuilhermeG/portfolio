export default function CardIcon({icon , className}){
    return (
        <div className={`w-fit p-2 text-3xl border my-2 rounded-medium ${className}`}>
            {icon}
        </div>
    )
}