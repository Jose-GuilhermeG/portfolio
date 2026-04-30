import { GrClose } from "react-icons/gr";
import{ IoAlertCircle } from "react-icons/io5";
import { ReactElement } from "react";

import {motion} from "framer-motion"

interface AlertCardProps{
    children : ReactElement | string;
    setShow : (value : boolean) => void;
}

export function AlertCard({ children  , setShow} : AlertCardProps){
    return (
        <div className="w-full h-15 fixed bottom-10 flex justify-center items-center z-100">
            <motion.div 
            initial={{y : 100}}
            whileInView={{y : 0}}
            viewport={{once : true}}
            className="min-w-sm w-3/10 h-15 bg-light-green text-white rounded-2xl flex justify-around items-center shadow-gray-900 shadow-2xl">
                {children}
                <GrClose onClick={()=>setShow(false)} className="cursor-pointer"/>
            </motion.div>
        </div>
    )
}

export function AlertTitle({ children, className = ""} : {children : string , className? : string}){
    return (
            <h1 className={`${className} w-4/5 text-2xl capitalize font-medium font-serif`}>
                {children}
            </h1>
    )
}

export function AlertIcon({children , className = ""} : {children : ReactElement , className? : string}){
    return (
        <div className={`${className} w-10 text-3xl mx-2`}>
            {children}
        </div>
    )
}