


import Fav from './component/Fav';
import Meal from './component/Meal';
import NavBar from './component/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
      <Route exec path='/' element={<><NavBar/></>}/>
      <Route exec path='/meals' element={<><NavBar/><Meal/></>}/>
      <Route exec path='/fav' element={<><NavBar/><Fav/></>}/>
      
    </Routes>
   </BrowserRouter>
                
    </div>
  );
}

export default App;
