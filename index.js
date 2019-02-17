import React from "react";
import { render } from "react-dom";
import { RootComponent } from "./component"

const rootElement = document.querySelector('#root')

render(<RootComponent />, rootElement, () => (console.log("Component has been loaded")))