import { useState } from 'react';
 
function LikeButton() {
  const [likes, setLikes] = useState(0);
 
  const handleClick = () => {
    setLikes(prev => prev + 1);
  };
 
  return (
    <div>
      <button onClick={handleClick}>
        {likes > 0 ? '❤️' : '🤍'} Like
      </button>
      <span>{likes} likes</span>
    </div>
  );
}
 
export default LikeButton;