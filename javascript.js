/**
 * Tess Luba - July 2022
 */


var username;
var colour; 
var keepScore = 0;

 window.addEventListener("load", function() {

    start.addEventListener("click", checkUsername);
    rock.addEventListener("click", pickedRock);
    paper.addEventListener("click", pickedPaper);
    scissors.addEventListener("click", pickedScissors);
    help.addEventListener("click", clickedHelp);

/**
 * Checks that the username meets rules (rules: letters only, between 4-8 characters in ascending order, begins with an uppercase)
 * If username meets rules, username will be updated and game will begin
 */
     function checkUsername(){
        username = document.selection.uName.value;
        let len = username.length;
        let x;
        let y;
        let z;
        
        if (len < 4 || len >8){
            y = false;
        }
        
        for (let i = 1; i < len; i++){
            let second = username.charAt(i)
            let first = username.charAt(i-1)

            if (!isNaN(first)){
                z = false;
                break;
            } else if (first.localeCompare(second) === 0) {
                x = true;
            } else if (first.localeCompare(second) !== -1){ 
                x = false;
                break;
            } else {
                x = true;
            }  
        }
        if (x === false) {
            
            document.getElementById("invalid").innerHTML = "Username is not valid.<br>Must have 4-8 ascending letters"
        }
        else if (y === false) {
            document.getElementById("invalid").innerHTML = "Username is not valid. <br>Must be between 4 - 8 characters.";
        }
        else if (z === false) {
            
            document.getElementById("invalid").innerHTML = "Username is not valid.<br>Cannot contain numbers."
        }
        else if (x===true) {
            
            
            username = document.selection.uName.value;

            username = username.charAt(0).toUpperCase() + username.slice(1);

            colour = document.selection.colour.value;
            console.log (colour);

            if (colour === "#000000"){
                document.getElementById("invalid").innerHTML = "Pick a colour other than black"
            }
            else {document.getElementById("score").innerHTML = username + "'s Score is: " + keepScore;
    
            score.style.display="block";
    
            document.body.style.color = colour; 
            document.body.style.backgroundColor = colour;
    
            selections.style.display = "none";
    
            choice.style.display = "inline";
    
            document.getElementById("make").innerHTML = username + ", make your selection:"
        }
    
    
        }
         
    }

/**
 * randomly generates a choice, compares that to user's choice to determine if user wins, loses or ties
 */
    function pickedRock(){
        let x = Math.floor(Math.random() * 4);
        /**
         * 1 is rock
         * 2 is paper
         * 3 is scissors 
         */
        if (x === 1){
            document.getElementById("result").innerHTML = "The computer picked Rock <br> It's a tie! " ;
        }
        else if (x === 2){
            if (keepScore ===0){
                keepScore = 0;
            }
            else {
                keepScore = keepScore - 1;
            }
            document.getElementById("result").innerHTML = "The computer picked Paper <br>  Sorry, you lose." ;
            
        }
        else if (x===3){
            keepScore = keepScore + 1;
            
            document.getElementById("result").innerHTML = "The computer picked Scissors <br> Congratulations, you win! ";
        }
    
        result.style.display = "block";
        document.getElementById("score").innerHTML = username + "'s Score is: " + keepScore;
        score.style.display = "block";

    }
    
    
/**
 * randomly generates a choice, compares that to user's choice to determine if user wins, loses or ties
 */
    function pickedPaper(){
        let x = Math.floor(Math.random() * 4);
        /**
         * 1 is rock
         * 2 is paper
         * 3 is scissors 
         */
        if (x === 1){
            keepScore = keepScore + 1;
            document.getElementById("result").innerHTML = "The computer picked Rock <br> Congratulations, you win! ";
        }
        else if (x === 2){
    
            document.getElementById("result").innerHTML = "The computer picked Paper <br> It's a tie! " ;
            
        }
        else if (x===3){
            if (keepScore ===0){
                keepScore = 0;
            }
            else {
                keepScore = keepScore - 1;
            }
            document.getElementById("result").innerHTML = "The computer picked Scissors <br> Sorry, you lose. ";
        }
    
        result.style.display = "block";
        document.getElementById("score").innerHTML = username + "'s Score is: " + keepScore;
        

    }

/**
 * randomly generates a choice, compares that to user's choice to determine if user wins, loses or ties
 */
    function pickedScissors(){
        let x = Math.floor(Math.random() * 4);
        /**
         * 1 is rock
         * 2 is paper
         * 3 is scissors 
         */
        if (x === 1){
            if (keepScore ===0){
                keepScore = 0;
            }
            else {
                keepScore = keepScore - 1;
            }
            document.getElementById("result").innerHTML = "The computer picked Rock <br> Sorry, you lose. ";
        }
        else if (x === 2){
            keepScore = keepScore + 1;
            document.getElementById("result").innerHTML = "The computer picked Paper <br> Congratulations, you win! ";
            
        }
        else if (x===3){
            document.getElementById("result").innerHTML = "The computer picked Scissors <br> It's a tie! " ;
        }
    
        result.style.display = "block";
        document.getElementById("score").innerHTML = username + "'s Score is: " + keepScore;
    }

/**
 * toggles help which displays rules of the game
 */
    function clickedHelp(){
        var show = document.getElementById("instructions");
        if (show.style.display === "none") {
            show.style.display = "block";
        } else {
            show.style.display = "none";
        }
    }

 });