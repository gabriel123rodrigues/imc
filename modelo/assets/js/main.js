

const resultadoDiv = document.querySelector('.resultado');

document.getElementById('button').addEventListener('click', (evento) => {
    evento.preventDefault();



    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const imcResultado = parseFloat(calcularImc(peso, altura));


    if (isNaN(peso) || isNaN(altura)) {
        resultadoDiv.innerHTML = `<p>Preecha os campos</p>`
        return;
    } else if (altura > 3) {
        resultadoDiv.innerHTML = `<p>Preencha altura corretamente</p>`
        return;
    } else {

        calcularImc(peso, altura)
        classificacao(imcResultado)


    }

})

function calcularImc(peso, altura) {
    const resultAltura = (altura * altura)
    const imc = peso / resultAltura

    return imc.toFixed(2);

}


function classificacao(resultado) {

    if (resultado < 18.5) {
        resultadoDiv.innerHTML = `<p>${resultado} cuidado, você está muito abaixo do peso.</p>`

    } else if (resultado >= 18.5 && resultado <= 24.9) {
        resultadoDiv.innerHTML = `<p>${resultado} Seu peso está normal </p>`
    } else if (resultado >= 25 && resultado <= 29.9) {
        resultadoDiv.innerHTML = `<p>${resultado} Sobrepeso </p>`
    } else if (resultado >= 30 && resultado <= 34, 9) {
        resultadoDiv.innerHTML = `<p>${resultado} obesidade grau 1 </p>`
    } else if (resultado >= 35 && resultado <= 39, 9) {
        resultadoDiv.innerHTML = `<p>${resultado} Obesidade grau 2 </p>`
    } else if (resultado > 40) {
        resultadoDiv.innerHTML = `<p>${resultado} Obesidadwe grau 3, procure um médico urgentimente! </p>`
    }

}




