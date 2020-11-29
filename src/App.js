import "./App.css";
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./SearchPage";
import { useState } from "react";
import { searchContext } from "./context";
function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <div className="app">
      <searchContext.Provider value={{ search, updateSearch: handleSearch }}>
        <Router>
          {/**header */}
          <Header />
          {/**sidebar */}
          <div className="app__page">
            <Sidebar />
            <Switch>
              <Route exact path="/" component={RecommendedVideos} />
              <Route exact path="/search/:text" component={SearchPage} />
            </Switch>
          </div>
        </Router>
      </searchContext.Provider>
    </div>
  );
}

export default App;
