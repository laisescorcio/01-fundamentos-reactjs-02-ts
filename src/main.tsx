import React from 'react' // react geral
import ReactDOM from 'react-dom/client' // react para aplicação WEB
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render( // Typescript: o ! é para forçar o ts entender que esse elemento existirá (nao é recomendado usar sempre)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
