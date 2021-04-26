import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Post from "./component/Post";
import Project from "./component/Project";
import NavBar from "./component/NavBar";
import Travel from "./component/Travel";
import DND from "./component/DND";
import CodeBlock from "./component/CodeBlock";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/About' />
        <Route component={Post} path='/Post' />
        <Route component={Project} path='/Project' />
        <Route component={Travel} path='/Travel' />
        <Route component={DND} path='/DND' />
        <Route component={CodeBlock} path='/CodeBlock' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
