import './Photo.css';
import { FaHeart, FaComment } from 'react-icons/fa';

export type ImageData = {
  src: string;
};

const likes = 10;
const comments = 2;

function Photo({ src }: ImageData) {
  return (
    <div className="Picture">
      <div className="Picture-Container">
        <img src={ src } alt="Paisagem" />
        <div className="Icons-Container">
          <div className="Icon">
            <FaHeart />
            {likes}
          </div>
          <div className="Icon">
            <FaComment />
            {comments}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photo;