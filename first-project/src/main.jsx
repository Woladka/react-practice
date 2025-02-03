import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: 'blank'
    },
    children: 'Click me to visit Google.'
}

function MyApp(){
    return (
    <div>
      <h1>Hello ji</h1>
    </div>
  )
}




createRoot(document.getElementById('root')).render(
  <MyApp />
)
