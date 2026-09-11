export default function SimpleTitle({children , className , ...props}){
    return (
        <h1 className={`text-5xl font-black font-inter text-foreground my-7 text-center capitalize max-sm:text-[2.2rem] ${className}`} {...props} >
            {children}
        </h1>
    )
}
