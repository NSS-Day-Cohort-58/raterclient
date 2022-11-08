import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createGame, getAllCategories } from "../managers/GameManager"

export const GameForm = () => {
    const [game, updateGame] = useState({
        title: "",
        yearReleased: 0,
        numberOfPlayers: 0,
        recommendedAge: 0,
        designer: "",
        timeToPlay: 0
    })
    const [categories, setCategories] = useState([])
    const [chosenCategories, setChosen] = useState(new Set())

    const navigate = useNavigate()

    useEffect(() => {
        getAllCategories().then(setCategories)
    }, [])

    const submitGame = (evt) => {
        evt.preventDefault()
        createGame({}).then(() => navigate("/games"))
    }

    const changeStateProperty = (evt) => {
        const copy = { ...game }
        copy[evt.target.id] = evt.target.value
        updateGame(copy)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        onChange={changeStateProperty}
                        required autoFocus
                        type="text" id="title"
                        className="form-control"
                        placeholder="Game title"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="designer">Designer:</label>
                    <input
                        onChange={changeStateProperty}
                        required autoFocus
                        type="text" id="designer"
                        className="form-control"
                        placeholder="Game designer"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="yearReleased">Year Released:</label>
                    <input
                        onChange={changeStateProperty}
                        required autoFocus
                        type="text" id="yearReleased"
                        className="form-control"
                        placeholder="Year of release"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberofPlayers">Number of players:</label>
                    <input
                        onChange={changeStateProperty}
                        required autoFocus
                        type="text" id="numberOfPlayers"
                        className="form-control"
                        placeholder="How many people can play?"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="timeToPlay">Estimated time of play:</label>
                    <input
                        onChange={changeStateProperty}
                        required autoFocus
                        type="text" id="timeToPlay"
                        className="form-control"
                        placeholder="How long does a game last?"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="recommendedAge">Recommended age:</label>
                    <input
                        onChange={changeStateProperty}
                        required autoFocus
                        type="text" id="recommendedAge"
                        className="form-control"
                        placeholder="How old does someone have to be?"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="age">Categories:</label>

                    {
                        categories.map(
                            category => <div>
                                {category.description}
                                <input
                                    onChange={
                                        (evt) => {
                                            const copy = new Set(chosenCategories)
                                            if (evt.target.checked) {
                                                copy.add(category.id)
                                            }
                                            else {
                                                copy.delete(category.id)
                                            }
                                            setChosen(copy)
                                        }
                                    }
                                    type="checkbox" />
                            </div>
                        )
                    }

                </div>
            </fieldset>
            <button onClick={submitGame} className="btn btn-primary">
                Save Game
            </button>
        </form>
    )
}