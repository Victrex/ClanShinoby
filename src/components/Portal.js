import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './dash.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('portal')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)