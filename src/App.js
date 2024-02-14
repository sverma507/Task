
import{
  BrowserRouter as Router,Routes,Route
} from 'react-router-dom';
import Loginp from './component/Loginp';
import H from './component/H';


function App() {
  return(
  <Router>
    <Routes>
      <Route
        exact
        path="/"
        element={<Loginp/>}
      ></Route>
      <Route
        exact
        path="/Home"
        element={<H/>}
      ></Route>
    </Routes>
  </Router>
  );
}

export default App;
