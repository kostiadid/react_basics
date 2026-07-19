import './MenuItem.css'

export default function MenuItem({children}){

    function handleClick(){
        console.log(`You clicked on ${children}`)
    }

    return(
        <li className="button" onClick={handleClick}>{children}</li>
    )
}

