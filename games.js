document.addEventListener('DOMContentLoaded', () => {
    const gamesList = document.getElementById('gamesList');

    const games = [
        {
            title: 'CodeCombat',
            image: 'https://codecombat.com/images/pages/home/character_goliath.png',
            description: 'تعلم البرمجة من خلال لعبة مغامرات',
            url: 'https://codecombat.com/'
        },
        {
            title: 'Flexbox Froggy',
            image: 'https://flexboxfroggy.com/images/frog-green.svg',
            description: 'تعلم CSS Flexbox بطريقة ممتعة',
            url: 'https://flexboxfroggy.com/'
        },
        {
            title: 'CSS Grid Garden',
            image: 'https://cssgridgarden.com/images/carrots.svg',
            description: 'تعلم CSS Grid من خلال لعبة الحديقة',
            url: 'https://cssgridgarden.com/'
        }
    ];

    games.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.className = 'game-card';
        gameElement.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <button class="details-btn" onclick="window.open('${game.url}', '_blank')">العب الآن</button>
        `;
        gamesList.appendChild(gameElement);
    });
});