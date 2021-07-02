function getStrength(int) {
    if (int <= 7) {
        return './assets/llama.svg';
    } else if (int <= 14) {
        return './assets/tiger.svg';
    } else {
        return './assets/bear.svg';
    }
}

function getSpeed(int) {
    if (int <= 7) {
        return './assets/llama.svg';
    } else if (int <= 14) {
        return './assets/cow.svg';
    } else {
        return './assets/tiger.svg';
    }
}

function getIntelligence(int) {
    if (int <= 7) {
        return './assets/llama.svg';
    } else if (int <= 14) {
        return './assets/rat.svg';
    } else {
        return './assets/elephant.svg';
    }
}

function getEmpathy(int) {
    if (int <= 7) {
        return './assets/llama.svg';
    } else if (int <= 14) {
        return './assets/penguin.svg';
    } else {
        return './assets/cow.svg';
    }
}

function getLuck(int) {
    if (int <= 7) {
        return './assets/llama.svg';
    } else if (int <= 14) {
        return './assets/wolf.svg';
    } else {
        return './assets/rat.svg';
    }
}

export function getImage(number, attribute) {
    if (attribute === 'strength') {
        return getStrength(number);
    } else if (attribute === 'speed') {
        return getSpeed(number);
    } else if (attribute === 'intelligence') {
        return getIntelligence(number);
    } else if (attribute === 'empathy') {
        return getEmpathy(number);
    } else if (attribute === 'luck') {
        return getLuck(number);
    }
}