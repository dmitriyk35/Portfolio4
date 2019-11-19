
$(function() {

  $("#move").click(function (){
    $("#divv").animate({
      left: "60px",
      //opacity: "0.5",
      //height: "toggle",//This is allows it to hide then reappear with the same button
      //width:"100px",
      });
    });

  $("#opa").click(function (){
    $("#divv").animate({
      opacity: "0.5",
      });

    });

  $("#cir").click(function (){
    $("#divv").addClass("circle")
      });

  $("#siz").click(function (){
    $("#divv").animate({
      width: "100px",
      });

    });

    $("#stop").click(function (){
      $("#divv").stop({
        });

      });


});

$(document).ready(function(){
    animateDiv();

});

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

$("#cra").click(function animateDiv(){
    var newq = makeNewPosition();
    $("#divv").animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv();
    });

});
