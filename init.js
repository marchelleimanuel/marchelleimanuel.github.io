// declaring element
const username = document.getElementById('username');
const registerForm = document.getElementById('registerForm');
const logoutForm = document.getElementById('logoutForm');
const startSection = document.getElementById('start');
const homeSection = document.getElementById('home');
const rewardSection = document.getElementById('reward');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const title = document.getElementById('title');
const subTitle = document.querySelector('.sub-title');
const balance = document.querySelector('.balance');
const spin = document.querySelector('.startButton');
const dolar = document.querySelector('.dolar');
const judul = document.querySelector('.game-name');
const anonymous = document.querySelector('.anonymous');
const tips = document.querySelector('.tips');
const contentWrapper = document.getElementById('imgReward');
const claimButton = document.getElementById('claim');
const spanBaru = document.getElementById('spanbaru');
const rangeReward = document.querySelector('.rangereward');
const loseAlert = document.querySelector('.lose-alert');
// tombol plus
const plus = document.querySelector('.plus');
const spinNumber = document.getElementById('spin-number');

loseAlert.style.display = 'none';
box4.style.display = 'none';
box5.style.display = 'none';
spanBaru.innerHTML = '';
spanBaru.style.color = '#FFD700';
tips.style.display = 'none';
balance.style.display = 'none';

const randomWord = 
[
    'You lose...',
    'You lose again...',
    'Nice Try!',
    'Hahahahahahahaha....',
    'You almost there...',
    'Again...?',
    'Bad luck...',
    'Poor you... :P',
    'Don\'t give up..',
    'Hehehehehehehehe....',
    'You lose...',
    'You lose again...',
    'Nice Try!',
    'Hahahahahahahaha....',
    'You almost there...',
    'Again...?',
    'Bad luck...',
    'Poor you... :P',
    'Don\'t give up..',
    'Hehehehehehehehe....',
    
]

function usernameKosong() {
    if ( username.value == '' ) {
        title.innerHTML = 'Welcome, anonymous';
        document.title = 'anonymous - Lucky Spin';
    }
}

function landPage() {
    if ( sessionStorage.getItem('token') == null ) {
        startSection.style.display = 'none';
        rewardSection.style.display = 'none';
    } else {
        startSection.style.display = 'block';
    }
}

landPage();

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function toInt(str) {
    return parseInt(str);
}

const player = new Player();
let default_option = ['😍', '😂', '🤕'];
box1.textContent = default_option[0];
box2.textContent = default_option[1];
box3.textContent = default_option[2];

let default_option1 = ['🤪', '😏', '😚', '😛'];
box1.textContent = default_option1[0];
box2.textContent = default_option1[1];
box3.textContent = default_option1[2];
box4.textContent = default_option1[3]; 

let default_option2 = ['😤', '😵‍💫', '🤭', '🥴', '🤯'];
box1.textContent = default_option2[0];
box2.textContent = default_option2[1];
box3.textContent = default_option2[2];
box4.textContent = default_option2[3]; 
box5.textContent = default_option2[4]; 

function reward() {
    const rewardRoll = setInterval(function() {
        if ( spinNumber.innerHTML == 5 ) {
            spanBaru.innerHTML = randomNumber(40, 101);
        } else if ( spinNumber.innerHTML == 10 ) {
            spanBaru.innerHTML = randomNumber(500, 1001);
        } else if ( spinNumber.innerHTML == 25 ) {
            spanBaru.innerHTML = randomNumber(10000, 100001);
        }
    },10);

    setTimeout(function() {
        clearInterval(rewardRoll);
    }, 2000);
}

function dice() {
    let gacha = [];
    for( let i = 0; i < default_option.length; i++ ) {
        const roll = default_option[~~(Math.random() * default_option.length)];
        gacha.push(roll);
    }
    return gacha;
}

function dice1() {
    let gacha = [];
    for( let i = 0; i < default_option1.length; i++ ) {
        const roll = default_option1[~~(Math.random() * default_option1.length)];
        gacha.push(roll);
    }
    return gacha;
}

