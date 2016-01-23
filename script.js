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
//horizontal condition (O)
    if (($box1.html()=='O' && $box2.html()=='O' && $box3.html()=='O')||($box4.html()=='O' && $box5.html()=='O' && $box6.html()=='O')||($box7.html()=='O' && $box8.html()=='O' && $box9.html()=='O')) {
      winner = 'O';
    }
//vertical condition (O)
    else if (($box1.html()=='O' && $box4.html()=='O' && $box7.html()=='O')||($box2.html()=='O' && $box5.html()=='O' && $box8.html()=='O')||($box3.html()=='O' && $box6.html()=='O' && $box9.html()=='O')){
      winner = 'O';
    }
//diagonal condition (O)
    else if (($box1.html()=='O' && $box5.html()=='O' && $box9.html()=='O')||($box3.html()=='O' && $box5.html()=='O' && $box7.html()=='O')){
      winner = 'O';
//horizontal condition (X)
    } else if (($box1.html()=='X' && $box2.html()=='X' && $box3.html()=='X')||($box4.html()=='X' && $box5.html()=='X' && $box6.html()=='X')||($box7.html()=='X' && $box8.html()=='X' && $box9.html()=='X')) {
      winner = 'X';
    }
//vertical condition (X)
    else if (($box1.html()=='X' && $box4.html()=='X' && $box7.html()=='X')||($box2.html()=='X' && $box5.html()=='X' && $box8.html()=='X')||($box3.html()=='X' && $box6.html()=='X' && $box9.html()=='X')){
      winner = 'X';
    }
//diagonal condition (X)
    else if (($box1.html()=='X' && $box5.html()=='X' && $box9.html()=='X')||($box3.html()=='X' && $box5.html()=='X' && $box7.html()=='X')) {
      winner = 'X';
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