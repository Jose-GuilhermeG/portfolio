import { BiCopy } from "react-icons/bi";
import BaseColorCardIcon from "../icons/BaseColorCardIcon";


export default function ItemListContact({content , icon}){

    async function copyTextToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            console.log('Text copied to clipboard');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

    return (
        <li 
            className="p-3 bg-gray-800 rounded-medium text-2xl flex items-center gap-5 font-medium font-serif">
                <BaseColorCardIcon icon={icon}/>
                {content}
                <button className="cursor-pointer hover:text-light-green" onClick={()=>copyTextToClipboard(content)}>
                    <BiCopy/>
                </button>
        </li>
    )
}