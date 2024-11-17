import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout><Home/></Layout>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;