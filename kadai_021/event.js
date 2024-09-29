const btn = document.getElementById('btn');

btn.addEventListener('click',()=> {
    setTimeout(() => {
        const displayText = document.getElementById('text');
        displayText.textContent = 'ボタンをクリックしました';
    },2000);
});
