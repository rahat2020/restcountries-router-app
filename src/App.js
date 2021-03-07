import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetail from "./components/CountryDetail/CountryDetail";
import Main from "./components/Main/Main";
import NoMatch from "./components/NoMatch/NoMatch";


function App() {
 
  return (
    <div>
     <Router>
       <Switch>
         <Route path="/home">
         <Main></Main>
        </Route>
         <Route path="/country/:name">
         <CountryDetail></CountryDetail>
        </Route>

         <Route exact path="/">
         <Main></Main>
         </Route>

         <Route path="*">
        <NoMatch></NoMatch>
         </Route>

       </Switch>
     </Router>
     
     {/* <Main></Main> */}
        
         
    
    </div>
  );
}

export default App;
