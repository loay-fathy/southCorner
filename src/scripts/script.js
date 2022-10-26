$(".parent").height($("#name").height())
$(".bg-animate").css("border-radius",$("#name").css("border-radius"))

$(".parent").hover(function(){
  $(".bg-animate").css("margin-left", "110%");
  })

  $(".parent").mouseleave(function(){
    $(".bg-animate").css("margin-left", "0%");
    })
