class ShoppingCart {
  // 제품의 이름, 재고, 가격
  constructor(product_name, product_stock, product_price) {
    this.name = product_name;
    this.stock = product_stock;
    this.price = product_price;
    this.cart = [];
    this.stopSell = false;
  }
  // 상품 재고 확인
  printProduct() {
    if (this.stopSell === true) {
      console.log("현재 판매가 중지된 상품입니다.");
    } else {
      console.log(`${this.name} 상품 가격 : ${this.price}, 남은 재고량 : ${this.stock}`);
    }
  }
  // 쇼핑카트에 담기
  putInCart(product_quantity) {
       // 판매가 중지된 상품 상태
    if (this.isAvailable === true) {
      console.log("현재 판매가 중지된 상품입니다.");
    } else if (this.stock === 0) {
      // 재고가 없는 상태
      console.log(`${this.name} 상품은 현재 재고가 없습니다.`);
    } else if ((this.stock - product_quantity) < 0 ) {
      // 재고보다 담는 수량이 많은 상태
      console.log(`${this.name} 상품은 현재 ${this.stock}개 남았습니다. ${this.stock}개 이하로 구입해주세요`);
    } else{
      // 재고가 있으면 카트에 넣기
      this.cart.push({
        product_name : this.name,
        product_quantity : product_quantity,
        product_price : this.price,
      });
      this.stock -= product_quantity;
      console.log(`${this.name} 상품 ${product_quantity}개를 쇼핑카트에 넣었습니다.해당 상품의 총 가격은 ${this.price * product_quantity}원 입니다.`);
    }
  }
  // 쇼핑카트에서 원하는 수량만큼 빼기
  takeOutCart(count) {
    let cartFilter = this.cart.filter((item, i) => {
      if (item.name == this.name) {
        this.cart[i].product_quantity -= count;
        this.cart.push(cartFilter);
      }
      item.name !== this.name;
      this.stock += count;
      console.log(`${this.name} 상품의 수량이 변경되었습니다. 상품의 남은 재고량은 ${this.stock}개 입니다`);
    });
    // this.cart[0].product_quantity -= count;
  
  }
 
}
const shoppingCart1 = new ShoppingCart("마쉬멜로", 10, 20000);
// 해당 상품에 대한 이름, 재고량, 가격을 정해놓고

shoppingCart1.putInCart(5); 
// 쇼핑카트에 넣기
// 카트에 담을 수량만 적어주기

shoppingCart1.takeOutCart(4);
// 쇼핑카트에서 빼기

// 빼고 난 후 재고확인
shoppingCart1.printProduct();

