import React from 'react'

// 함수형 컴포넌트 snippets : rfc, rfce

// # 화살표 함수를 사용한 자식 컴포넌트
// - 부모로 부터 사용자에 대한 데이터를 props로 전달받아 ui 반환
// >> props 는 반드시 객체의 형태

type User = {
  name : string;
  age : number;
  email : string;
}
// props 데이터는 변수, 객체든 상관 없이 무조건 {} 객체 내에 작성
// : 객체의 데이터를 한 번에 받아오기 위해서는 본인의 {} 객체 틀 외에 또 다른 {} 객체 틀로 묶어야 함

// const UserCard = ({name, age, email} : User) => {
// 각각의 속성명을 변수로 사용 (구조분해할당)
// {name, age, email} = {"이승아", 50, "qwer123"}}
//}
type UserCardProps = { user : User };


const UserCard = ({user} : UserCardProps) => {
  const {name, age, email} = user;
  return (
    // 단일 루트 노드 : jsx 는 반드시 하나의 루트 태그를 가져야 함!
    <div>
      <h4>{user.name}</h4>
      <h4>{user.age}</h4>
      <h4>{user.email}</h4>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>{email}</h4>
    </div>
  )
}

//* 다른 컴포넌트를 감싸는 wrapper 컴포넌트
// >> props 데이터로 다른 컴포넌트를 전달받음
// children 자식 요소 컴포넌트
type ChildrenType = {
  // ReactNode : react 내에 html 요소들 + 사용자 정의 컴포넌트들의 타입
  children : React.ReactNode;
}


export const Wrapper = ({children} : ChildrenType)=> {
  return (
    <div style={{border: "2px solid black", padding: "16px"}}>
      {/* props로 전달받은 react 의 html 요소들 + 사용자 정의 컴포넌트 ui */}
      {/* ui 가 태그 내에 담길 경우 반드시 열리고 닫히는 태그 사이에 내용으로 첨부 */}
      

      {children}
    </div>
  )
}

//# 부모 컴포넌트
function Props02() {
  const userData = {
    name : "이승아",
    age : 50,
    email : "qwer123"
  }

  return (
    <Wrapper>
      {/* 부모데이터를 자식에게 전달할때 객체는 만들어진것을 그대로 넘겨줘도되고 
      정해진 타입대로 {}객체를 만들어서 하나하나 값을 적어서 넣어도되고 ~ */}
      <UserCard user={userData}/>;
      <UserCard user={{name:"이도경", age: 50, email:"qer123"}}/>;
    </Wrapper>
  )
}

export default Props02