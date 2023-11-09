
import './App.css'

import { Navbar, Header, Products, UseCases, Features, FAQ, Testimonials, CTA, Footer } from "./components"


const App = () => (
  <div className='app__container'>
    <Navbar />
    <Header />
    <Products /> 
    <UseCases /> 
    <Features /> 
    <FAQ /> 
    <Testimonials /> 
    <CTA /> 
    <Footer />  
  </div>
)

export default App
