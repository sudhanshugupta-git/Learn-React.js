import { BrowserRouter, Routes, Route } from "react-router-dom";


function Home(){return <h1>Home Page</h1>}
function About(){return(<h1>About Page</h1>)}
function NoPage(){return<h1>No Page</h1>}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
