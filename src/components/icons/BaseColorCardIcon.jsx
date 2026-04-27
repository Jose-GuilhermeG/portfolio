import CardIcon from "./CardIcon";

export default function BaseColorCardIcon({icon , className}){
    return <CardIcon icon={icon} className={`rounded-2xl text-light-green bg-light-green/30 ${className}`}/>
}