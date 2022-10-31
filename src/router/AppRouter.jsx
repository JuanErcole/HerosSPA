import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { DcPage } from "../heros/pages/DcPage"
import { MarvelPage } from "../heros/pages/MarvelPage"
import { Navbar } from "../ui/Navbar"



export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
          <Route path="/marvel" element={ <MarvelPage />}/>
          <Route path="/dc" element={ <DcPage />}/>

          <Route path="/login" element={ <LoginPage />}/>

          <Route path="/" element={ <LoginPage />}/>
      </Routes>
    </>
  )
}
