var index = 0;
var indexS =0;
var allA = document.getElementsByTagName("a");
var imgList = document.getElementById("imgList");
var imgArr = document.getElementsByClassName("img");
var part1 = document.getElementById("part1");
var part2 = document.getElementById("part2");
var lunbox = document.getElementById("lunbox-1");



for(let i = 0;i<allA.length;i++){
  allA[i].onclick = function(){
    index = i;
    triggerMove();
  };
};
setA();
autochange();

lunbox.onmouseover = function(){
  clearInterval(timer);
  if(index == 0){
    part2.style.left = "1000px";
    part2.style.transition = "0s";
  };
  if(index == 3){
    part1.style.left = "-1500px";
  };
};
lunbox.onmouseout = function(){
  if(index == 3){
    part1.style.left = "500px";
  };
  autochange();
};



var timer;
function autochange(){
  timer = setInterval(move,2000);
};


function triggerMove(){
  part1.style.left = -500 * index + "px";
  part2.style.left = 1000 -500 * index + "px";
  setA();
  part1.style.transition = "";
  part2.style.transition = "";
}
function move(){
  index++;
  indexS++;
  //part1的运动轨迹
  part1.style.left = -500 * index + "px";
  if(index == 3){
    part1.style.left = "500px";
    part1.style.transition = "0s";
  }else{
    part1.style.transition = "";
  }
  if(index == 4){
    part1.style.left = "";
  };
  //part2的运动轨迹
  if(indexS == 0){
    part2.style.left = "1000px";
  };
  if(index == 0){
    part2.style.left = "500px";
  };
  if(index == 1){
    part2.style.transition = "0s";
  }
  else{
    part2.style.transition = "";
  }
  part2.style.left = 500 - 500*(index - 1) + "px";
  setA();
};



function setA(){
  if(index >= imgArr.length){
    index = 0;
  }
  for(var i = 0;i<allA.length;i++){
   allA[i].style.backgroundColor = "";
   allA[i].style.border = "";
  }
  allA[index].style.backgroundColor = "black";
};