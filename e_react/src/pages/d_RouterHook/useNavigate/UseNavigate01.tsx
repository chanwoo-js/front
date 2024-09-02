import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//! useNavigate()
// : React Router에서 제공하는 Hook
// >> 사용자를 다른 페이지로 이동시킬 때 사용

//? Link 컴포넌트와의 차이
// >> 이벤트 핸들러나 비동기 작업 내에서의 특정 경로 이동이 가능

export default function UseNavigate01() {
  //# useNavigate() 사용방법
  const navigate = useNavigate();
  // >> '네비게이트'라는 이름으로 호출
  // >> 원하는 경로를 문자열 인수로 전달하여 이동


  //? useNavigate 훅의 옵션
  // - state 옵션
  // : 네이게이션 (경로) 과 함께 상태 전달이 가능
  // >> 해당 상태는 useLocation 을 통해 접근 가능

  //? 조건부 네비게이션
  // >> 조건에 따른 페이지 전환


  const goToParentPage = () => {
    console.log("버튼이 클릭됨");
    
    //? r경로 지정시 / 유무의 차이
    // 1) / 작성
    // : 메인경로 + /경로
    // >> localhost:3000/parent

    // 2) / 미작성
    // : 현재 경로 + /경로
    // >> localhost:3000/routerHook/parent
    
    navigate("/parent", {state : {userId : 12345}});
  };

  const goToHomePage = () => {
    navigate('/');
  }

  const goToPrevPage = () => {
    navigate(-1);
  }
  const goTOaaa = () => {
    console.log("이승아 버튼이 클릭됨");
    navigate("/hooks", {state : {username : "이승아"}});
  }

  // 임의의 버튼 클릭시 b_hooks의 index.tsx 로 이동
  // >> 이동시 {username : 이승아"} 전달 해주세요
  // b_hooks 의 index.tsx 에서 전달된 값을 받아
  // 화면에 이승아를 출력해주세요

  // 인증이 필요한 페이지로 이동하려고 하는 경우
  // >> 마이페이지, 리뷰 작성, 주문 조회 등
  // + 로그인 되어있지 않으면 로그인 페이지로 이동


  const isAuthenticated = false; // 인증


  const handleSignUp = () => {
    // 로그인 안했을때 마이페이지 못들어가게함
    
    // 인증된 사용자만 홈화면으로 이동가능
    if (isAuthenticated) {
      navigate("/");
    }
  }

  // 인증 값이 변하거나 navigate의 값이 바뀔때마다 리랜더링 시킴
  useEffect(() => {
    if(!isAuthenticated){
      navigate("/login");
    }
  },[isAuthenticated, navigate])

  return (
    <div>
      <p>UseNavigate01 페이지입니다</p>
      <button onClick={goToParentPage}>parent 페이지로 이동합니다</button>
      <button onClick={goToHomePage}>Home 페이지로 이동합니다</button>
      <button onClick={goToPrevPage}>이전 페이지로 이동합니다</button>
      <button onClick={goTOaaa}>이승아 버튼</button>
      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
}