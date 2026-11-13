import "./header.css";

import { PawPrint } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div >
        <PawPrint size={36} color="#d26060" strokeWidth={1.25} />
        <h1>Adote um amigo</h1>
      </div>

      <p>Encontre o seu novo melhor amigo</p>
    </header>

  )
}

