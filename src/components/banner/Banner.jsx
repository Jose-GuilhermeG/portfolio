export default function Banner({image_url , alt , ...props}){
     const BASE_URL = import.meta.env.BASE_URL
    return (
        <div className="w-9/10 m-auto relative h-[80vh]" {...props}>
            <img src={BASE_URL + image_url} alt={alt} className="h-full w-full object-cover rounded-2xl object-top" />
        </div>
    )
}