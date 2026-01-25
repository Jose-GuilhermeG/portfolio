function BaseModal({children , state = false , ...props }){
    const display = state ? "block" : "none"
    
    return (
        <div className="fixed w-full h-full indent-0 bg-black/75 top-0" style={{"display" : display}} {...props}>
            {children}
        </div>
    )
}

export default BaseModal