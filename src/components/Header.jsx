import logo from './favicon.svg'



function MenuItem({title}){
    return(
        <li>{title}</li>
    )
}

export default function Header(){
  
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{}</h1>
        <button>Click Me</button>

        <ul>
          <MenuItem title="Home" />
          <MenuItem title="About" />
          <MenuItem title="Contact" />
        </ul>

      </header>
  )
}