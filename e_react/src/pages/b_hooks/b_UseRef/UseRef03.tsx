import React, { useRef, useState } from "react";

//! 배열 렌더링 (추가, 조회, 수정, 삭제 - crud)
// 해당 과정에서 배열 내부의 각 요소를 구분지을 id값이 필요

// ? 동적 배열 렌더링
// : js 내장 함수 map, filter 사용

//? 장바구니 구현
// 장바구니 타입 정의
interface IItem {
  id: number;
  name: string;
  amount: number;
}
// 기존 장바구니 목록
//# 자식 컴포넌트
// : 장바구니 항목 1개
// 부모로 부터 각 아이템을 인자로 받아 하나의 장바구니 항목을 생성

interface IItemProps {
  item: {
    id: number;
    name: string;
    amount: number;
  };
}
function Item({ item }: IItemProps) {
  return (
    <div>
      <p>
        <b>{item.name}</b>
        amount : {item.amount}
      </p>
    </div>
  );
}
//# 부모 컴포넌트
const initialItems: IItem[] = [
  { id: 1, name: "사과", amount: 2 },
  { id: 2, name: "칸쵸", amount: 3 },
  { id: 3, name: "우유", amount: 1 },
];

//# 각 아이템을 보여주는 컴포넌트
interface ItemComponentProps {
  item: IItem; // id, name, amount
  onRemove: (id: number) => void;
  onUpdate: (id: number, amount: number) => void;
}

const ItemComponent = ({ item, onRemove, onUpdate }: ItemComponentProps) => {
  // 수정, 삭제 기능 포함
  // 컴포넌트 props 타입 정의
  return (
    <div>
      <strong>{item.name}</strong>
      <input
        type="number"
        value={item.amount}
        onChange={(e) => onUpdate(item.id, Number(e.target.value))}
      />
      <button onClick={() => onRemove(item.id)}>삭제</button>
    </div>
  );
};
function UseRef03() {
  const [items, setItems] = useState<IItem[]>(initialItems);

  // useRef 컴포넌트가 리렌더링되더라도 해당 값은 유지
  let exmple = 4;
  exmple = exmple + 1
  console.log(exmple);
  // 일반 변수를 사용하면 랜더링될때 처음부터 다시 읽히기 때문에 다시 원래값 4가 담겨서 변화가 없을것이다.
  const nextId = useRef<number>(4); // 3번까지 정의해놨으니 다음의 값은 4가 될것

  

  // 새로운 아이템을 생성하는 함수
  const handleCreacteItem = (name: string, amount: number) => {

    const newItem = {
      id: nextId.current, // 참조값 current
      name,
      amount,
    };

    setItems([...items, newItem]);
    nextId.current += 1;
  };

  //? id와 수량을 전달받아 데이터를 수정하는 함수
  const handleUdateAmount = (id: number, amount: number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, amount } : item))
    );
  };
  //? id 값을 전달 받아 삭제하고자 하는 요소를 filtering 하는 함수
  const handleRemove = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div>
      {/* <Item item={initialTtems[0]} />
      <Item item={initialTtems[0]} />
      <Item item={initialTtems[0]} /> */}
      {initialItems.map((item) => (
        // map과 filter 사용시 생성되는 컴포넌트 또는 요소에는
        // 각각 구분할 수 있는 key값을 전달
        <Item item={item} key={item.id} />
      ))}
      <hr />
      <button onClick={() => handleCreacteItem("새로운 항목", 1)}>
        새 항목 추가
      </button>
      <>
        {items.map((item) => (
          <div key={item.id}>
            <ItemComponent
              item={item}
              onRemove={handleRemove}
              onUpdate={handleUdateAmount}
            />
          </div>
        ))}
      </>
    </div>
  );
}

export default UseRef03;
