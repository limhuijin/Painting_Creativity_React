import styled from "styled-components";
import PropTypes from "prop-types";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 4rem;
  text-align: center;

  .team-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  #team-logo {
    width: min(20vw, 200px);
  }

  .team-container h1 {
    font-size: 1.5em;
  }

  .team-container p {
    font-size: 1em;
    color: #888888;
  }

  .developer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  // 세로모드 모바일
  @media (max-width: 991px) and (orientation: portrait) {
    .developer-container {
      flex-direction: column;
      gap: 2rem;
    }

    .developer-container > div {
      width: 80%;
    }
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #888888;
  border-radius: 10px;
  padding: 1em;
  width: 20%;
  gap: 0.5em;

  img {
    width: 50%;
    border-radius: 50%;
  }

  p {
    color: #888888;
  }

  .social-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5em;
  }

  a img {
    width: 15%;
  }
`;

const Card = (props) => {
  return (
    <StyledCard>
      <img src={props.image} alt="profile image" />
      <p>{props.position}</p>
      <h1>{props.name}</h1>
      <p>{props.introduction}</p>
      <div className="social-container">
        <a href={props.github} target="_blank">
          <img src="../src/assets/github.svg" alt="github" />
        </a>
      </div>
    </StyledCard>
  );
};
Card.propTypes = {
  image: PropTypes.string,
  position: PropTypes.string,
  name: PropTypes.string,
  introduction: PropTypes.string,
  github: PropTypes.string,
};

const Developers = () => {
  return (
    <Style>
      <div className="team-container">
        <img src="../src/assets/sample-logo.png" alt="logo" id="team-logo" />
        <h1>Team Name</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          repellendus laudantium optio incidunt. Magni eos, ullam corporis minus
          quibusdam soluta sint ratione iusto. Officia, ab eveniet sequi rem
          pariatur soluta.
        </p>
      </div>
      <div className="developer-container">
        <Card
          image="../src/assets/sample-profile.png"
          position="Frontend Developer"
          name="John Doe"
          introduction="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat repellendus laudantium optio incidunt."
          github=""
        />
        <Card
          image="../src/assets/sample-profile.png"
          position="Frontend Developer"
          name="John Doe"
          introduction="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat repellendus laudantium optio incidunt."
          github=""
        />
        <Card
          image="../src/assets/sample-profile.png"
          position="Frontend Developer"
          name="John Doe"
          introduction="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat repellendus laudantium optio incidunt."
          github=""
        />
      </div>
    </Style>
  );
};

export default Developers;
