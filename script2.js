function verificar() {
  var data = new Date()
  var ano = data.getFullYear() //serve para buscar ano com 4 digitos
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO]Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)

    //ADICIONANDO IMG UTILIZANDO JS.
    var img = document.createElement('img')

    //CRIANDO UM ID PARA A IMG
    img.setAttribute('id', 'foto')

    /*SE QUISER CENTRALIZAR TEXTO UTILIZANDO JS.
=>  res.style.textAlign = 'center'
*/
    var genero = ''
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 15) {
        //CRIANÇA
        img.setAttribute('src', './images/menino.jpg ')
      } else if (idade < 21) {
        //JOVEM
        setAttribute('src', './images/rapaz.jpg ')
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute('src', './images/homem.jpg ')
      } else {
        //IDOSO
        img.setAttribute('src', './images/idoso.jpg ')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 15) {
        //CRIANÇA
        img.setAttribute('src', './images/menina.jpg ')
      } else if (idade < 21) {
        //JOVEM
        setAttribute('src', './images/moca.jpg ')
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute('src', './images/mulher.jpg ')
      } else {
        //IDOSO
        img.setAttribute('src', './images/idosa.jpg ')
      }
    }

    res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
