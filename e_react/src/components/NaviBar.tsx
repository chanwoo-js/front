import React from "react";
import { NavLink } from "react-router-dom";
import Style01 from "../pages/g_Style/Style01";

// Link vs navlink
// >> a태그와 유사하게 동작
// >> 페이지를 새로고침하지 않고 spa의 다른 경로로 이동
// >> 해당 링크 클릭 시 어느 정로로 이동할 것인지 지정한다.

// 1) Link
// : 가장 기본적인 페이지 전환 컴포넌트 (a태그 기능을 그대로 사용한다)

// 2) navlink
// link 와 유사하지만, 현재 활성화된 페이지 경로에 대한 추가적인 스타일 또는 클래스명 적용 가능

function NaviBar() {
  const links = ["/", "basic", "Hooks", "routerComponent", "parent","routerHook", "axios", "globalState", "style"];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        margin: "10px",
        padding: "10px 20px",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      {links.map((link, i) => (
        <NavLink 
          to={link} 
          key={link}
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "white" : "black",
            backgroundColor: isActive ? "red" : "lightgray",
            padding: "10px 20px",
            borderRadius: "5px"
          })}
        >
          {link === "/" ? "HOME" : `${links[i]}`}
        </NavLink>
      ))}
    </div>
  );
}

export default NaviBar;