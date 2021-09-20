import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "./cointainer/PageNotFound";
import { RoutesHome } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {RoutesHome()}

        {/* Trang không tồn tại - phải để cuối cùng */}
        <Route path="" component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
