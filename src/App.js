import './App.css';
import Movie from './components/Movie';
import Scrollable from './components/Scrollable';

function App() {
  return (
    <div>
      <div className="Scrollable">
        <Movie name="Movie 1" />
        <Movie name="Movie 2" />
        <Movie name="Movie 3" />
        <Movie name="Movie 4" />
        <Movie name="Movie 5" />
        <Movie name="Movie 6" />
        <Movie name="Movie 7" />
        <Movie name="Movie 8" />
      </div>
      <Scrollable/>
    </div>
  );
}

export default App;