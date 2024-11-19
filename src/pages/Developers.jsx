import styled from "styled-components";
import Logo from "../assets/images/creativity-logo.svg";
import Vactor0911 from "../assets/images/vactor0911.png";
import Limhuijin from "../assets/images/limhuijin.png";
import Heoseonjin from "../assets/images/heoseonjin.png";
import J_doyoon from "../assets/images/j_doyoon.png";

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
    padding: 30px;
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
  }
`;

const StyledLink = (props) => {
  const [link, text] = [props.link, props.text];

  return (
    <a
      href={link}
      target="_blank"
      style={{
        color: "#666",
        fontSize: "0.8em",
        fontWeight: "bold",
        textWrap: "balance",
        marginBottom: "40px",
      }}
    >
      {text}
    </a>
  );
};

const Developers = () => {
  return (
    <Style>
      <div className="project">
        <img src={Logo} alt="logo"></img>
        <h1 className="noto-sans">Creativision</h1>
      </div>
      <div className="cards">
        <div className="card">
          <img src={Vactor0911} alt="profile"></img>
          <h2 className="noto-sans">Vactor0911</h2>
          <p id="role">프론트</p>
          <p id="description">
            Mokwon Univ. Computer Engineering 20 <br />
            Web Front-End Developer <br />
          </p>
          <StyledLink
            link="https://github.com/Vactor0911/"
            text="GitHub Profile"
          />
        </div>
        <div className="card">
          <img src={Limhuijin} alt="profile"></img>
          <h2 className="noto-sans">limhuijin</h2>
          <p id="role">서버 및 AI</p>
          <p id="description">
            Mokwon Univ. Computer Engineering 22 <br />
            Machine Learning Engineer <br />
          </p>
          <StyledLink
            link="https://gabriel227.tistory.com/"
            text="Tistory Blog"
          />
        </div>
        <div className="card">
          <img src={Heoseonjin} alt="profile"></img>
          <h2 className="noto-sans">HeoSeonJin0504</h2>
          <p id="role">프론트엔드</p>
          <p id="description">
            Mokwon Univ. Computer Engineering 20 <br />
            Web Front-End Developer <br />
          </p>
          <StyledLink
            link="https://gabriel227.tistory.com/"
            text="GitHub Profile"
          />
        </div>
        <div className="card">
          <img src={J_doyoon} alt="profile"></img>
          <h2 className="noto-sans">J_doyoon</h2>
          <p id="role">디자이너</p>
          <p id="description">
            Mokwon Univ. Department Of <br />
            Industrial Design 22 <br />
          </p>
          <StyledLink
            link="https://m.blog.naver.com/jungdoyoon12/"
            text="Naver Blog"
          />
        </div>
      </div>
    </Style>
  );
};

export default Developers;
