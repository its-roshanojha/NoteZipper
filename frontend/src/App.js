import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MyNotes from "./screens/MyNotes/MyNotes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={LandingPage} exact></Route>
        <Route path="/mynotes" Component={() => <MyNotes/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
