import React, {Component} from "react";
import { LocaleProvider } from 'antd';
import faIR from 'antd/lib/locale-provider/fa_IR';

import "./stylesheets/App.css";
import AppRouter from "./routers/AppRouter";

class App extends Component {
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
