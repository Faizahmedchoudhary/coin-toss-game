heads = document.getElementById('heads');
tails = document.getElementById('tails');

headscount = 0;
tailscount = 0;
userscore = 0;
computercore = 0;



heads.addEventListener("click", () => {
    document.querySelector(".player-selected").innerText = 'Heads';
    document.querySelector(".computer-selected").innerText = 'Tails';
    gettinganswer('Heads');
    document.querySelector('.coin-img').classList.remove('flip-coin');
    winner();
});

tails.addEventListener("click", () => {
    document.querySelector(".player-selected").innerText = 'Tails';
    document.querySelector(".computer-selected").innerText = 'Heads';
    gettinganswer('Tails');
    document.querySelector('.coin-img').classList.remove('flip-coin');
    document.querySelector('.coin-img').classList.add('flip-coin');
    winner();
});


gettinganswer = (value) => {
    var coin = ['Heads', 'Tails', 'Heads', 'Tails', 'Heads', 'Tails', 'Heads', 'Tails'];
    const random = Math.floor(Math.random() * coin.length);
    answer = coin[random]

    if (answer == value) {
        document.querySelector('.player-score').innerText = userscore++;
    }

    else {
        document.querySelector('.computer-score').innerText = computercore++;
    }
}

// declaring the winner




winner = () => {
    userwinner = document.querySelector('.player-score').innerText;
    computerwinner = document.querySelector('.computer-score').innerText;
    
    if (userwinner == '15' ) {
        document.querySelector('.winner-content').innerHTML = "<h3>The Winner is: User </h3> <h1>Hurra</h1>"
        winner = document.querySelector('.winner').classList.remove('hide-popup');
        winner = document.querySelector('.winner').add.remove('show-popup');
        
    }
    
    else if( computerwinner == '15'){
        winner2 = document.querySelector('.winner').classList.remove('hide-popup');
        winner = document.querySelector('.winner').add.remove('show-popup');
        document.querySelector('.winner-content').innerHTML = "<h3>The Winner is: Computer </h3> <h1>Sorry!!</h1>"
    }
    console.log(userwinner)
    console.log(computerwinner)
    
}

// hide the popup

document.querySelector('.close').addEventListener("click" , () => {
           document.querySelector('.winner').classList.add('hide-popup');
})
