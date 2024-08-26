{
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }
  // 사용자 데이터를 가져오면
  // 전체 사용자 데이터를 users 의 배열에 저장
  type Users = User[];
  
  // fetch 비동기적으로 사용자 데이터를 가져옴
  // async , await 사용 
  // 화살표 함수로 표현 const 함수이름 = async 
  // 일반 함수 표현 async function 함수이름

  // async 도 promise 기반으로 동작하기 때문에 promise로 반환되는 데이터에 제네릭을 사용하여 원하고자하는 데이터 형식으로 반환
  const fetchUsers = async (page: number, limit: number = 3): Promise<Users> => {
    try {

      // page 옵션 : 대량의 데이터를 호출할 때 특정 페이지의 데이터를 가져옴
      // limit 옵션: 데이터를 조회할 대 한 번에 가져올 수 있는 항목의 최대 수를 지정

      // page 옵션을 사용하는 경우 기본적으로 각 페이지에 한개의 데이터가 반환
      // 
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const users: Users = await response.json();

      return users;

    } catch (error) {

      console.error('Fetch error:', error);

      return [];
      
    }
  };
  




  const createUserCard = (user: User): HTMLElement => {
    const userCard = document.createElement('div');
    // html에 이미 해당 div요소가 있는 경우
    // const userCard = document.querySelectore(".user-card");

    userCard.className = 'user-card';
    // className 속성 : HTML의 class 속성과 동일(.클래스명)


    userCard.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
    `;

    // div 태그 내에 h2 , p 태그가 존재
    return userCard;
  };
  
  //# 생성된 카드를 화면에 출력하는 함수

  const displayUsers = (users: Users): void => {
    const userList = document.getElementById('user-list');

    if (userList) {
      userList.innerHTML = '';
      users.forEach(user => {
        // 각 배열을 순회하면서 카드 생성
        const userCard = createUserCard(user);
        // 생성된 요소가 userList(div)내에 첨부
        userList.appendChild(userCard);
      });
    }
  };
  
  // 현재 페이지의 수를 기본값 1페이지로 지정
  let currentPage = 1;

  // # 현재 페이지 정보를 수정하는 함수

  const updatePageInfo = (): void => {
    // 페이지의 정보를 담는 dom요소 (span)
    const pageInfo = document.getElementById('page-info');
    if (pageInfo) {
      pageInfo.textContent = `Page ${currentPage}`;
    }
  };
  

  // # 비동기적으로 데이터를 가져와서 각 페이지별 카드를 생성 + 출력하는 함수
  const loadPage = async (page: number): Promise<void> => {

    // 현재의 페이지값을 전달하여 해당하는 데이터를 비동기적으로 가져옴
    const users = await fetchUsers(page);

    // 현재 페이지에 해당하는 3개의 데이터를 displayUsers 함수에 전달
    displayUsers(users);
    
    // 페이지 번호도 수정
    updatePageInfo();
  };
  
  const addEventListeners = (): void => {
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
  
    if (prevPageButton && nextPageButton) {
      prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          loadPage(currentPage);
        }
      });
  
      nextPageButton.addEventListener('click', () => {
        currentPage++;
        loadPage(currentPage);
      });
    }
  };
  
  const init = (): void => {
    addEventListeners();
    loadPage(currentPage);
  };
  
  document.addEventListener('DOMContentLoaded', init);
  
}