import Body from "./Component/Body";
import appstore from "./Utilish/appstore";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={appstore}>
      <Body />
    </Provider>
  );
}

export default App;
