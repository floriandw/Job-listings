import { BrowserRouter, Route } from "react-router-dom";

import homePage from "./js/pages/homePage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={homePage}/>
    </BrowserRouter>
  );
}

export default App;
