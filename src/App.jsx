import './App.css'

import Header from './components/Header';
import PetCard from './components/PetCard';

function App() {


  return (
    <>
      <Header />
      <PetCard
        emoji={"dog"}
        name="Buddy"
        species="Cachorro"
        age="3"
        size="Médio"
      />
    </>
  )
}

export default App
