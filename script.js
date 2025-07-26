const mainHeading = document.querySelector('.primary-text')

console.log(mainHeading)

mainHeading.textContent = 'Welcome! This page is now interactive.'

const learnMoreBtn = document.querySelector('.primary-btn')
const cardText = document.querySelector('.card-text')

const originalText = cardText.textContent;

let isTextModified = false;

learnMoreBtn.addEventListener('click', function(){
    if (isTextModified === false){
    cardText.textContent = 'Really? Wanna learn more?';
    cardText.style.color = '#8a4baf'
    isTextModified = true;
    }
    else{
        cardText.textContent = originalText;
        cardText.style.color = '';
        isTextModified = false; 
    }
});

const teamCards = document.querySelectorAll('.team-member-card')

teamCards.forEach(card =>{
    card.addEventListener('click', () => {
        console.log('A card was clicked!');
        card.style.backgroundColor = '#333';
        card.style.border = '1px solid #8a4baf';
        setTimeout(() =>{
            card.style.border = '';
        }, 1000);
    });
});
