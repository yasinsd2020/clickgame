let h1 = document.querySelector('h3');
let h2= document.querySelector('h2');
let btn1=document.querySelector('#btn1');
let btn2=document.querySelector('#btn2');

btn1.addEventListener('click',function(){
  h1.style.display='none';
  h2.style.display='block';
  button.style.display='none';
  
});

var cont=document.querySelector(".contain");

var button = document.querySelector("#btn2");

button.addEventListener("click", function() {
  var changeTop = (Math.random() * ($(".contain").height() - $("button").height()));
  var changeLeft = (Math.random() * ($(".contain").width() - $("button").width()));
  $("button").css("margin-top", changeTop + "px");
  $("button").css("margin-left", changeLeft + "px");
});

