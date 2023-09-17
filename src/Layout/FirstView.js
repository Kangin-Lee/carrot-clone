import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay,faApple } from '@fortawesome/free-brands-svg-icons'

const FirstView = () => {
  return (
    <div className="firstView-area">
      <Container>
        <div className="firstView">
          <div className="firstView-text">
            <h1>당신 근처의 <br/>지역 생활 커뮤니티</h1>
            <p>
              동네라서 가능한 모든 것<br />
              당근에서 가까운 이웃과 함께해요.
            </p>
            <div className="firstView-btns">
              <div><FontAwesomeIcon icon={faGooglePlay} className="brands"/>Google Play</div>
              <div><FontAwesomeIcon icon={faApple} className="brands app-store" />App Store</div>
            </div>
          </div>
          <div className="firstView-img">
            <img width={650} src="images/rabbit.webp" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FirstView;
