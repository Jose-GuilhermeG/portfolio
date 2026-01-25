import ImageLink from "../../components/links/ImageLink";

function SocialLinks({icons_list = []}){

    return (
        <div className="w-3/5 m-auto h-[5vh] relative my-[10vh] flex justify-center items-center" id="social_links">
            {icons_list.map((element , index)=><ImageLink href={element.href} alt={element.alt} src={element.src} key={index} external_site={true} />)}
        </div>
    )
}


export default SocialLinks