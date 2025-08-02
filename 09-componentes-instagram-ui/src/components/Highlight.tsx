import './Highlight.css';

type HighlightProps = {
  data: {
    image: string;
    text: string;
    alt?: string;
  }
};

function Highlight({ data }: HighlightProps) {
  const { image, text, alt = '' } = data;
  return (
    <div className="highlight">
      <div className="image">
        <img src={ image } alt={ alt } />
      </div>
      <p style={ { backgroundColor: 'green', padding: '1rem' } }>{ text }</p>
    </div>
  );
}

export default Highlight;