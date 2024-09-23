import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Filtered from './Components/Filtered';
import Recipe from './Components/Recipe';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Searched from './Components/Searched';
import AddRecipe from './Components/AddRecipie';
import EditRecipe from './Components/EditRecipe';

function App() {
  return (
    <Router>
      <Navbar />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filtered/:category" element={<Filtered />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/searched/:name" element={<Searched />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/edit-recipe" element={<EditRecipe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
