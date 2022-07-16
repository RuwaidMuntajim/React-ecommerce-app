import { FC, useState, createContext } from "react";
import {Switch, Route} from "react-router-dom";
import About from "./Components/About/About";
import AuthModal from "./Components/Auth/AuthModal";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Sidebar from "./Components/Sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";
import Menubar from "./Components/Menubar/Menubar";
import { commerce } from "./lib/commerce";

export const totalItemContext = createContext<number>(0)

const App:FC = () => {
  const [selected, setselected] = useState<boolean>(false);
  let selection: () => void;
  selection = () => {
    selected ? setselected(false) : setselected(true);
  }
  const [selectedM, setselectedM] = useState<boolean>(false);
  let selectionM: () => void;
  selectionM = () => {
    selectedM ? setselectedM(false) : setselectedM(true);
  }

  return (

    

    <div className="App">
      <AnimatePresence>
      {selected && <AuthModal selection={selection}/>}
      {selectedM && <Menubar selectionM={selectionM}/>}
      </AnimatePresence>
      <div className="z-0">
        <Nav selection={selection} selectionM={selectionM}/>
        <div className="grid grid-cols-6">
          <div className="col-span-1">
            <Sidebar/>
          </div>
          <div className="col-span-6 md:col-span-5 overflow-y-scroll" style={{height: '88vh'}}>
            <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/cart">
                  <Cart/>
                </Route>
                { window.screen.width < 768 &&
                  <Route exact path="/about">
                    <About/>
                  </Route>
                }
                <Route exact path="*">
                  <h2>Page not found -,- </h2>
                </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
