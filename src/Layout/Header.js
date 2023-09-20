import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {
  const navMenu = [
    "중고거래",
    "동네가게",
    "알바",
    "부동산 직거래",
    "중고차 직거래",
  ];
  return (
    <div className="nav-area">
      <Container>
        <div className="header-area">
          <div className="carrot_logo">
            <img width={66} src="images/carrot.svg" />
          </div>
          <ul className="menu">
            {navMenu.map((menu) => (
              <li>
                <a href="#">{menu}</a>
              </li>
            ))}
          </ul>
          <div className="search-area">
            <input type="text" placeholder="물품이나 동네를 검색해보세요" />
            <button>채팅하기</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
