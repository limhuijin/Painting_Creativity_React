import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, About, GetStarted, Developers } from "./pages";
import styled from "styled-components";
import { useEffect } from "react";

const Style = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .main-container {
    width: 100%;
    min-height: calc(100% - 4rem); // 헤더 높이
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: keep-all;
  }
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
      <Style>
        <Header />
        <div className="main-container" onClick={closeMenu}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/developers" element={<Developers />} />
          </Routes>
        </div>
        <Footer />
      </Style>
    </BrowserRouter>
  );
}

export default App;
