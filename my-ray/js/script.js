class CalculadoraMedia {
    calcularMedia(notas) {
      let soma = 0;
      for (let c = 0; c < notas.length; c++) {
        soma += notas[c];
      }
  
      let media = soma / notas.length;
  
      return media;
    }
  
    aprovacao(notas) {
      let media = this.calcularMedia(notas);
  
      let condicao = media >= 8 ? "aprovado" : "reprovado";
  
      return `Média: ${media} - Resultado: ${condicao}`;
    }
  }
  
  class ContagemRegressiva {
    contagemRegressiva(numero) {
      console.log(numero);
  
      let proximoNumero = numero - 1;
  
      if (proximoNumero > 0) contagemRegressiva(proximoNumero);
    }
  }
  
  class ValidadorCampo {
    validaCampo(elemento) {
      elemento.addEventListener("focusout", function (event) {
        event.preventDefault();
  
        if (this.value == "") {
          document.querySelector(".mensagem").innerHTML =
            "verifique o preenchimento dos campos em vermelho";
          this.classList.add("erro");
          this.parentNode.classList.add("erro");
          return false;
        } else {
          document.querySelector(".mensagem").innerHTML = "";
          this.classList.remove("erro");
          this.parentNode.classList.remove("erro");
        }
      });
    }
  
    validaCampoNumerico(elemento) {
      elemento.addEventListener("focusout", function (event) {
        event.preventDefault();
  
        let numero = this.value.match(/^[\d]5-[\d]3/)
          ? this.value.replace(/-/, "")
          : this.value;
  
        if (
          numero != "" &&
          numero.match(/[0-9]*/) &&
          numero >= 0 &&
          numero <= 10
        ) {
          document.querySelector(".mensagem").innerHTML = "";
          this.classList.remove("erro");
          this.parentNode.classList.remove("erro");
        } else {
          document.querySelector(".mensagem").innerHTML =
            "verifique o preenchimento dos campos em destaque";
          this.classList.add("erro");
          this.parentNode.classList.add("erro");
          return false;
        }
      });
    }
  
    validaEmail(elemento) {
      elemento.addEventListener("focusout", function (event) {
        event.preventDefault();
  
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if (this.value.match(emailValido)) {
          document.querySelector(".mensagem").innerHTML = "";
          this.classList.remove("erro");
          this.parentNode.classList.remove("erro");
        } else {
          document.querySelector(".mensagem").innerHTML =
            "verifique o preenchimento dos campos em destaque";
          this.classList.add("erro");
          this.parentNode.classList.add("erro");
          return false;
        }
      });
    }
  }
  
  // Utilização das classes
  
  const calculadora = new CalculadoraMedia();
  const contagem = new ContagemRegressiva();
  const validador = new ValidadorCampo();
  
  const formulario1 = document.getElementById("formulario-01");
  if (formulario1) {
    formulario1.addEventListener("submit", function (evento) {
      evento.preventDefault();
      evento.stopPropagation();
  
      if (this.getAttribute("class").match(/erro/)) {
        return false;
      }
  
      let dados = new FormData(this);
      let notas = [];
  
      for (let key of dados.keys()) {
        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0;
  
        if (!isNaN(numero)) {
          notas.push(numero);
        }
      }
  
      console.log(notas);
  
      texto = calculadora.aprovacao(notas);
  
      document.getElementById("resultado").innerHTML = texto;
    });
  }
  
  let camposObrigatorios = document.querySelectorAll("input.obrigatorio");
  let camposNumericos = document.querySelectorAll("input.numero");
  let camposEmail = document.querySelectorAll("input.email");
  
  for (let emFoco of camposObrigatorios) {
    validador.validaCampo(emFoco);
  }
  
  for (let emFoco of camposNumericos) {
    validador.validaCampoNumerico(emFoco);
  }
  
  for (let emFoco of camposEmail) {
    validador.validaEmail(emFoco);
  }
  