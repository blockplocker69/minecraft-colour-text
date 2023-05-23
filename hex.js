
function getRandomHex() {
    return '&#' + Math.random().toString(16).slice(2, 8).toUpperCase();
}

document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.querySelector('input');
    const generateButton = document.querySelector('button');
    const resultParagraph = document.querySelector('#resultat');

    generateButton.addEventListener('click', function () {
        const inputValue = inputField.value;
        const words = inputValue.split(' ');
        let result = '';
        words.forEach(function (word) {
            const randomHex = getRandomHex();
            result += randomHex + '&l' + word + ' ';
        });
        resultParagraph.textContent = result.trim();
    });

    resultParagraph.addEventListener('click', function () {
        const textToCopy = resultParagraph.textContent;
        navigator.clipboard.writeText(textToCopy).then(function () {
            resultParagraph.classList.add('copied');
            console.log('Text copied to clipboard: ' + textToCopy);
            setTimeout(function () {
                resultParagraph.classList.remove('copied');
            }, 100);
        }).catch(function (err) {
            console.error('Failed to copy text: ', err);
        });
    });
});
