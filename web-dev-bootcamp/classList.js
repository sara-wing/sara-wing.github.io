// WRITE YOUR CODE IN HERE:

const allListItems = document.querySelectorAll('li');

for (let i = 0; i <= allListItems.length; i++) {
    const liElement = allListItems[i];
    liElement.classList.toggle('highlight');
}

// allListItems.forEach(liElement => {
//     console.log('toggling', liElement)
//     liElement.classList.toggle('highlight');
// });
