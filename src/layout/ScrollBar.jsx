import { useScroll , motion } from "framer-motion";

export default function ScrollBar(){
    const { scrollYProgress } = useScroll();

    return (
        <div className="fixed top-0 right-0 w-2 h-full z-50">
            <motion.div 
            style={{ scaleY: scrollYProgress}}
            className="h-full bg-linear-180 from-green-400 via-green-600 to-green-950 origin-top"/>
        </div>
    )
}