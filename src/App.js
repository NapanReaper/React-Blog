import Navbar from './Navbar'
import Home from './Home'
import BlogDetails from './BlogDetails'
import Create from './Create'
import NotFound from './NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create" exact>
              <Create />
            </Route>
            <Route path="/blogs/:id" exact>
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
