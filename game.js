function game(){
    let pScore = 0;
    let cScore = 0;

    //Start the Game
    function startGame() {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', function(){
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //play Match
    function playMatch(){
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const computerOptions = ['rock', 'paper', 'scissors'];
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });


        // Computer options
        options.forEach(option=>{
            option.addEventListener('click', function(){
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * computerOptions.length);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() =>{
                    // call compareHands function
                    compareHands(this.textContent, computerChoice);
                    
                    
                        //update images
                    playerHand.src = `${this.textContent}.png`;
                    computerHand.src = `${computerChoice}.png`;

                    }, 2000);


                //animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
    };

    function updateScore() {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    function compareHands(playerChoice, computerChoice) {
        //update the text
        const winner = document.querySelector('.winner')
        
        // the Draw casee
        if(playerChoice === computerChoice) {
            winner.textContent = 'DRAW!';
            return;
        }
        // Check the rock choice
        else if(playerChoice ==='rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        // Check the paper choice
        else if(playerChoice ==='paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        // Check the scissors choice
        else if(playerChoice ==='scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }


    // call all the inner functions
    startGame();
    playMatch();
};

game();