/*
모듈 export, import
 모듈은 js es6의 미리 작성된 스크립트 파일이다
 변수, 함수, 클래스 등이 정의되어 있음

모듈을 내보내는 방식
 여러 값을 보낼 때 - named export
 단일 값을 보낼 때 - default export
*/

export const name = "이이이";
export const age = 20;

export const info = () => {
    console.log(`이름 : ${name}, 나이 : ${age}`);
}


let addr = "서울";
let myInfo = () => {
    console.log(addr);
}

export {addr, myInfo};