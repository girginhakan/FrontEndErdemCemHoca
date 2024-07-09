import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header";
import Main from './components/Main';
function App() {
  return (
     //Buna react fragment deniyor. Boş yazmak yerine React.Fragment de yazılabilir
     <>
     <Header/>
     <Main/>
      <Footer/>
    </>
  )
}
export default App
