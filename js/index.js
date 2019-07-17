window.onload = function () {

    const canvas = new Canvas();
    const gb = document.getElementById('game-board');
    const gbc = gb.getContext('2d');

    const character = new Character(0, 0, 80, 120, 10);
    character.setSprites('edgar-sprites');
    character.draw(gbc);

    document.addEventListener('keydown', (event) => move(event, gb, gbc, character));
};

function move(keyboardEvent, gb, gbc, character) {
    console.log(keyboardEvent.key);

    switch (keyboardEvent.key) {
        case 'w':
        case 'ArrowUp':
            character.moveUp(gbc);
            console.log('Move Up');
            break;
        case 'a':
        case 'ArrowLeft':
            character.moveLeft(gbc);
            console.log('Move Left');
            break;
        case 's':
        case 'ArrowDown':
            character.moveDown(gbc);
            console.log('Move Down');
            break;
        case 'd':
        case 'ArrowRight':
            character.moveRight(gbc);
            console.log('Move Right');
            break;
    }

}