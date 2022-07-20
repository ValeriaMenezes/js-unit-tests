const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Teste se productDetails é uma função', () => {
    expect(typeof(productDetails)).toEqual('function');
  });
  it('Teste se o retorno da função é um array', () => {
   expect(typeof(productDetails())).toEqual('object');
  });
  it('Teste se o array retornado pela função contém dois itens dentro', () => {
   expect(productDetails('Alcool gel', 'Máscara').length).toEqual(2);
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toEqual(true);
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(productDetails('Alcool gel', 'Máscara')).not.toEqual();
  });
  it('Teste se os dois productIds terminam com 123', () => {
    const objects = productDetails('Alcool gel', 'Máscara');
    expect(objects[0].details.productId.endsWith('123')).toBeTruthy();
    expect(objects[1].details.productId.endsWith('123')).toBeTruthy();
  });
});


// ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.