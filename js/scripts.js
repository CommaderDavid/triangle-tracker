// Back end logic
var triTracker = function(side1, side2, side3) {
  if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
    return "NOT a triangle. Seriously, what is this"
  } else if ((side1 === side2 && side1 != side3) || (side2 === side3 && side2 != side1)) {
    return "Isosceles"
  } else if (side1 != side2 && side1 != side3 && side2 != side3) {
    return "Scalene"
  } else if (side1 === side2 && side1 === side3) {
    return "Equilateral"
  }
};

// Front end logic

$(document).ready(function() {
  $("form#math").submit(function(e) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    console.log(side1, side2, side3);
    var result = triTracker(side1, side2, side3);

    $("#tri").empty().append(result);
    $("#hide").show();

    e.preventDefault();
  });
});
