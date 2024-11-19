import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout><Home/></Layout>}/>
        <Route path="/aboutus" element={<Layout><AboutUs/></Layout>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
