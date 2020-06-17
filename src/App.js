import React from "react"
import { ThemeContextProvider } from "./themeContext";

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