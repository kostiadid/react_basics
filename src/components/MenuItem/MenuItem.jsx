import './MenuItem.css'

export default function MenuItem({children, onClick}){


    return(
        <li className="button" onClick={onClick}>{children}</li>
    )
}

