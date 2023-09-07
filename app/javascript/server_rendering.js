// Entry point for SSR components
import "../../vendor/javascript/react-server";

const ReactRailsUJS = require("react_ujs");
import * as ReactComponents from "./react_components";
ReactRailsUJS.getConstructor = (className) => ReactComponents[className];
