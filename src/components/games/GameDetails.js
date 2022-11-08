import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleGame } from "../managers/GameManager"

export const GameDetails = () => {
    const { gameId } = useParams()
    const [details, setDetails] = useState({
        categories: []
    })

    useEffect(
        () => {
            getSingleGame(gameId).then(
                (theGame) => {
                    setDetails(theGame)
                }
            )
        },
        [gameId]
    )

    return <>
        <h2>{details.title}</h2>

        <div>Designed by {details.designer}</div>
        <div>Release in the year {details.release_year}</div>
        <div>Can be played by {details.number_of_players} people</div>
        <div>Usually takes {details.time_to_play} minutes to play</div>
        <div>Minimum age recommendation is {details.recommended_age}</div>
        <div>Desgined by {details.designer}</div>

        <h3>In the following categories</h3>
        {
            details.categories.map(
                cat => <div>Category {cat.description}</div>
            )
        }
    </>
}