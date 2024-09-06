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
    height: 80%;
    background-color: #99f5e8;
    position: absolute;
    top: 100px;
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
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.15) inset;
    background-color: white;
  }

  .project h1 {
    letter-spacing: 0.1em;
    font-weight: 400;
  }

  .cards {
    display: flex;
    justify-content: center;
    gap: 80px;
    flex-wrap: wrap;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 15vw;
    min-width: 250px;
    padding: 60px 40px;
    border-radius: 25px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
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
    background-color: #c8ff96;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.15) inset;
  }

  .card img {
    width: 150px;
    border-radius: 50%;
  }

  .card h2,
  .card #description {
    margin-top: 10px;
  }

  .card h2 {
    font-size: 1.8em;
  }

  .card p {
    font-size: 0.85em;
  }
`;

const Developers = () => {
  return (
    <Style>
      <div className="project">
        <img src="./src/assets/sample-logo.png" alt="logo"></img>
        <h1>Creativision</h1>
        <p>프로젝트</p>
      </div>
      <div className="cards">
        <div className="card">
          <img src="./src/assets/vactor0911.png" alt="profile"></img>
          <h2>Vactor0911</h2>
          <p id="role">프론트</p>
          <p id="description">
            O&rsquo;er the land of the free and the homeof the brave! And where
            is that band who so vauntingly
          </p>
        </div>
        <div className="card">
          <img src="./src/assets/limhuijin.png" alt="profile"></img>
          <h2>limhuijin</h2>
          <p id="role">서버 및 AI</p>
          <p id="description">
            O&rsquo;er the land of the free and the homeof the brave! And where
            is that band who so vauntingly
          </p>
        </div>
        <div className="card">
          <img src="./src/assets/heoseonjin.png" alt="profile"></img>
          <h2>HeoSeonJin0504</h2>
          <p id="role">프론트</p>
          <p id="description">
            O&rsquo;er the land of the free and the homeof the brave! And where
            is that band who so vauntingly
          </p>
        </div>
        <div className="card">
          <img src="./src/assets/j_doyoon.png" alt="profile"></img>
          <h2>J_doyoon</h2>
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
