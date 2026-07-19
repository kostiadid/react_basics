import logo from '/favicon.svg'
import MenuItem from './MenuItem/MenuItem.jsx'

const data = ['Home', 'About', 'Contact']
export default function Header(){
  
  function handleClick(){
        console.log(`You clicked on ${children}`)
    }


  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{}</h1>
        <button>Click Me</button>

        <ul>
          <MenuItem onClick={handleClick}>{data[0]}</MenuItem>
          <MenuItem onClick={handleClick}>{data[1]}</MenuItem>
          <MenuItem onClick={handleClick}>{data[2]}</MenuItem>
        </ul>

      </header>
  )
}