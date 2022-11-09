import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createGameReview, getSingleGame } from "../managers/GameManager"

export const GameReviewForm = () => {
    const { gameId } = useParams()
    const [details, setDetails] = useState({ categories: [] })
    const [review, updateReview] = useState("")
    const navigate = useNavigate()

    useEffect(
        () => {
            getSingleGame(gameId).then(setDetails)
        },
        [gameId]
    )

    const submitReview = (evt) => {
        evt.preventDefault()
        createGameReview({ gameId, review }).then(() => navigate('/games'))
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Review {details.title}</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Write your review:</label>
                    <textarea
                        rows={65}
                        onChange={(evt)=>{
                            updateReview(evt.target.value)
                        }}
                        required autoFocus
                        id="review"
                        className="form-control"
                    ></textarea>
                </div>
            </fieldset>
            <button onClick={submitReview} className="btn btn-primary">
                Save Game
            </button>
        </form>
    )
}
