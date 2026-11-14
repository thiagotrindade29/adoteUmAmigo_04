import './App.css'

import Header from './components/Header';
// import PetCard from './components/PetCard';
import PetList from './components/PetList';

import pets from './data/pets';

function App() {


  return (
    <>
      <Header />
      <PetList pets={pets} />
    </>
  )
}

export default App
