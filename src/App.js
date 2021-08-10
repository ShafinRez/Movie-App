import './App.css';
import Movie from './components/Movie';

function App() {
  return (
    <div className="Scrollable">
      <Movie name="Movie 1" />
      <Movie name="Movie 2" />
      <Movie name="Movie 3" />
    </div>
  );
}

export default App;
