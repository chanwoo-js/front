let click_button = document.querySelector(".click_button");
let text_change_p = document.querySelector(".text_change_p");

click_button.addEventListener("click",() => {
  text_change_p.textContent = "버튼이 클릭되었습니다!"
  console.log("Button clicked!")
})