//This is the start of the function referenced in the HTML page I wrote
function authenticate(){
//These variables that follow just set the values we need for the HTML page
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var identNumb = document.getElementById("idNumb").value;
    var passworD = document.getElementById("actPhrase").value;
//This variable adds the names together to check their length
    var fullName = firstName + " " + lastName;
//This first if statement just makes sure that the names are over one character (since we used a space) and tells the user if not
    if (fullName.length <= 1)
    {
        document.getElementById("loginStatus").innerHTML = "Nice name, try typing something this time.";
    }
//This else if statement checks to make sure the Identification Number is 5 digits and tells the user if not
    else if ((identNumb<9999) || (identNumb>99999))
    {
    document.getElementById("loginStatus").innerHTML = "Your ID number is 5 digits, how did you mess that up so badly?";
    }
//This else if statment is for the password. It also tells the user if they got it wrong.
    else if (passworD != "Iamtheone")
    {
        document.getElementById("loginStatus").innerHTML = "Do you even have more than one password? I can't help you any more than I already am.";
    }
//This last else statment just tells the user that they got all right, provided all of the other statments are not true. 
    else 
    {
        document.getElementById("loginStatus").innerHTML = "Congrats, you finally logged in. Took you long enough.";
    }
}