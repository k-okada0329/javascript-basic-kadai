const btn = document.getElementById('btn');

btn.addEventListener ('click', () => {
    const displayText = document.getElementById('text');
    displayText.textContent = 'ボタンをクリックしました';
});
