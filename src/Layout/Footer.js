import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlay,
  faApple,
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faAngleDown } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const footerMenu1 = [
    "중고거래",
    "동네가게",
    "당근알바",
    "부동산 직거래",
    "중고차 직거래",
  ];
  const footerMenu2 = ["당근비즈니스", "채팅하기"];
  const footerMenu3 = ["자주 묻는 질문", "회사 소개", "인재 채용"];
  const question = ["제휴 문의", "광고 문의", "PR 문의", "IR 문의"];
  const lastMenu = [
    "이용약관",
    "개인정보처리방침",
    "위치기반서비스 이용약관",
    "이용자보호 비전과 계획",
    "청소년보호정책",
  ];
  return (
    <Container>
      <div className="footer-area">
        <div className="footer-top">
          <div className="footer-menus">
            <div>
              {footerMenu1.map((menu) => (
                <li>
                  <a href="#">{menu}</a>
                </li>
              ))}
            </div>
            <div>
              {footerMenu2.map((menu) => (
                <li>
                  <a href="#">{menu}</a>
                </li>
              ))}
            </div>
            <div>
              {footerMenu3.map((menu) => (
                <li>
                  <a href="#">{menu}</a>
                </li>
              ))}
            </div>
          </div>
          <div className="carrot-downloads">
            <p>당근 앱 다운로드</p>
            <div className="download-btns">
              <span className="goTo-download">
                <FontAwesomeIcon icon={faApple} className="brands app-store" />
                App Store
              </span>
              <span className="goTo-download">
                <FontAwesomeIcon icon={faGooglePlay} className="brands" />
                Google Play
              </span>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------- */}
        <div className="footer-bottom">
          <div className="footer-bottom-top">
            <div>
              <div>
                <b>대표</b> 김용현, 황도연 | <b>사업자번호</b> 375-87-00088
              </div>
              <div>
                <b>직업정보제공사업 신고번호</b> J1200020200016
              </div>
              <div>
                <b>주소</b> 서울특별시 구로구 디지털로 30길 28, 609호
                (당근서비스)
              </div>
              <div>
                <b>전화</b> 1544-9796 | <b>고객문의</b> cs@daangnservice.com
              </div>
            </div>
            <div className="footer-bottom-brands">
              <a href="https://www.facebook.com/daangn">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/daangnmarket/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.youtube.com/channel/UC8tsBsQBuF7QybxgLmStihA">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <span>
                <FontAwesomeIcon icon={faGlobe} /> 한국{" "}
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </div>
          </div>
          <div className="footer-question">
            {question.map((menu) => (
              <a href="#">
                <b>{menu}</b>
              </a>
            ))}
          </div>
          <div className="footer-lastMenu">
            {lastMenu.map((menu) => (
              <a href="#">
                <b>{menu}</b>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
