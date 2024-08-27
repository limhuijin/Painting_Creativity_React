import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, About, GetStarted, Developers } from "./pages";
import styled from "styled-components";

const Style = styled.main`
  height: auto;
  min-height: calc(100% - 4rem); // 헤더 높이
  padding: 20px;
  padding-bottom: 4rem; // 푸터 높이
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Style>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/developers" element={<Developers />} />
        </Routes>
      </Style>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
