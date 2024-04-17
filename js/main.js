
//carousel
$(document).ready(function(){

  $('.itemslider').carousel({ interval: 1000 });
  
  $('.carousel-showmanymoveone .item').each(function(){
  var itemToClone = $(this);
  
  for (var i=1;i<6;i++) {
  itemToClone = itemToClone.next();
  
  if (!itemToClone.length) {
  itemToClone = $(this).siblings(':first');
  }
  
  itemToClone.children(':first-child').clone()
  .addClass("cloneditem-"+(i))
  .appendTo($(this));
  }
  });
  });


  

// slow scroll

$("a[href='#Trending']").click(function(){
  $("html,body").animate({scrollTop:530},2000)
})


$("a[href='#Explore']").click(function(){
  $("html,body").animate({scrollTop:1000},2000)
})


$("a[href='#home']").click(function(){
  $("html,body").animate({scrollTop:0},2000)
})






// amount movie file

$("a[href='#main']").click(function(){
  $("html,body").animate({scrollTop:0},2000)
})

$("a[href='#pop']").click(function(){
  $("html,body").animate({scrollTop:530},2000)
})


$("a[href='#show']").click(function(){
  $("html,body").animate({scrollTop:1000},2000)
})




//video play  jumanji   


let playButton = document.querySelector(".animate");
let mp4 = document.querySelector(".video-container");
let myvideo = document.querySelector("#mymovie");
let closebtn = document.querySelector(".close-video");


playButton.onclick = () =>{
  mp4.classList.add("show-video")
  //auto play when click on button
  myvideo.play();
};
   closebtn.onclick = () =>{
   mp4.classList.remove("show-video");
   myvideo=pause();
 };




 



//slideDown nav


 

//first movie 



