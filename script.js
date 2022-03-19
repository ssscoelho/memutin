
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 4;

playerLivesCount.textContent = playerLives;

// Grab data
const getData = () => [
    {name: 'cao', imgSrc: 'images/cao.png'},
    {name: 'carro', imgSrc: 'images/carro.png'},
    {name: 'lamas', imgSrc: 'images/lamas.png'},
    {name: 'militar', imgSrc: 'images/militar.png'},
    {name: 'pesca', imgSrc: 'images/pesca.png'},
    {name: 'sol', imgSrc: 'images/sol.png'},
    {name: 'amarelo', imgSrc: 'images/amarelo.png'},
    {name: 'ginasio', imgSrc: 'images/ginasio.png'},
    {name: 'cao', imgSrc: 'images/cao.png'},
    {name: 'carro', imgSrc: 'images/carro.png'},
    {name: 'lamas', imgSrc: 'images/lamas.png'},
    {name: 'militar', imgSrc: 'images/militar.png'},
    {name: 'pesca', imgSrc: 'images/pesca.png'},
    {name: 'sol', imgSrc: 'images/sol.png'},
    {name: 'amarelo', imgSrc: 'images/amarelo.png'},
    {name: 'ginasio', imgSrc: 'images/ginasio.png'},
]

// Randomize
const randomizeData = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() -0.5);
    return cardData;
}

// Create the actual cards
const cardGenerator = () => {
    const cardData = randomizeData();
    
    cardData.forEach((item) => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');

        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        face.src = item.imgSrc;
        card.setAttribute("name", item.name);

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.add('toggleCard');
            checkCards(e);
        })
    });
};

//Check cards
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    let flippedCards = document.querySelectorAll(".flipped");
    let toggleCard = document.querySelectorAll(".toggleCard");

    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            console.log('MATCH!!');
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                card.style.poiterEvents = "none";
            });
            
        } else {
            console.log('FAIL!!');
            
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                setTimeout (() => card.classList.remove('toggleCard'), 1500);
            });
            
            playerLives--;
            playerLivesCount.textContent = playerLives;

            if (playerLives === 0) {
                restart("Boo! Este falhanço será pago com uma estadia na Sibéria")
            };
        };  
    }
    if (toggleCard.length === 16) {
        restart("Parabéns! Mais um passo em frente no teu progesso como oligarca");
    }
} 


// Restart
const restart = (text) => {
    let cardData = randomizeData();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        setTimeout(() => {
            // cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            section.style.pointerEvents = "all";
            }, 1000);
        });
    playerLives = 4
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text, 100));
    }
    



cardGenerator();


// https://www.youtube.com/watch?v=-tlb4tv4mC4
// 45:50