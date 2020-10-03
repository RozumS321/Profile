import Header from "../components/header";
import Main from "../components/main";
import { Provider } from "react-redux";
import reducersProfile from "../redux/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducersProfile, applyMiddleware(thunk));

export default function Page() {
  return (
    <Provider store={store}>
      <div style={{ background: "url(./header_bg.svg) center 0 no-repeat" }}>
        <Header />
        <Main />
      </div>
    </Provider>
  );
}
