import React, { useState } from 'react'

//! userState 를 사용한 다양한 타입 상태 관리
// 숫자, 문자, 논리, 객체, 배열

interface IUser {
  id : number;
  name : string;
}

function UseState05() {
    // {/* 숫자형 : 카운터 증가 버튼 */}
  const [count, setCount] = useState<number>(0);
  
    // {/* 무자열 : 사용자 이름 입력 필드 */}
  const [name, setName] = useState<string>('');

    // {/* 논리형 : 토글 버튼 */}    
  const [isVisiable, setIsVisiable] = useState<boolean>(false);

    // {/* 객체 : 사용자 정보 수정 입력 필드 */}
  const [user, setUser] = useState<IUser>({
    id : 0,
    name : "",
  });

  //  {/* 배열 : 배열 요소 추가 */}
  const [items, setItems] = useState<string[]>([]);

  const handleCount = () => {
    setCount(value => value + 1)
  }

  const handleUserChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {name, value} = e.target;
    setUser({
      ...user,
    [name] : value
    })
  }

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  }
  
  // const handleInputOnchange = (e:) => {
  // }
  return (
    <div style={{margin : "20px" , padding  : "20px" , border : "1px solid blue"}}>
      <h5>여러 타입의 상태 관리</h5>
      {/* 숫자형 : 카운터 증가 버튼 */}
      <p>{count}</p>
      <button onClick={handleCount}>버튼을 누르면 1증가</button>

      {/* 무자열 : 사용자 이름 입력 필드 */}
      <p>name : {name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      {/* 논리형 : 토글 버튼 */}
      <p>visiable : {isVisiable ? "yes" : "no"}</p>
      <button onClick={() => setIsVisiable(!isVisiable)}>토글 버튼</button>

      {/* 객체 :  사용자 정보 수정 입력 필드 */}
      {/* 객체의 속성 데이터는 html 영역 내에 출력 가능하지만 객체 구조 자체는 출력 불가함 */}
      <p>user : {user.id}, {user.name}</p>
      {/* user : 0, */}
      <p>user2 : {JSON.stringify(user)}</p> 
      {/* user2 : {"id":0,"name":""} */}

      <input type="text" name='name' value={user.name} placeholder='사용자 이름' onChange={handleUserChange} />
      <input type="number" name='id' value={user.id} placeholder='사용자 아이디' onChange={handleUserChange}/>

      {/* 배열 : 배열 요소 추가 */}
      <p>items : {items}</p>
      <button onClick={addItem}>아이템 추가</button>
    </div>
  )
}

export default UseState05