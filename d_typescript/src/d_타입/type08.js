// export const tmp = "";
{
    // * 타입 단언 tpye Assertion
    // 개발자가 타입스크립트 컴파일러보다 해당 값의 타입의 주도권을 가지는 방법
    var str = "123";
    // str = 123; 
    // 컴파일러에게 " 이데이터의 타입을 내가 지정한 타입으로 간주해라! 라는 지시
    // 타입 단언 방법
    // as 키워드를 사용
    var someValue = "this is a string";
    //someValue = true 
    // someValue = true; 해당 변수에 할당은 가능하지만 길이를 구하는 로직에 이용 할수 없다.
    var length_1 = someValue.length; // length 속성의 경우 문자열, 배열에서 주로 사용
    //# 타입 단어을 활용하는 예시
    // : 웹 개발에서 dom 요소를 조작할 떄, 특정 dom요소를 구체적인 html lement 타입으로 단언
    // ts가 자동으로 해당 dom 요소의 정확한 타입을 추론할 수 x
    // 1) HTMLButtonElement 단언
    // 웹 문서에 이벤트를 등록하여, DOM 구조
    document.addEventListener("DOMContentLoaded", function () {
        // 버튼 요소 가져오기
        var button = document.getElementById("mybutton");
        if (button) {
            button.disabled = true;
        }
    });
}
