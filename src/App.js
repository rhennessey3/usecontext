import React from "react"

import Header from "./Header"
import Button from "./Button"

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <Header />
        <Button />
      </ThemeContextProvider>
    </div>
  )
}

export default App