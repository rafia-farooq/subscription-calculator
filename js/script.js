// Your JS code here
var subscription = document.querySelector("#subscription");
var duration = document.querySelector("#months");
var selectedSubscription = "basic";
var selectedDuration = 1;
var result = document.querySelector(".result");

subscription.addEventListener("change", function (e) {
  selectedSubscription = e.target.value;
  planCost();
});

// subscription.addEventListener("change", function (e) {
//   if (e.target.value === "basic") {
//     selectedSubscription = 5;
//   } else if (e.target.value === "standard") {
//     selectedSubscription = 7;
//   } else {
//     selectedSubscription = 10;
//   }
// });

duration.addEventListener("change", function (e) {
  selectedDuration = Number(e.target.value);
  planCost();
});

var planCost = function () {
  var monthlyCost = 5;
  if (selectedSubscription === "standard") {
    monthlyCost = 7;
  } else if (selectedSubscription === "premium") {
    monthlyCost = 10;
  }
  var total = monthlyCost * selectedDuration;
  result.innerHTML = `You have chosen a ${selectedDuration} month ${selectedSubscription} plan for $${total}`;
};
