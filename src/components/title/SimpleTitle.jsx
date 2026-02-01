function SimpleTitle({content , ...props}){
    return (
        <h1 className="text-5xl font-bold font-inter text-white my-10 text-center capitalize" {...props} >
            {content}
        </h1>
    )
}

export default SimpleTitle