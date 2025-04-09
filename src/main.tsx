import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import App from './App.tsx'
import Footer from './Footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="d-flex flex-column min-vh-100">
    <App />    
    <Footer />
    </div>
  </StrictMode>
)
