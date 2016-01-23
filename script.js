$(document).ready(function(){
  // Set box variables
  var $box1 = $('td').eq(0);
  var $box2 = $('td').eq(1);
  var $box3 = $('td').eq(2);
  var $box4 = $('td').eq(3);
  var $box5 = $('td').eq(4);
  var $box6 = $('td').eq(5);
  var $box7 = $('td').eq(6);
  var $box8 = $('td').eq(7);
  var $box9 = $('td').eq(8);
  var player = 'X';
  var symbol;

  function winCondition(){
// function that determines win condition
    var winner;
    var symbol;
//horizontal condition
    if (($box1.html()==symbol && $box2.html()==symbol && $box3.html()==symbol)||($box4.html()==symbol && $box5.html()==symbol && $box6.html()==symbol)||($box7.html()==symbol && $box8.html()==symbol && $box9.html()==symbol)) {
      winner = symbol;
    }
//vertical condition
    else if (($box1.html()==symbol && $box4.html()==symbol && $box7.html()==symbol)||($box2.html()==symbol && $box5.html()==symbol && $box8.html()==symbol)||($box3.html()==symbol && $box6.html()==symbol && $box9.html()==symbol)){
      winner = symbol;
    }
//diagonal condition
    else if (($box1.html()==symbol && $box5.html()==symbol && $box9.html()==symbol)||($box3.html()==symbol && $box5.html()==symbol && $box7.html()==symbol)){
      winner = symbol;
    } else {
      winner = 'nobody'
    }
     return winner;
  }


  function checkForWins(){
    console.log(winCondition());
    if (winCondition()=='X'){
      alert('X wins!');
      resetBoard();
    } else if (winCondition()=='O'){
      alert('O wins!');
      resetBoard();
    }
  }

  function setInput(){
      $(this).removeClass();
      $(this).html(player).addClass(player);
      if (player == 'X'){
        player = 'O';
        $('h2').html('It is O\'s turn');
        winCondition();
        checkForWins();
      } else if (player == 'O'){
        player = 'X';
        $('h2').html('It is X\'s turn');
        winCondition();
        checkForWins();
    }
  }
  //starts with X, then switches to O


  function resetBoard(){
    $box1.html('').removeClass();
    $box2.html('').removeClass();
    $box3.html('').removeClass();
    $box4.html('').removeClass();
    $box5.html('').removeClass();
    $box6.html('').removeClass();
    $box7.html('').removeClass();
    $box8.html('').removeClass();
    $box9.html('').removeClass();
  };

  function resetClicked(){
    $('#reset').on("click", resetBoard);
  };

  function boxClicked(){
    $('td').on("click", setInput);
  };



resetClicked();
boxClicked();
});