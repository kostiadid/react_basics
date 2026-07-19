import logo from '/favicon.svg'
import MenuItem from './MenuItem/MenuItem.jsx'

export default function Header(){
  
    const data = ['Home', 'About', 'Contact']

  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{}</h1>
        <button>Click Me</button>

        <ul>
          <MenuItem >{data[0]}</MenuItem>
          <MenuItem >{data[1]}</MenuItem>
          <MenuItem >{data[2]}</MenuItem>
        </ul>

      </header>
  )
}