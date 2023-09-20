import React from "react";
import { Container } from "react-bootstrap";

const FourthView = () => {
  return (
    <div className="fourthView-area">
      <Container>
        <div className="secondView">
          <div>
            <img width={655} src="images/fourthViewImg.webp" />
          </div>
          <div>
            <div className="secondView-text1">알바</div>
            <div className="secondView-text2">
              걸어서 10분!
              <br />
              동네 알바 구하기
            </div>
            <div className="secondView-text3">
              당근하듯 쉽고, 편하게
              <br />
              당근 알바로 동네 알바를 쉽게 구할 수 있어요.
            </div>
            <div className="secondView-btns">
              <div style={{ display: "inline" }}>
                <a href="#">내근처 알바 보기</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FourthView;
