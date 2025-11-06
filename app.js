const kermitButton = document.getElementById('kermit-button');
const animalButton = document.getElementById('animal-button');
const fozzieButton = document.getElementById('fozzie-button');
const beakerButton = document.getElementById('beaker-button');
const chefButton = document.getElementById('chef-button');
const pepeButton = document.getElementById('pepe-button');

const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

const muppetImage = document.getElementById('muppet-image');

const muppets = ['kermit', 'animal', 'fozzie', 'beaker', 'chef', 'pepe'];

function findNextMuppet(currentMuppet, direction) {
    const currentIndex = muppets.indexOf(currentMuppet);
    let newIndex;
    if (direction === 'right') {
        newIndex = (currentIndex + 1) % muppets.length;
    } else if (direction === 'left') {
        newIndex = (currentIndex - 1 + muppets.length) % muppets.length;
    }
    return muppets[newIndex];
}

leftButton.addEventListener('click', () => {
    const currentMuppet = getElementById('muppet-image').alt.toLowerCase()
    const nextMuppet = findNextMuppet(currentMuppet, 'left');
    muppetImage.src = `./assets/${nextMuppet}.jpg`;
    muppetImage.alt = nextMuppet.charAt(0).toUpperCase() + nextMuppet.slice(1);
});

rightButton.addEventListener('click', () => {
    const currentMuppet = getElementById('muppet-image').alt.toLowerCase()
    const nextMuppet = findNextMuppet(currentMuppet, 'right');
    muppetImage.src = `./assets/${nextMuppet}.jpg`;
    muppetImage.alt = nextMuppet.charAt(0).toUpperCase() + nextMuppet.slice(1);
});

kermitButton.addEventListener('click', () => {
    muppetImage.src = './assets/kermit.jpg';
    muppetImage.alt = 'Kermit';
});

animalButton.addEventListener('click', () => {
    muppetImage.src = './assets/animal.jpg';
    muppetImage.alt = 'Animal';
});

fozzieButton.addEventListener('click', () => {
    muppetImage.src = './assets/fozzie.jpg';
    muppetImage.alt = 'Fozzie';
});

beakerButton.addEventListener('click', () => {
    muppetImage.src = './assets/beaker.jpg';
    muppetImage.alt = 'Beaker';
});

chefButton.addEventListener('click', () => {
    muppetImage.src = './assets/chef.jpg';
    muppetImage.alt = 'Chef';
});

pepeButton.addEventListener('click', () => {
    muppetImage.src = './assets/pepe.jpg';
    muppetImage.alt = 'Pepe';
}); 

