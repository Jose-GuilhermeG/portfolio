import { BiCopy } from "react-icons/bi";
import BaseColorCardIcon from "../icons/BaseColorCardIcon";


export default function ItemListContact({content , icon , setAlert}){

    async function copyTextToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            setAlert({message : 'contato copiado com sucesso'});
        } catch (err) {
            setAlert({message : 'Houve um Erro ao copiar' , type : "error"});
        }
    }

    return (
        <li 
            className="p-3 bg-card text-foreground dark:shadow-xl rounded-medium text-[1.2rem] flex-1 max-w-9/10 flex items-center gap-5 font-medium font-serif justify-between">
                <div className="h-full flex justify-center items-center gap-5">
                    <BaseColorCardIcon icon={icon}/>
                    {content}
                </div>
                <button className="cursor-pointer hover:text-light-green" onClick={()=>copyTextToClipboard(content)}>
                    <BiCopy/>
                </button>
        </li>
    )
}