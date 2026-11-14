import './pet-list.css'

import PetCard from '../PetCard'

export default function PetList({ pets }) {
  return (
    <section>
      <h2>Na espera por você</h2>

      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          emoji={pet.emoji}
          name={pet.name}
          species={pet.species}
          age={pet.age}
          size={pet.size}
        />
      ))}

    </section>
  )
}
