document.body.innerHTML = '<h1>Hello from JavaScript</h1>'
console.log('Test 2')
document.addEventListener('click', (event) => {
    event.preventDefault();
})
console.log('');
const arr = document.querySelector('#arr');