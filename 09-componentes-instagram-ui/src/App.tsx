import './App.css';
import HighlightList from './components/HighlightList';
import Wrapper from './components/Wrapper';
import Photo from './components/Photo';

const imageData = {
  src: 'https://images.unsplash.com/photo-1508182314998-3bd49473002f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af394daae4bdbc4a95dc2204984b790d&auto=format&fit=crop&w=800&q=60',
  user: {
    name: 'Luca Bravo',
    profile_image: 'https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7cfe3b93750cb0c93e2f7caec08b5a41',
    link: 'https://unsplash.com/@lucabravo',
  },
};

function App() {
  return (
    <Wrapper title="Highlight Clone">
      <HighlightList />
      <Photo { ...imageData } />
      <Photo { ...imageData } />
      <Photo { ...imageData } />
    </Wrapper>
  );
}

export default App;