import styled from "styled-components";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 160px;
  position: relative;
  gap: 60px;

  &:before {
    content: "";
    width: 100%;
    height: 70%;
    background-color: #99f5e8;
    position: absolute;
    top: 80px;
    left: 0;
    z-index: -1;
  }

  p {
    font-size: 1em;
    line-height: 2em;
    color: #888;
  }

  .project {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .project img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.15) inset;
    background-color: white;
  }

  .project h1 {
    letter-spacing: 0.07em; /* 3차 피드백 자간 줄이기 */
    font-weight: 400;
  }

  .cards {
    display: flex;
    justify-content: center;
    gap: 60px;
    flex-wrap: wrap;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 9vw;
    min-width: 250px;
    padding: 40px;
    border-radius: 25px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    gap: 10px;
    text-align: center;
    background-color: white;
  }

  .card:before {
    content: "";
    width: 18px;
    height: 18px;
    top: 15px;
    left: 15px;
    position: absolute;
    border-radius: 50%;
    background-color: #26f896;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.15) inset;
  }

  .card img {
    width: 120px;
    border-radius: 50%;
  }

  .card h2 {
    font-size: 1.2em;
  }

  .card #role {
    font-size: 0.7em;
  }

  .card #description {
    font-size: 0.4em;
    line-height: 2.1;
    margin-top: 10px;
    padding-bottom: 40px;
  }
`;

const Developers = () => {
  return (
    <Style>
      <div className="project">
        <img src="./src/assets/sample-logo.png" alt="logo"></img>
        <h1 className="noto-sans">Creativision</h1>
      </div>
      <div className="cards">
        <div className="card">
          <img src="./src/assets/vactor0911.png" alt="profile"></img>
          <h2 className="noto-sans">Vactor0911</h2>
          <p id="role">프론트</p>
          <p id="description">
            O&rsquo;er the land of the free and the homeof the brave! And where
            is that band who so vauntingly
          </p>
        </div>
        <div className="card">
          <img src="./src/assets/limhuijin.png" alt="profile"></img>
          <h2 className="noto-sans">limhuijin</h2>
          <p id="role">서버 및 클라우드</p>
          <p id="description">
            Mokwon Univ. Computer Science 22 <br />
            Machine Learning Engineer <br />
            <a href="https://gabriel227.tistory.com/" target="_blank" style={{
              color: "#666",
              textDecoration: "none",
              fontWeight: "bold",
              textWrap: "nowrap"
            }}>BLOG : https://gabriel227.tistory.com/</a> <br />
          </p>
        </div>
        <div className="card">
          <img src="./src/assets/heoseonjin.png" alt="profile"></img>
          <h2 className="noto-sans">HeoSeonJin0504</h2>
          <p id="role">프론트</p>
          <p id="description">
            O&rsquo;er the land of the free and the homeof the brave! And where
            is that band who so vauntingly
          </p>
        </div>
        <div className="card">
          <img src="./src/assets/j_doyoon.png" alt="profile"></img>
          <h2 className="noto-sans">J_doyoon</h2>
          <p id="role">디자이너</p>
          <p id="description">
            O&rsquo;er the land of the free and the homeof the brave! And where
            is that band who so vauntingly
          </p>
        </div>
      </div>
    </Style>
  );
};

export default Developers;
