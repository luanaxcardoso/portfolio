const h2 = document.querySelector('h2');
const texto = h2.textContent;
h2.textContent = '';

for (let i = 0; i < texto.length; i++) {
  setTimeout(() => {
    h2.textContent += texto[i];
  }, i * 100); 
}


