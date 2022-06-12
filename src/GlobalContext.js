import { useState, createContext, useContext } from "react"
import { getWordleWord } from "./utils/utils"


const GlobalContext = createContext(null)

export const GlobalState = props => {
  const [wordleWord, setWordleWord] = useState(getWordleWord()) //probably using this the wrong way. #TODO: do more research

   return (
    <GlobalContext.Provider value={[wordleWord, setWordleWord]}>{props.children}</GlobalContext.Provider>
  )
}

export const useGlobalState = () => useContext(GlobalContext)
