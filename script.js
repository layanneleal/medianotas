function mediaNotas() {
  let saida = document.querySelector('p#res')
  let nota1 = prompt('Digite a primeira nota')
  let nota2 = prompt('Digite a segunda nota')
  let qtNotas = 2
  let media 
  let soma
  
  nota1 = nota1.replace('.', ',')
  nota2 = nota2.replace('.', ',')

  nota1 = parseFloat(nota1)
  nota2 = parseFloat(nota2)
  
  if (nota1 > 0 && nota2 > 0 ) {

    soma = nota1 + nota2
    media = soma / qtNotas

    saida.innerHTML = `<p>Resultado:</p>`
    saida.innerHTML =+ `<p>Primeira nota ${nota1}</p>`
    saida.innerHTML =+ `<p>Segunda nota ${nota2}</p>`
    saida.innerHTML =+ `<p>Média: ${media}</p>`

  }else{
    alert('Digite todas as notas')
    media.innerHTML = ''

  }
  
}