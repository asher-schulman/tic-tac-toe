if (typeof $ == 'undefined') {
    console.log('oops! I still have to link my jQuery properly!');
} else {
    console.log('I did it! I linked jQuery and this js file properly!')
};
//create global turn counter
let globalTurn = 0;
//create EMPTY arrays to push into []; (an array of all choices made);
const $globalChoices = [];
const $playerChoices = [];
const $computerChoices = [];
//start jQuery stuff
$(() => {
    //create function for player choice
    function playerChoice() {
        console.log('~~PLAYER TURN!~~');
        //create variable to represent the choice scoped only for this "turn"
        const $choice = Number(($(this).prop('id')));
        //add this choice to the global/player's/computer's array
        $globalChoices.push($choice);
        $playerChoices.push($choice);
        console.log(`adding ${$choice} to global choices array`);
        //hide the button
        $(this).hide();
        //add an "X" (player) or "O" (computer) to the box as html text of the parent (a div in this case)
        $(this).parent().text('X');
        //check winner function
        checkWinner();
        if (checkWinner() ==  false) {
            //add 1 to global turn counter
            globalTurn += 1;
            console.log(`player turn complete global turn counter is now ${globalTurn}`);
            //computer turn function
            computerChoice();
        }
    } //END playerChoice()
    //create functions needed for computer turn
    function pickChoice() {
        //pick a random number between 1 and 9 and create a $choice variable
        const $choice = Math.floor(Math.random() * 9) + 1;
        console.log(`random pick generated... trying box ${$choice}`);
        return $choice;
    } //END pickChoice()
    //create function for computer choice, which is called at the end of the playerChoice() function
    function computerChoice() {
        console.log('~~PC TURN!~~');
        //if it's the computers turn
        if (globalTurn = 1) {
            //initialize pc choice
            let $choice = 0;
            //assign random 1-9 to pc choice
            $choice = pickChoice();
            //if the pc choice IS FOUND also in the $globalChoices array i.e. returns a value of NOT -1
            if ($globalChoices.indexOf($choice) != -1) {
                console.log('having some conflicts... reset...');
                //retry the computer choice funtion, which will try a differen random number
                computerChoice();
                //otherwise, if the pc choice is not found in our globalChoices array...
            } else if ($globalChoices.indexOf($choice) == -1) {
                //add this choice to the global/player's/computer's array
                $globalChoices.push($choice);
                $computerChoices.push($choice);
                console.log(`adding ${$choice} to global choices array`);
                //hide the button
                $(`#${$choice}`).hide();
                //add an "X" (player) or "O" (computer) to the box as html text of the parent of this element (a div in this case)
                $(`#${$choice}`).parent().text('O');
            }
        }
        //add 1 to global turn counter
        globalTurn -= 1;
        console.log(`pc turn complete global turn counter is now ${globalTurn}`);
        checkWinner();
    } //END computerChoice()
//create function for win conditions, console.loging when there's a win and refreshing afterwards
function checkWinner() {
    //assign variables to all the box divs by id
    const $box1 = $('#box1').text();
    const $box2 = $('#box2').text();
    const $box3 = $('#box3').text();
    const $box4 = $('#box4').text();
    const $box5 = $('#box5').text();
    const $box6 = $('#box6').text();
    const $box7 = $('#box7').text();
    const $box8 = $('#box8').text();
    const $box9 = $('#box9').text();
    //if statements for 8 win cons
    //toprow
    if ($box1 == 'X' && ($box1 == $box2 && $box2 == $box3)) {
        console.log('top row win');
        alert('winner!');
        return(true);
    } else if ($box1 == '0' && ($box1 == $box2 && $box2 == $box3)) {
        console.log('top row win');
        alert('winner!');
        return(true);
    }
    //midrow
    if ($box4 == 'X' && ($box4 == $box5 && $box5 == $box6)) {
        console.log('mid row win');
        alert('winner!');
        return;
    } else if ($box4 == 'O' && ($box4 == $box5 && $box5 == $box6)) {
        console.log('mid row win');
        alert('winner!');
        return;
    }
    //botrow
    if ($box7 == 'X' && ($box7 == $box8 && $box8 == $box9)) {
        console.log('bot row win');
        alert('winner!');
        return;
    } else if ($box7 == 'O' && ($box7 == $box8 && $box8 == $box9)) {
        console.log('bot row win');
        alert('winner!');
        return;
    }
    //leftcolumn
    if ($box1 == 'X' && ($box1 == $box4 && $box4 == $box7)) {
        console.log('leftcolumn win');
        alert('winner!');
        return;
    } else if ($box1 == 'O' && ($box1 == $box4 && $box4 == $box7)) {
        console.log('leftcolumn win');
        alert('winner!');
        return;
    }
    //midcolumn
    if ($box2 == 'X' && ($box2 == $box5 && $box5 == $box8)) {
        console.log('midcolumn win');
        alert('winner!');
        return;
    } else if ($box2 == 'O' && ($box2 == $box5 && $box5 == $box8)) {
        console.log('midcolumn win');
        alert('winner!');
        return;
    }
    //rightcolumn
    if ($box3 == 'X' && ($box3 == $box6 && $box6 == $box9)) {
        console.log('rightcolumn win');
        alert('winner!');
        return;
    } else if ($box3 == 'O' && ($box3 == $box6 && $box6 == $box9)) {
        console.log('rightcolumn win');
        alert('winner!');
        return;
    }
    //topleftdiag
    if ($box1 == 'X' && ($box1 == $box5 && $box5 == $box9)) {
        console.log('topleftdiag win');
        alert('winner!');
        return;
    } else if ($box1 == 'O' && ($box1 == $box5 && $box5 == $box9)) {
        console.log('topleftdiag win');
        alert('winner!');
        return;
    } 
    //toprightdiag
    if ($box3 == 'X' && ($box3 == $box5 && $box5 == $box7)) {
        console.log('toprightdiag win');
        alert('winner!');
        return;
    } else if ($box3 == 'O' && ($box3 == $box5 && $box5 == $box7)) {
        console.log('toprightdiag win');
        alert('winner!');
        return;
    }
    //tie?
    if ($globalChoices.length == 9) {
        console.log('tie here!');
        alert('it is a tie!');
        globalTurn = 2;
        return;
    } else {
        return(false);
    }
}//END checkWinner()
    //create variable for ALL buttons
    const $button = $('.button');
    //on any button click, run playerChoice() which is basically the game
    //playerturn -> checkwinner -> pc turn -> check winner
    $button.on('click', playerChoice);
});