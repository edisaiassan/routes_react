import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { MarvelPage, DcPage } from ".."

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path="marvel" element={<MarvelPage />}></Route>
                <Route path="dc" element={<DcPage />}></Route>
                <Route path="/" element={<Navigate to={'marvel'}/>}></Route>
            </Routes>
        </>
    )
}
