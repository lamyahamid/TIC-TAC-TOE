
var numX=0;
var numO=0;
var gameBoard = {}
var numberOfxAndO=0;
var winner=false;


var player=0;

        $(".box").on("click", function (event){
           if ($(event.target).html() == "") {
            if(player%2==0){
                gameBoard[event.target.id] = 'X'
                $(event.target).html("<p>X</p>");
                player++;
                numberOfxAndO++;
                
            }
            else {
                gameBoard[event.target.id] = 'O'
                
                $(event.target).html("<p>O</p>");
                player++; 
                numberOfxAndO++;
            
            } }
var one = gameBoard.one;
var two = gameBoard.two;
var three = gameBoard.three;
var four = gameBoard.four;
var five = gameBoard.five;
var six = gameBoard.six;
var seven = gameBoard.seven;
var eight = gameBoard.eight;
var nine = gameBoard.nine;


if ((one==="X"&&two==="X"&&three==="X")|| (four==="X"&&five==="X"&&six==="X")||(seven==="X"&&eight==="X"&&nine==="X")||(one==="X"&&four==="X"&&seven==="X")||(two==="X"&&five==="X"&&eight==="X")||(three==="X"&&six==="X"&&nine==="X")||(one==="X"&&five==="X"&&nine==="X") ||(three==="X"&&five==="X"&&seven==="X")){
    swal({
        title: "EXCELLENT X IS WIN !",
        icon: "success",
      });
    const ani =  document.querySelector('.left h1')
    ani.classList.add('animated', 'rubberBand','slow')
    numX++;
    $('#result1 p').text(numX)
    winner=true;


    
    
}
else if ((one==="O"&&two==="O"&&three==="O")|| (four==="O"&&five==="O"&&six==="O")||(seven==="O"&&eight==="O"&&nine==="O")||(one==="O"&&four==="O"&&seven==="O")||(two==="O"&&five==="O"&&eight==="O")||(three==="O"&&six==="O"&&nine==="O")||(one==="O"&&five==="O"&&nine==="O") ||(three==="O"&&five==="O"&&seven==="O")){
    swal({
        title: "EXCELLENT O IS WIN !",
        icon: "success",
        
      });
    const ani =  document.querySelector('.right h1')
    ani.classList.add('animated', 'rubberBand','slow')
    numO++;
    $('#result2 p').text(numO)
    winner=true;
}
if (numberOfxAndO==9 && winner!=true){
   swal({
      title: "DRAW",
    });
  }
        });
       
        
    
$("#img").on("click", function (event){
    location.reload();
     });


         $("#button").on("click", function (event){
            $('#one').text("")
            gameBoard.one="";
            numberOfxAndO=0;
            winner=false;
         });
         $("#button").on("click", function (event){
            $('#two').text("")
            gameBoard.two="";
         });
         $("#button").on("click", function (event){
            $('#three').text("")
            gameBoard.three="";
         });
         $("#button").on("click", function (event){
            $('#four').text("")
            gameBoard.four="";
         });
         $("#button").on("click", function (event){
            $('#five').text("")
            gameBoard.five="";
         });
         $("#button").on("click", function (event){
            $('#six').text("")
            gameBoard.six="";
         });
         $("#button").on("click", function (event){
            $('#seven').text("")
            gameBoard.seven="";
         });
         $("#button").on("click", function (event){
            $('#eight').text("")
            gameBoard.eight="";
         });
         $("#button").on("click", function (event){
            $('#nine').text("")
            gameBoard.nine="";
         });