function dice2() {
    let gacha = [];
    for( let i = 0; i < default_option2.length; i++ ) {
        const roll = default_option2[~~(Math.random() * default_option2.length)];
        gacha.push(roll);
    }
    return gacha;
}

function winner() {
    if ( box1.textContent == box2.textContent && box1.textContent == box3.textContent && spinNumber.innerHTML == 5 ) {
        rewardSection.style.display = 'block';
        reward();
        location.href = '#reward';
        setTimeout(function() {
            homeSection.style.display = 'none';
            startSection.style.display = 'none';
            document.body.append(balance);
        },600)
    } else {
        loseAlert.style.display = 'block';
        loseAlert.innerHTML = randomWord[randomNumber(0, 20)];
    }

}

function winner1() {
    if ( box1.textContent == box2.textContent && box1.textContent == box3.textContent && spinNumber.innerHTML == 10 && box1.textContent == box4.textContent  ) {
    rewardSection.style.display = 'block';
    reward();
    location.href = '#reward';
    setTimeout(function() {
        homeSection.style.display = 'none';
        startSection.style.display = 'none';
        document.body.append(balance);
    },600)
    } else {
        loseAlert.style.display = 'block';
        loseAlert.innerHTML = randomWord[randomNumber(0, 20)];
    };
}

function winner2() {
    if ( box1.textContent == box2.textContent && box1.textContent == box3.textContent && spinNumber.innerHTML == 25 && box1.textContent == box4.textContent && box1.textContent == box5.textContent  ) {
    rewardSection.style.display = 'block';
    reward();
    location.href = '#reward';
    setTimeout(function() {
        homeSection.style.display = 'none';
        startSection.style.display = 'none';
        document.body.append(balance);
    },600)
    } else {
        loseAlert.style.display = 'block';
        loseAlert.innerHTML = randomWord[randomNumber(0, 20)];
    };;
}

onload = function () {
    const token = sessionStorage.getItem('token');
    if ( token && token != null || token == '') {
        if ( sessionStorage.getItem('token') == '' ) {
            sessionStorage.setItem('token', 'anonymous')
        }
        registerForm.style.display = 'none';
        logoutForm.style.display = 'block';
        rewardSection.style.display = 'none';
        title.innerHTML = `Welcome, ${sessionStorage.getItem('token')}`;
        document.title = sessionStorage.getItem('token') + ' - Lucky Spin';
        subTitle.style.display = 'none';
        balance.style.display = 'block';
        judul.style.display = 'none';
        anonymous.style.display = 'none';
        dolar.innerHTML = sessionStorage.getItem('saldo');
        if ( sessionStorage.getItem('saldo') == 0 || this.sessionStorage.getItem('saldo') < 5 ) {
            tips.style.display = 'block';
        }

        box1.textContent = default_option[0];
        box2.textContent = default_option[1];
        box3.textContent = default_option[2];
    } else {
        registerForm.style.display = 'block';
        logoutForm.style.display = 'none';
    }
    setTimeout(function() {
        location.href= '#start';
    }, 1500)
    

}

function register() {
    player.username = username.value;
    player.register;
    title.innerHTML = `Welcome, ${username.value}`;
    document.title = sessionStorage.getItem('token') + ' - Lucky Spin';
    landPage();
    subTitle.style.display = 'none';
    balance.style.display = 'block';
    judul.style.display = 'none';
    usernameKosong();
    anonymous.style.display = 'none';
    sessionStorage.setItem('saldo', 100);

    box1.textContent = default_option[0];
    box2.textContent = default_option[1];
    box3.textContent = default_option[2];
}

function logout() {
    player.logout;
}

