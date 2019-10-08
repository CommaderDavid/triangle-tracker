$(document).ready(function() {
  $("form#math").submit(function(e) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    if (side1 === side2 && side1 === side3) {
      var result = "Equilateral"

      $("#tri").empty().append(result);
      $("#hide").show();
    } else if (side1 === side2 || side2 === side3) {
      var result = "Isosceles"

      $("#tri").empty().append(result);
      $("#hide").show();
    } else if (side1 != side2 && side1 != side3 && side2 != side3) {
      var result = "Scalene"

      $("#tri").empty().append(result);
      $("#hide").show();
    } else if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      var result = "NOT a triangle. Seriously, what is this"

      $("#tri").empty().append(result);
      $("#hide").show();
    } else {
      alert("Please input three different numbers!");
    }

    e.preventDefault();
  });
});
