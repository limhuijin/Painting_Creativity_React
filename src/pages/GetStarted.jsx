import styled from "styled-components";
import Button from "../components/Button";
import { useRef, useState } from "react";

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
    align-items: center;
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
    font-weight: 500;
  }

  .alert button {
    display: inline;
    padding: 5px 0;
    width: 50%;
    border: 1px solid #666;
    border-radius: 12px;
    background-color: #fff;
    font-weight: 500;
    font-size: 1.1em;
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.2);
    transition: 0.3s ease;
    cursor: pointer;
  }

  .alert button:hover {
    background-color: #ddd;
    transform: scale(1.1);
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

  // 이미지 열기
  const imageInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageInputButtonClick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const newImage = e.target.files[0];
    if (newImage) {
      setSelectedImage(newImage); // 파일 객체를 그대로 저장
    }
  };

  // 이미지 분석
  const handleImageAnalysisButtonClick = () => {
    if (!selectedImage) {
      displayAlert();
      return;
    }
  
    const formData = new FormData();
    formData.append("file", selectedImage);
  
    try {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://127.0.0.1:8000/analyze-image", true);
      xhr.setRequestHeader("Accept", "application/json");
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log("Analysis Result:", response);
            alert('Total Score: ${response.total_score}\nCategory: ${response.category}');
          } else {
            console.error("Failed to analyze the image:", xhr.status, xhr.responseText);
            alert("Failed to analyze the image.");
          }
        }
      };
  
      // 서버로 FormData 전송
      xhr.send(formData);
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
  };

  return (
    <Style>
      <h1 className="bmjua">
        우리 아이가 <span className="bmjua">그린</span> 그림을{" "}
        <span className="bmjua">통해</span> 창의력을 분석해보세요!
      </h1>
      <div className="container">
        <div className="box">
          <div className="image-wrapper">
            <img
              id="img-selected"
              src={
                selectedImage ? selectedImage : "./src/assets/sample-image.png"
              }
              style={
                !selectedImage
                  ? {
                      width: "60%",
                      height: "60%",
                      opacity: 0.3,
                    }
                  : {}
              }
            />
          </div>
          <Button
            text="이미지 열기"
            style={{
              boxShadow: "0 5px 14px rgba(0, 0, 0, 0.4)",
              backgroundColor: "#fff",
            }}
            onClick={handleImageInputButtonClick}
          />
          <input
            type="file"
            accept="image/png"
            ref={imageInputRef}
            onChange={handleImageChange}
            style={{
              display: "none",
            }}
          />
        </div>
        <div className="box result">
          <div className="image-wrapper">
            {false ? <img src="./src/assets/sample-image.png" /> : <></>}
          </div>
          <Button
            text="분석 시작"
            onClick={handleImageAnalysisButtonClick}
            style={{
              boxShadow: "0 5px 14px rgba(0, 0, 0, 0.4)",
            }}
          />

          <div className="alert">
            <h2>경고창</h2>
            <p>사진을 업로드해주세요.</p>
            <button onClick={hideAlert}>OK</button>
          </div>
        </div>
      </div>
    </Style>
  );
};

export default GetStarted;