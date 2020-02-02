function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var formsexo = document.getElementsByName('radiosexo')
        var idade = ano - Number(fano.value)

        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(formsexo[0].checked) {
            genero = 'Homem'

            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/foto-crianca-m.png')
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }

        } else if(formsexo[1].checked) {
            genero = 'Mulher'

            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/foto-crianca-f.png')
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos.`
        
        res.appendChild(img)
    }
}