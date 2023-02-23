import { Tab } from "semantic-ui-react";
import React from "react";

import "./App.css";
import Weather from "./view/weather";
import Quote from "./view/quote";

const panes = [
  {
    menuItem: "Quote of the day",
    render: () => (
      <Tab.Pane attached={false}>
        <Quote />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Weather Tracker",
    render: () => (
      <Tab.Pane attached={false}>
        <Weather />
      </Tab.Pane>
    ),
  },
];

const App = () => <Tab menu={{ pointing: true }} panes={panes} />;

export default App;
