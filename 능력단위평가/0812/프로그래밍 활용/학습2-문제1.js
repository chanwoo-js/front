
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email
  }
  printInfo() {
    console.log(`${this.name} 님의 정보 : 나이 : ${this.age}, 이메일 : ${this.email}`);
  }
}

class Product {
  constructor(product_name, price) {
    this.name = product_name;
    this.price = price;
  }
  
  printProduct() {
    console.log(`${this.name} 의 제품 가격 : ${this.price}`);
  }
}
class Order {
  constructor ( user, product, quantity) {
    this.user = user;
    this.product = product;
    this.quantity = quantity;
  }
  printOrderSummary() {
    console.log(this.user);
    console.log(this.product);

    console.log(`${this.user.name}님이 주문하신 상품은 ${this.product.name}이며, 총 ${this.quantity}개를 주문하여 금액은 ${this.product.price * this.quantity}원 입니다.`);
  }

  
}
// 유저 생성
let user1 = new User("찬우", 10, "email");
// 출력
// 찬우 님의 정보 : 나이 : 10, 이메일 : email
user1.printInfo();

// 제품 생성
let product1 = new Product("마쉬멜로", 1000);
// 제품 출력
product1.printProduct();
// 마쉬멜로 의 제품 가격 : 1000
console.log(product1.price);
// 1000

// 주문 내역
// 유저1의 총 주문 금액

let order1 = new Order(user1, product1, 5);
order1.printOrderSummary();
// 10000





