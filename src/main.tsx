import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Welcome from './components/welcome/Welcome'
import Today from './components/journey/today/Today'
import Show from './components/journey/show/Show'
import Change from './components/journey/change/Change'
import Action from './components/journey/action/Action'
import About from './components/about/About'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Welcome />
    <Today />
    <Show />
    <Change />
    <Action />
    <About />
  </StrictMode>,
)
