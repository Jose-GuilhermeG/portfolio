import { GrClose } from "react-icons/gr";
import{ IoAlertCircle } from "react-icons/io5";
import { ReactElement } from "react";

import {motion} from "framer-motion"

interface AlertCardProps{
    children : ReactElement | string;
    setShow : (value : boolean) => void;
    alertType : "default" | "error"
}

export function AlertCard({ children  , setShow , alertType} : AlertCardProps){

    const getBackgroundColor = ()=>{ 
        switch(alertType){
            case "error":
                return "bg-red-500"
            
            default:
                return "bg-light-green"
        }
    }

    return (
        <div className="w-full h-15 fixed bottom-10 flex justify-center items-center z-100">
            <motion.div 
            initial={{y : 100}}
            whileInView={{y : 0}}
            viewport={{once : true}}
            className={`min-w-sm w-3/10 p-2 max-sm:min-w-5/10 h-15 ${getBackgroundColor()} text-white rounded-2xl flex justify-around items-center shadow-gray-900 shadow-2xl`}>
                {children}
                <GrClose onClick={()=>setShow(false)} className="cursor-pointer max-sm:h-10"/>
            </motion.div>
        </div>
    )
}

export function AlertTitle({ children, className = ""} : {children : string , className? : string}){
    return (
            <h1 className={`${className} w-4/5 text-[1.2rem] max-sm:text-[0.7rem] capitalize font-medium font-serif`}>
                {children}
            </h1>
    )
}

export function AlertIcon({children , className = ""} : {children : ReactElement , className? : string}){
    return (
        <div className={`${className} w-10 text-3xl mx-2 max-sm:text-[1.5rem]`}>
            {children}
        </div>
    )
}