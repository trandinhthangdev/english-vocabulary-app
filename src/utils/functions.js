export const getRandomItemFromArray = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


export const getRandomItemsFromArray = (array, count) => {
    const randomItems = [];
    const shuffledArray = array.slice(); // Create a shallow copy of the original array

    // Shuffle the array using the Fisher-Yates algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    // Push the first 'count' elements into the randomItems array
    for (let i = 0; i < count; i++) {
        randomItems.push(shuffledArray[i]);
    }

    return randomItems;
}


export const shuffleArray = (array) => {
    const shuffledArray = array.slice(); // Create a shallow copy of the original array

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}
