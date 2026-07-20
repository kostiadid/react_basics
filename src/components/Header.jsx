import logo from '/favicon.svg'
import MenuItem from './MenuItem/MenuItem.jsx'

const data = ['Home', 'About', 'Contact']
export default function Header(){
  
  function handleClick( type,children){
        console.log(`You clicked on ${children}`, type)
    }


  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{}</h1>
        <button>Click Me</button>

        <ul>
          <MenuItem onClick={()=>handleClick('btn1',data[0])}>{data[0]}</MenuItem>
          <MenuItem onClick={()=>handleClick('btn2',data[1])}>{data[1]}</MenuItem>
          <MenuItem onClick={()=>handleClick('btn3',data[2])}>{data[2]}</MenuItem>
        </ul>

      </header>
  )
}