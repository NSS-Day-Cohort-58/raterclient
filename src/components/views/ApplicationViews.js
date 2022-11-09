import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { GameDetails } from "../games/GameDetails"
import { GameForm } from "../games/GameForm"
import { GameList } from "../games/GameList"
import { GameReviewForm } from "../games/GameReviewForm"
import { Authorized } from "./Authorized"


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                {/* Add Routes here */}
                <Route path="/games" element={ <GameList /> } />
                <Route path="/games/new" element={ <GameForm /> } />
                <Route path="/games/:gameId" element={ <GameDetails /> } />
                <Route path="/reviewgame/:gameId" element={ <GameReviewForm /> } />
            </Route>
        </Routes>
    </>
}
