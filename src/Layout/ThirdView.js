import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCircleQuestion,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

const ThirdView = () => {
  const featuresData = [
    {
      icon: faUsers,
      title: "동네모임",
      description: "근처 이웃들과 동네 이야기를 해보세요.",
    },
    {
      icon: faCircleQuestion,
      title: "동네질문",
      description: "궁금한 게 있을 땐 이웃에 물어보세요.",
    },
    {
      icon: faBagShopping,
      title: "동네분실센터",
      description: "무언가를 잃어버렸다면 글을 올려보세요.",
    },
  ];
  return (
    <div className="third-area">
      <Container>
        <div className="secondView">
          <div>
            <div className="secondView-text1">동네생활</div>
            <div className="secondView-text2">
              이웃만 아는
              <br />
              동네 정보와 이야기
            </div>
            <div className="secondView-text3">
              우리동네의 다양한 정보와 이야기를
              <br />
              공감과 댓글로 나누어요.
            </div>

            <div className="home-story-list">
              {featuresData.map((feature, index) => (
                <div key={index} className="home-story-div">
                  <div className="home-story-list-logo">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <div className="home-story-list-title">
                    <b>{feature.title}</b>
                  </div>
                  <div className="home-story-list-description">
                    {feature.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img width={655} src="images/thirdViewImg.webp" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ThirdView;
