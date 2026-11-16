import './adoptionForm.css';


export default function AdoptionForm() {
  return (
    <form>
      <h2>Quero adota a Nina</h2>

      <div>
        <label htmlFor="petId">Nome:</label>
        <select name="pet" id="petId">
          <option value="">Escolha um animal</option>
        </select>
      </div>
    </form>

  )
}
