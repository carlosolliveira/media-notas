var en1 = document.getElementById('n1')
var en2 = document.getElementById('n2')
var en3 = document.getElementById('n3')
var btn = document.getElementById('calc')
btn.addEventListener('click', calcmedia);
var faviso = document.querySelector("#close")
faviso.addEventListener('click', fechar)
function calcmedia(){
    let n1 = Number(en1.value);
    let n2 = Number(en2.value);
    let n3 = Number(en3.value);
    if(!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10 && n3 >= 0 && n3 <= 10){
        let media = (n1 + n2 + n3) / 3
        alert(`Sua média é ${media.toFixed(1)}`)
    }
    else{
        document.getElementById('aviso').style.display = 'flex'
    }
}

function fechar(){
    document.getElementById('aviso').style.display = 'none'
}