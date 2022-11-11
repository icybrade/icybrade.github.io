let myImage = document.querySelector(".change1");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/miki2.jpg') {
      myImage.setAttribute('src', 'images/miki3.jpg');
    } else {
		if(mySrc === 'images/miki3.jpg'){
		myImage.setAttribute('src', 'images/miki2.jpg');
		}
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = '你好，' + myName;
  }
}

if(localStorage.getItem('name')) {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '你好，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}

function dropDown(){
    window.location.href="https://space.bilibili.com/477317922/";
}
