import React, {Component} from "react";
import { LocaleProvider } from 'antd';
import faIR from 'antd/lib/locale-provider/fa_IR';

import isAuth from './utils/isAuthenticated';
import "./stylesheets/App.css";
import AppRouter from "./routers/AppRouter";

class App extends Component {
  
  constructor(props) {
    super(props);
    isAuth();
  }

  render() {
    return (
      <LocaleProvider locale={faIR} >
        <div className="App">
          <AppRouter/>
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
