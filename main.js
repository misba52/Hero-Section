const btn = document.getElementById('menubtn');
const navul = document.getElementById('navul');

btn.addEventListener('click', ()=>{
    navul.classList.toggle("open");
})