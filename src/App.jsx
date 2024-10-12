import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'


function App() {
  
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [character, setCharacter] = useState(false)
  
  const Passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (character) str += "!@#$%&/\|"
    
    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
    
  }, [setPassword, length, numberAllowed, character])

  const passwordref = useRef(null)

  const copyfunction = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordref.current.select()
  },[password])
  
  useEffect(() => {
    Passwordgenerator()
  }, [setPassword, length, numberAllowed, character,Passwordgenerator])

  return (
    <>
      <h1>Password Generator</h1>
      <div className='Holder'>
        <input type="text" value={password} placeholder='Password' readOnly className='input' ref={passwordref} />
        <button onClick={copyfunction}>Copy</button>
        <div className='wrapper'>

          <input type='range' min={6} max={25} className='range' value={length}
          onChange={(e)=>setLength(e.target.value)}/>
          <label>Length:{ length}</label>

          <input type="checkbox" className='checkbox' onClick={(prev) => setNumberAllowed((prev) => !prev)}
          />
        <label>number</label>
          <input type="checkbox" onClick={(prev) => setCharacter((prev) => !prev)} />
          <label>character</label>
        </div>
      </div>
    </>
  )
}

export default App
