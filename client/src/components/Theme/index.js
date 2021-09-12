import React from "react"
import Navegacao from "./Navegacao"
export default function Theme({ children }) {
  return (
    <div className="container">
      <Navegacao />
      {children}
    </div>
  )
}