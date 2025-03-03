function war() 
{
    //Player and Vlad get two dice each.
    var player = Math.ceil(Math.random() * 6);
    var player1 = Math.ceil(Math.random() * 6);
    var vlad = Math.ceil(Math.random() * 6);
    var vlad1 = Math.ceil(Math.random() * 6);

    //Have to add up the dice for both to get a winner
    const psum = player + player1;
    const vsum = vlad + vlad1;

    //images for winning and losing
    var win = "youWin.jpg";
    var loss = "youLost.jpg";
    var draw = "DRAW.jpg";

    //images for Vlad's dice
    var vladOne = "Vlad 1.png";
    var vladTwo = "Vlad 2.png";
    var vladThree = "Vlad 3.png";
    var vladFour = "Vlad 4.png";
    var vladFive = "Vlad 5.png";
    var vladSix = "Vlad 6.png";

    //images for Player's dice
    var playerOne = "Player 1.png";
    var playerTwo = "Player 2.png";
    var playerThree = "Player 3.png";
    var playerFour = "Player 4.png";
    var playerFive = "Player 5.png";
    var playerSix = "Player 6.png";
//we writing conditions now. These if conditions set what images are displayed
if (vlad == 1)
{
    document.getElementById("vladimirImg").src = vladOne;
}
if (vlad == 2)
    {
        document.getElementById("vladimirImg").src = vladTwo;
    }
if (vlad == 3)
    {
        document.getElementById("vladimirImg").src = vladThree;
    }
if (vlad == 4)
    {
        document.getElementById("vladimirImg").src = vladFour;
    }
if (vlad == 5)
    {
        document.getElementById("vladimirImg").src = vladFive;
    }
if (vlad == 6)
    {
        document.getElementById("vladimirImg").src = vladSix;
    }
//this is for Vlad's second dice
if (vlad1 == 1)
{
    document.getElementById("vladimir1Img").src = vladOne;
}
if (vlad1 == 2)
    {
        document.getElementById("vladimir1Img").src = vladTwo;
    }
if (vlad1 == 3)
    {
        document.getElementById("vladimir1Img").src = vladThree;
    }
if (vlad1 == 4)
    {
        document.getElementById("vladimir1Img").src = vladFour;
    }
if (vlad1 == 5)
    {
        document.getElementById("vladimir1Img").src = vladFive;
    }
if (vlad1 == 6)
    {
        document.getElementById("vladimir1Img").src = vladSix;
    }
//Player's first dice
    if (player == 1)
    {
        document.getElementById("playerImg").src = playerOne;
    }
    if (player == 2)
        {
            document.getElementById("playerImg").src = playerTwo;
        }
    if (player == 3)
        {
            document.getElementById("playerImg").src = playerThree;
        }
    if (player == 4)
        {
            document.getElementById("playerImg").src = playerFour;
        }
    if (player == 5)
        {
            document.getElementById("playerImg").src = playerFive;
        }
    if (player == 6)
        {
            document.getElementById("playerImg").src = playerSix;
        }
//Player's second dice
    if (player1 == 1)
    {
        document.getElementById("player1Img").src = playerOne;
    }
    if (player1 == 2)
        {
            document.getElementById("player1Img").src = playerTwo;
        }
    if (player1 == 3)
        {
            document.getElementById("player1Img").src = playerThree;
        }
    if (player1 == 4)
        {
            document.getElementById("player1Img").src = playerFour;
        }
    if (player1 == 5)
        {
            document.getElementById("player1Img").src = playerFive;
        }
    if (player1 == 6)
        {
            document.getElementById("player1Img").src = playerSix;
        }
//sometimes no one wins, so put in a draw statement
if (psum == vsum)
{
    document.getElementById("finalResult").src = draw;
}
//If you win
if (psum > vsum)
{
    document.getElementById("finalResult").src = win;
}
//Better luck next time
if (psum < vsum)
{
    document.getElementById("finalResult").src = loss;
}
}