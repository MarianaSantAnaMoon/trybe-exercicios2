import Highlight from './Highlight';
import './HighlightList.css';

function HighlightList() {
  const highlightData = [
    {
      image: 'https://betrybe.github.io/images/trybe/chat.jpg',
      text: 'Depoimento',
      alt: 'Imagem Depoimento',
    },
    {
      image: 'https://betrybe.github.io/images/trybe/midia.jpg',
      text: 'Mídia',
      alt: 'Imagem Mídia',
    },
    {
      image: 'https://betrybe.github.io/images/trybe/money.jpg',
      text: 'Investimento',
      alt: 'Imagem Investimento',
    },
    {
      image: 'https://betrybe.github.io/images/trybe/star.jpg',
      text: 'Influencers',
    },
  ];

  return (
    <div className="hightlight__container">
      {
        highlightData.map((item, index) => (
          <Highlight
            key={ index }
            // image={ item.image }
            // text={ item.text }
            // alt={ item.alt }
            // { ...item }
            data={ { ...item } }
          />))
      }
    </div>
  );
}

export default HighlightList;