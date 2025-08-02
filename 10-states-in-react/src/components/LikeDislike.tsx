import { useState } from 'react';
import './LikeDislike.css';
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike }
  from 'react-icons/ai';

function LikeDislike() {
  const [likes, setLikes] = useState(1000);
  const [dislikes, setDislikes] = useState(50);
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  // const handleLike = () => {
  //   setLikeActive((prevState) => !prevState);
  //   setLikes((prevState) => prevState + 1);
  //   setDislikeActive(false);
  // };

  // const handleDislike = () => {
  //   setDislikeActive((prevState) => !prevState);
  //   setDislikes((prevState) => prevState + 1);
  //   setLikeActive(false);
  // };

  const handleButtonClick = (type: 'like' | 'dislike') => {
    if (type === 'like') {
      setLikeActive((prev) => !prev);
      setLikes((prev) => (likeActive ? prev - 1 : prev + 1));
      if (dislikeActive) {
        setDislikes((prev) => prev - 1);
        setDislikeActive(false);
      }
    } else {
      // dislike
      setDislikeActive((prev) => !prev);
      setDislikes((prev) => (dislikeActive ? prev - 1 : prev + 1));
      if (likeActive) {
        setLikes((prev) => prev - 1);
        setLikeActive(false);
      }
    }
  };

  return (
    <div className="likeDislike_container">
      <div className="like__container">
        <button onClick={ () => handleButtonClick('like') }>
          { likeActive ? <AiFillLike size={ 20 } /> : <AiOutlineLike size={ 20 } /> }
        </button>
        <span>
          { likes }
        </span>
      </div>

      <div className="like__container">
        <button onClick={ () => handleButtonClick('dislike') }>
          { dislikeActive ? <AiFillDislike size={ 20 } />
            : <AiOutlineDislike size={ 20 } /> }
        </button>
        <span>
          { dislikes }
        </span>
      </div>
    </div>
  );
}

export default LikeDislike;
