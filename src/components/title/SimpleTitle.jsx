export default function SimpleTitle({children , className , ...props}){
    return (
        <h1 className={`text-5xl font-bold font-inter text-white my-10 text-center capitalize ${className}`} {...props} >
            {children}
        </h1>
    )
}
