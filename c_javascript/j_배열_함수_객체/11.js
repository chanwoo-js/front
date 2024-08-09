class Library {
  constructor() {
    this.books = []; // 도서관의 도서 목록을 저장하는 배열
  }

  // Book 클래스 정의 (Library 클래스 내에 중첩)
  static Book = class {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.isAvailable = true;
    }

    // 책 대여 메서드
    rent() {
      if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`${this.title} has been rented`);
      } else {
        console.log(`${this.title} is currently not available`);
      }
    }

    // 책 반납 메서드
    returnBook() {
      this.isAvailable = true;
      console.log(`${this.title} has been returned`);
    }
  };

  // 책의 추가
  addBook(title, author) {
    const newBook = new Library.Book(this.books.length + 1, title, author);
    this.books.push(newBook);
    console.log(`${title}책이 도서관에 추가되었습니다. (저자: ${author})`);
  }

  // 책 목록 출력
  displayBooks() {
    console.log('=== Library ===');
    this.books.forEach(book => {
      console.log(
        `${book.id}: ${book.title} by ${book.author} - ${book.isAvailable ? '대여 가능' : '대여됨'}`
      );
    });
  }

  // 특정 id 책 대여
  rentBook(id) {
    const book = this.books.find(book => book.id === id);

    if (book) {
      book.rent();
    } else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }

  // 특정 id 책 반납
  returnBook(id) {
    const book = this.books.find(book => book.id === id);

    if (book) {
      book.returnBook();
    } else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }
}

//# 프로젝트 실행
const busanLibrary = new Library();

busanLibrary.addBook('SQLD 공부', '이승아');
busanLibrary.addBook('JS 공부', '이도경');
busanLibrary.addBook('IoT 공부', '이지훈');
busanLibrary.addBook('Java 공부', '이지희');

busanLibrary.displayBooks();

busanLibrary.rentBook(1);

const seoulLibrary = new Library(); // 서울 도서관 객체 생성
seoulLibrary.addBook('바나나먹기', '이승아');
seoulLibrary.addBook('짜장면 맛있게 끓이기', '이승아');

seoulLibrary.displayBooks();
