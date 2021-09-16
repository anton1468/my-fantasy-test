import { useState } from "react"
import FirstScreen from "./components/FirstScreen/FirstScreen";
import Tutorial from "./components/Tutorial/Tutorial";
import ChooseBag from "./components/ChooseBag/ChooseBag"
import ChooseAccessory from "./components/ChooseAccessory/ChooseAccessory"
import { Switch, Route, BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Switch>

          <Route exact path="/"><FirstScreen /></Route>
          <Route path="/tutorial"><Tutorial /></Route>
          <Route path="/choose-bag"><ChooseBag /></Route>
          <Route path="/choose-accessory"><ChooseAccessory /></Route>
          <Route path="/mywatchlist"></Route>
        </Switch>

      </BrowserRouter>


    </div>
  );
}

export default App;
