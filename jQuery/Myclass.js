var fun = function () {
  console.log("First code");
};
$(document).ready(fun);

$("#btn2").click(function () {
  //btn-click
  console.log("click");
  //   $("#container").hide();
  // });

  // $("#btn3").click(function () {
  //   //btn-click

  //   $("#container").show();
  // });
  $("#container").hide(1000, function () {
    //It will hide or fade slowly
    alert("gone");
  });

  $("#btn3").click(function () {
    //btn-click

    $("#container").show();
  });

  //Now we will use fadeToggle method
  //hide and show in one button
  $("#btn4").click(function () {
    $("#container").fadeToggle();
  });
  $("#btn5").click(function () {
    $("#container").fadeTo(250, 0.5);
    alert("faded");
  });
  //-----------------------------------------------
  // slideDown , //slideUp, //slide Toggle
  $("#btn21").click(function () {
    $("#container").slideUp(1000);
  });
  $("#btn22").click(function () {
    $("#container").slideDown(1000);
  });
  $("#btn23").click(function () {
    $("#container").slideToggle(1000);
  });
  //------------------------------------------------
  //Animate
  $("#btn24").click(function () {
    $("#container").animate(
      { width: "200", height: "100", opacity: "0.5" },
      200,
      function () {}
    );
  });
  //--------------------------------------------------
  //click event on  any input box
  $("#btn9").click(function () {
    // let v = $("#f").val();
    // console.log("value is"+v);
    // console.dir("value"+v);
    $("#f").val("This is done by val function");
  });
});
