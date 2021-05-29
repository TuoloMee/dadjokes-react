import React, {useState, useEffect}from "react"
import "./style.css"

export const Joke = ({userAvatar, userName, text, likes, dislikes}) => {

  
const [likeUp, setLikeUp] = useState(0)
const [likeDown, setLikeDown] = useState(0)

useEffect(() => {
  setLikeUp(likes);
  setLikeDown(dislikes);
}, []);


return (

  
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar} />
            <p className="user-name">{userName}</p>
          </div>

          <p className="joke__text">
          {text}
          </p>
        </div>
        <div className="joke__likes">
          <button onClick={() => setLikeUp(likeUp+1)} id="btn-up" className="btn-like btn-like--up"></button>
          <span id="likes-up" className="likes-count likes-count--up">{likeUp}</span>
          <button onClick={() => setLikeDown(likeDown+1)} id="btn-down" className="btn-like btn-like--down"></button>
          <span id="likes-down" className="likes-count likes-count--down">{likeDown}</span>
        </div>
      </div>
    
)


}