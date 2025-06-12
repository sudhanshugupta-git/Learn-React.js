import { Provider } from "react-redux";
import { store } from "./redux/store";
import Counter from "./components/Counter";


function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div>
  );
}

export default App;
