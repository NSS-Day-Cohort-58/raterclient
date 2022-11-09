import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getSingleGame } from "../managers/GameManager"
import "./Games.css"

export const GameDetails = () => {
    const { gameId } = useParams()
    const [details, setDetails] = useState({
        categories: [],
        reviews: []
    })
    const navigate = useNavigate()

    useEffect(
        () => {
            getSingleGame(gameId).then(setDetails)
        },
        [gameId]
    )

    return <>
        <div className="gameDetailHeader">
            <h2>{details.title}</h2>
            <button className="btn btn-primary"
                onClick={() => navigate(`/reviewgame/${gameId}`)}
                >Want to review?</button>
        </div>

        <div>Designed by {details.designer}</div>
        <div>Release in the year {details.release_year}</div>
        <div>Can be played by {details.number_of_players} people</div>
        <div>Usually takes {details.time_to_play} minutes to play</div>
        <div>Minimum age recommendation is {details.recommended_age}</div>
        <div>Desgined by {details.designer}</div>

        <h3>In the following categories</h3>
        {
            details.categories.map(
                cat => <div key={`category--${cat.description}`}>Category {cat.description}</div>
            )
        }

        <h3>Reviews</h3>
        {
            details.reviews.map(
                review => <div key={`review--${review.id}`}>{review.review} by {review.user.first_name} {review.user.last_name}</div>
            )
        }
    </>
}
