export const getAllGames = () => {
    return fetch("http://localhost:8000/games", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("gamer_token")}`
        }
    })
        .then(res => res.json())
}

export const getAllCategories = () => {
    return fetch("http://localhost:8000/categories", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("gamer_token")}`
        }
    })
        .then(res => res.json())
}

export const getSingleGame = (id) => {
    return fetch(`http://localhost:8000/games/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("gamer_token")}`
        }
    })
        .then(res => res.json())
}

export const createGame = (newGameObject) => {
    return fetch(`http://localhost:8000/games`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("gamer_token")}`
        },
        body: JSON.stringify(newGameObject)
    })
        .then(res => res.json())
}

export const createGameReview = (reviewObject) => {
    return fetch(`http://localhost:8000/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("gamer_token")}`
        },
        body: JSON.stringify(reviewObject)
    })
        .then(res => res.json())
}
