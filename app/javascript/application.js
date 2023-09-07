// Entry point for the build script in your package.json
const ReactRailsUJS = require("react_ujs");
import * as ReactComponents from "./react_components";
ReactRailsUJS.getConstructor = (className) => ReactComponents[className];
