import { useEffect, useState } from 'react';
import MovieList from './Exo6MovieList';



function App() {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        if (query) {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/tv?api_key=2ec96d5b6b5bfb03b3f398ea23d78b3a&query=${query}`
          );
          const data = await response.json();
          setRecipes(data.results);
        }
      };

    useEffect(() => {
        getRecipes()
    },[])

    const getRecipes = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=2ec96d5b6b5bfb03b3f398ea23d78b3a`
        );
        const data = await response.json()
        setRecipes(data.results) // `results` from the tmdb docs
        console.log(data)
    }
      
    return (
        <div>
          <h1>Liste des Films</h1>
          <div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un film..."
            />
            <button id="Marko"onClick={handleSearch}>Rechercher</button>
          </div>
          <ul>
            {recipes.map((recipe) => (
              <li key={recipe.id}>{recipe.title}</li>
            ))}
          </ul>
        </div>
      );

            }
      



export default App;