import styled from "styled-components";
import Button from "../components/Button";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  width: 100%;
  text-align: center;
  margin-bottom: 15%;

  & > h1 {
    font-size: 3em;
    margin: 100px 0;
  }

  & > h1,
  & > h1 span {
    font-weight: 400;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    width: 30vw;
    border-radius: 30px;
    background-color: #ececec;
    gap: 15px;
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    border-radius: 20px;
    background-color: #fff;
    padding: 10px;
    width: 100%;
    height: 40vh;
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .alert {
    display: none;
    flex-direction: column;
    gap: 40px;
    padding: 20px 60px;
    background-color: white;
    border: 2px solid black;
    border-radius: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .alert p {
    font-size: 1.25em;
  }

  // 세로모드 모바일
  @media (max-width: 991px) and (orientation: portrait) {
    .container {
      flex-direction: column;
      gap: 40px;
    }

    .box {
      width: 80vw;
    }

    .result {
      position: relative;
    }
  }
`;

const GetStarted = () => {
  const displayAlert = () => {
    const alert = document.querySelector(".alert");
    alert.style.display = "flex";
  };

  const hideAlert = () => {
    const alert = document.querySelector(".alert");
    alert.style.display = "none";
  };

  return (
    <Style>
      <h1 className="noto-sans">
        우리 아이가 <span className="noto-sans">그린</span> 그림을 <span className="noto-sans">통해</span> 창의력을
        분석해보세요!
      </h1>
      <div className="container">
        <div className="box">
          <div className="image-wrapper">
            <img src="./src/assets/sample-image.png" style={{
              width: "60%",
              height: "60%",
              opacity: 0.3,
            }} />
          </div>
          <Button text="이미지 열기" style={{
            boxShadow: "0 5px 14px rgba(0, 0, 0, 0.4)",
            backgroundColor: "#fff",
          }} />
        </div>
        <div className="box result">
          <div className="image-wrapper">
            {false ? <img src="./src/assets/sample-image.png" /> : <></>}
          </div>
          <Button text="분석 시작" onClick={displayAlert} style={{
            boxShadow: "0 5px 14px rgba(0, 0, 0, 0.4)",
          }} />

          <div className="alert">
            <h2>경고창</h2>
            <p>사진을 업로드해주세요.</p>
            <Button text="확인" onClick={hideAlert} />
          </div>
        </div>
      </div>
    </Style>
  );
};

export default GetStarted;
