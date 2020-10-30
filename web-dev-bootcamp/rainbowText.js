const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:

const allSpans = document.querySelectorAll('span');

for (let i = 0; i < colors.length; i++) {
    const span = allSpans[i];
    span.style.color = colors[i];
}
