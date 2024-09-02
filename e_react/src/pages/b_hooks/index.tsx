import React from "react";
import UseState01 from "./a_UseState/UseState01";
import UseState02 from "./a_UseState/UseState02";
import UseState03 from "./a_UseState/UseState03";
import UseState04 from "./a_UseState/UseState04";
import UseState05 from "./a_UseState/UseState05";
import UseState06 from "./a_UseState/UseState06";
import UseRef01 from "./b_UseRef/UseRef01";
import UseRef02 from "./b_UseRef/UseRef02";
import Practice02 from "./a_UseState/Practice02";
import UseRef03 from "./b_UseRef/UseRef03";
import UseRef03re from "./b_UseRef/UseRef03re";
import UseEffect01 from "./c_UseEffect/UseEffect01";
import UseEffect02 from "./c_UseEffect/UseEffect02";
import Practice01 from "./c_UseEffect/Practice01";
import TodoAppLocalStorage from "./z_Todo/TodoAppLocalStorage";
import UseMemo01 from "./d_UseMemo/UseMemo01";
import UseMemo02 from "./d_UseMemo/UseMemo02";
import UseCallback01 from "./d_UseMemo/UseCallback01";
import UseReducer01 from "./e_UseReducer/UseReducer01";
import Custom01 from "./f_CustomHook/Custom01";
import Custom02 from "./f_CustomHook/Custom02";
import { useLocation } from "react-router-dom";

// 전체 파일 정렬
// ctrl + a: 전체 선택
// ctrl + k + f: 포맷터 사용
function Index() {
  const location = useLocation();
  const {username} = location.state || {};
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        리액트 Hooks
      </h1>
      {username}
      <h2>커스텀 훅</h2>
      <Custom01/>
      <Custom02/>

      <h2>리액트 Hooks - useState</h2>
      <UseState01 />
      <UseState02 />
      <UseState03 />
      <UseState04 />
      <UseState05 />
      <UseState06 />
      <hr />
      <Practice02/>
      <hr />
      <UseRef01/>
      <UseRef02/>
      <UseRef03/>
      <UseRef03re/>
      <h2>UseEffect</h2>
      <UseEffect01/>
      <UseEffect02/>
      <TodoAppLocalStorage/>
      {/* <Practice01/> */}

      <h2>UseMemo</h2>
      <UseMemo01/>
      <UseMemo02/>

      <UseCallback01/>

      <h2>리액트 Hook - useReducer</h2>
      <UseReducer01/>
    </div>
  );
}

export default Index;