function calcularCirculo(raio) {
  let pi = 3.14;
  let area = pi * (raio * raio);
  let perimetro = 2 * pi * raio;

  return `Área: ${area} m² <br> Perímetro: ${perimetro} m`;
}

function mostrarCalculo() {
  let raio = document.querySelector('#raio').value;

  let resultado = calcularCirculo(raio);

  document.querySelector('#resultado').innerHTML = resultado;
}
