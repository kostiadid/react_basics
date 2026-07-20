import logo from '/favicon.svg'
import MenuItem from './MenuItem/MenuItem.jsx'
import {useState} from 'react'

const data = ['Home', 'About', 'Contact']
export default function Header(){
  
  const [content, setContent] = useState('')
  const [time,setTime] = useState(new Date())
  setInterval(()=>setTime(new Date()),1000)


  function handleClick( type,children){
        console.log(`You clicked on ${children}`, type)
        setContent(type)
    }


  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{time.toLocaleTimeString()}</h1>
        <button>Click Me</button>

        <ul>
          <MenuItem onClick={()=>handleClick('btn1',data[0])}>{data[0]}</MenuItem>
          <MenuItem onClick={()=>handleClick('btn2',data[1])}>{data[1]}</MenuItem>
          <MenuItem onClick={()=>handleClick('btn3',data[2])}>{data[2]}</MenuItem>
        </ul>

        <p>{content}</p>
      </header>
  )
}