import './pet-card.css'

import { Cat, Dog } from "lucide-react"


export default function PetCard({ emoji, name, species, age, size }) {
  const renderEmoji = () => {
    if (emoji === "cat") {
      return <Cat size={38} />
    }
    return <Dog size={38} />
  }

  return (
    <article className="pet-card">
      <span>{renderEmoji()}</span>
      <div className="pet-info">
        <h3>{name}</h3>
        <p>{species} · {age}  · {size}</p>
      </div>
      <button >Quero Adotar</button>

    </article>
  )
}
