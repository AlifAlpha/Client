import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
