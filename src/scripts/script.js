$(".parent").height($("#name").height())
$(".bg-animate").css("border-radius",$("#name").css("border-radius"))

$(".parent").hover(function(){
  $(".bg-animate").css("margin-left", "110%");
  })

  $(".parent").mouseleave(function(){
    $(".bg-animate").css("margin-left", "0%");
    })



$(".white-box").hide();
$(".nav-layer").hide();

$(".exit").click(function(){
  $(".white-box").hide();
  $(".nav-layer").hide();
})

$(".links-btn").click(function(){
  $(".white-box").show();
  $(".nav-layer").show();
})