spin.addEventListener('click', function() {
    loseAlert.style.display = 'none';
    let tes = dolar.innerHTML;
    if ( spinNumber.innerHTML == 5 ) {
        dolar.innerHTML = toInt(tes) - 5;
    } else if ( spinNumber.innerHTML == 10 ) {
        dolar.innerHTML = toInt(tes) - 10;
    } else if ( spinNumber.innerHTML == 25 ) {
        dolar.innerHTML = toInt(tes) - 25;
    }


    if ( dolar.innerHTML < 0) {
        if ( sessionStorage.getItem('saldo') < 5 ) {
            dolar.innerHTML = sessionStorage.getItem('saldo');
        } else if ( spinNumber.innerHTML == 10 && sessionStorage.getItem('saldo') < 10  ) {
            dolar.innerHTML = sessionStorage.getItem('saldo');
        } else if ( sessionStorage.getItem('saldo') < 25 && spinNumber.innerHTML == 25 ) {
            dolar.innerHTML = sessionStorage.getItem('saldo'); 
        }
        loseAlert.style.display = 'block';
        loseAlert.innerHTML = 'Goodgame, sir.'
        tips.style.display = 'block';
        alert('You don\'t have enough balance ');    
    } else if ( spinNumber.innerHTML == 10 ) {
        const rolling = setInterval(function() {
            const result = dice1();
            box1.textContent = result[0]
            box2.textContent = result[1]
            box3.textContent = result[2]
            box4.textContent = result[3]
        }, 50)

        setTimeout (function() {
            clearInterval(rolling);
            winner1()
        }, 1000) // spin
    } else if ( spinNumber.innerHTML == 25 ) {
        const rolling = setInterval(function() {
            const result = dice2();
            box1.textContent = result[0]
            box2.textContent = result[1]
            box3.textContent = result[2]
            box4.textContent = result[3]
            box5.textContent = result[4]
        }, 50)

        setTimeout (function() {
            clearInterval(rolling);
            winner2()
        }, 1000) // spin
    } else {
        const rolling = setInterval(function() {
            const result = dice();
            box1.textContent = result[0]
            box2.textContent = result[1]
            box3.textContent = result[2]
        }, 50)

        setTimeout (function() {
            clearInterval(rolling);
            winner()
        }, 1000) // spin
    }
    
    sessionStorage.setItem('saldo', dolar.innerHTML);
});

claimButton.addEventListener('click', function() {
    let dolar1 = dolar.innerHTML;
    let spanTes = spanBaru.innerHTML;
    dolar.innerHTML = toInt(dolar1) + toInt(spanTes);
    sessionStorage.setItem('saldo', dolar.innerHTML);

    setTimeout(function() {
        startSection.style.display = 'block';
        homeSection.style.display = 'block';
        location.href = '#start';
        rewardSection.style.display = 'none';
    },100);
    
});

plus.addEventListener('click', function() {
    let spinNum = spinNumber.innerHTML;
    if ( spinNumber.innerHTML == 5 ) {
        spinNumber.innerHTML = toInt(spinNum) + 5;
        box4.style.display = 'block';
        box5.style.display = 'none';
        rangeReward.innerHTML = '*Reward: $500 ~ $1000'
        box1.textContent = default_option1[0];
        box2.textContent = default_option1[1];
        box3.textContent = default_option1[2];
        box4.textContent = default_option1[3];
        loseAlert.style.display = 'none';
    } else if (spinNumber.innerHTML == 10 ) {
        spinNumber.innerHTML = toInt(spinNum) + 15;
        box4.style.display = 'block';
        box5.style.display = 'block';
        rangeReward.innerHTML = '*Reward: $10000 ~ $100000';
        box1.textContent = default_option2[0];
        box2.textContent = default_option2[1];
        box3.textContent = default_option2[2];
        box4.textContent = default_option2[3]; 
        box5.textContent = default_option2[4];
        loseAlert.style.display = 'none';
    } else {
        spinNumber.innerHTML = 5;
        box4.style.display = 'none';
        box5.style.display = 'none';
        rangeReward.innerHTML = '*Reward: $40 ~ $100'
        box1.textContent = default_option[0];
        box2.textContent = default_option[1];
        box3.textContent = default_option[2];
        loseAlert.style.display = 'none';
    }
});

