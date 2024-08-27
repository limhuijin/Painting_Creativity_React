import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, About, GetStarted, Developers } from "./pages";
import styled from "styled-components";

const StyledRoutes = styled(Routes)`
  height: auto;
  min-height: calc(100% - 4rem); // 헤더 높이
  padding-bottom: 4rem; // 푸터 높이
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <StyledRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/developers" element={<Developers />} />
      </StyledRoutes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
