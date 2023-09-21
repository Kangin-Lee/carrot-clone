import React from "react";
import { Container } from "react-bootstrap";

const FifthView = () => {
  return (
    <div className="fifthView-area">
      <Container>
        <div className="fifthView">
          <div>
            <div className="secondView-text1">동네가게</div>
            <div className="secondView-text2">
              내 근처에서 찾는
              <br />
              동네 가게
            </div>
            <div className="secondView-text3">
              이웃들의 추천 후기를 확인하고
              <br />
              동네 곳곳의 가게들을 찾을 수 있어요.
            </div>
            <div className="secondView-btns">
              <div style={{ display: "inline" }}>
                <a href="#">당근 동네가게 보기</a>
              </div>
            </div>
          </div>
          <div>
            <img width={655} src="images/fifthViewImg.webp" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FifthView;
