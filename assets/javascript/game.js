$(document).ready(function () {

  var wins = 0;
  var losses = 0;
  var userTotal = 0;


  var randomNumber = Math.floor(Math.random() * 102 + 19);
  var yellowNumber = Math.floor(Math.random() * 12 + 1);
  var greenNumber = Math.floor(Math.random() * 12 + 1);
  var redNumber = Math.floor(Math.random() * 12 + 1);
  var blueNumber = Math.floor(Math.random() * 12 + 1);

  $("#computerScore").html(randomNumber);

  function determineWinner() {
    if (userTotal == randomNumber) {
      wins++;

      $("#userWins").html("Wins: " + wins);
      reset();
    } else if (userTotal > randomNumber) {
      losses++;

      $("#userLosses").html("Losses: " + losses);
      reset();
    }
  }

  function reset() {
    randomNumber = Math.floor(Math.random() * 102 + 19);
    $("#computerScore").html(randomNumber);
    yellowNumber = Math.floor(Math.random() * 12 + 1);
    greenNumber = Math.floor(Math.random() * 12 + 1);
    redNumber = Math.floor(Math.random() * 12 + 1);
    blueNumber = Math.floor(Math.random() * 12 + 1);
    userTotal = 0;
    $("#userPoints").text(userTotal);
  }


  $("#yellow").on("click", function () {
    userTotal = userTotal + yellowNumber;
    $("#userPoints").html(userTotal);
    determineWinner();
  });

  $("#green").on("click", function () {
    userTotal = userTotal + greenNumber;
    $("#userPoints").html(userTotal);
    determineWinner();
  });

  $("#red").on("click", function () {
    userTotal = userTotal + redNumber;
    $("#userPoints").html(userTotal);
    determineWinner();
  });

  $("#blue").on("click", function () {
    userTotal = userTotal + blueNumber;
    $("#userPoints").html(userTotal);
    determineWinner();
  });
});
