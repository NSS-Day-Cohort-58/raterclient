import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAllGames } from "../managers/GameManager"

export const GameList = () => {
    const [games, setGames] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            getAllGames().then(
                (gamesArray) => {
                    setGames(gamesArray)
                }
            )
        },
        []
    )

    return <>
        <h1>Game List</h1>
        <button onClick={() => {
            navigate("/games/new")
        }}>Create Game</button>
        {
            games.map(
                game => <div>
                    <Link to={`/games/${game.id}`}>{game.title}</Link>
                </div>
            )
        }
    </>

}