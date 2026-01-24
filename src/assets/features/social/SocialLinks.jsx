import ImageLink from "../../components/links/ImageLink";

function SocialLinks({icons_list = []}){
    return (
        <div className="w-3/5 m-auto h-[5vh] relative my-[10vh] flex justify-around items-center">
            {icons_list.map((element , index)=><ImageLink href={element.href} alt={element.alt} src={element.src} key={index} />)}
        </div>
    )
}


export default SocialLinks