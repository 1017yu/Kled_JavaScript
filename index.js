// id로 태그 선택하기
const myNumberTag = document.getElementById('myNumber');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const btn = document.querySelector('#myBtn');
const myTag = document.querySelector('#list-1');
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');



// class로 태그 선택하기
const mytags = document.getElementsByClassName('color-btn'); 

let myNumber = +myNumberTag.textContent;

decreaseBtn.onclick = function() {
  myNumber--;
  myNumberTag.textContent = myNumber;
};

increaseBtn.onclick = function() {
  myNumber++;
  myNumberTag.textContent = myNumber;
};

const colorBtns = document.getElementsByClassName('color-btn');

for (let btn of colorBtns) {
  btn.onclick = function() {
    myNumberTag.style.color = btn.dataset.color;
  };
}

btn.onclick = function () {
  alert('hi!');
}

// innerHTML: 요소 안의 HTML을 문자열로 리턴, HTML 자체를 수정할 때 자주 사용
console.log(myTag.innerHTML);

// outerHTML: 해당 요소를 포함한 전체 HTML을 리턴
console.log(myTag.outerHTML);

// textContent: 요소 안에서 HTML을 제외한 텍스트를 리턴, 특수문자도 텍스트 처리
console.log(myTag.textContent);

// -----------------------------------------------------
// 1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');

// 2. 요소 노드 꾸미기
first.innerHTML = '처음';

// 3. 요소 노드 추가하기: NODE.prepend, append, after, before
tomorrow.prepend(first);
tomorrow.before('목록');
today.before('목록');

const item = tomorrow.children[0];
// Node.classList.toggle('class') 기존 class가 없으면 추가, 있으면 제거
item.classList.toggle('done');