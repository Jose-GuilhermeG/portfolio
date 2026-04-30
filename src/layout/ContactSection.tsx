import { BsInstagram } from "react-icons/bs"
import { FaEnvelope, FaPhone } from "react-icons/fa"
import { MdContactPhone } from "react-icons/md"

import IconTitle from "../components/title/IconTitle"
import ItemListContact from "../components/lists/itemListContact"

export default function ContactSession(){
    const contact = [
        {icon : <FaPhone/> , content : "+55 84 999377152"},
        {icon : <FaEnvelope/> , content : "gulgel.guilherme@gmail.com"},
        {icon : <BsInstagram/> , content : "jose.guilherme.g"}
    ]

    return (
        <section className="pb-20">
            <IconTitle icon={<MdContactPhone/>} p="Como falar comigo" className="w-9/10 m-auto" id="contact">
                Contato
            </IconTitle>
            <div className="w-9/10 m-auto text-white">
            <ul className="flex w-full justify-start gap-10 py-10 flex-wrap">
                {contact.map(element=>(
                        <ItemListContact {...element}/>
                ))}
                </ul>
            </div>
        </section>
    )
}