import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, About, GetStarted, Developers } from "./pages";
import styled from "styled-components";
import { useEffect } from "react";

const Style = styled.main`
  min-height: calc(100% - 4rem); // 헤더 높이
  padding: 20px 0;
  padding-bottom: 4rem; // 푸터 높이
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  // 햄버거 메뉴 닫기
  const closeMenu = () => {
    const menu = document.querySelector(".menu");
    const ul = document.querySelector("ul");
    menu.classList.remove("open");
    ul.classList.remove("open");
  };

  useEffect(() => {
    // 스크롤시 메뉴 닫기
    window.addEventListener("scroll", closeMenu);

    // 클리너
    return () => {
      window.removeEventListener("scroll", closeMenu);
    };
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Style onClick={closeMenu}>
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
