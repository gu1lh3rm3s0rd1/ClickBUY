﻿
# clickBuy

O **clickBuy** representa uma versão aprimorada do projeto anterior, chamado [clickStore](https://github.com/gu1lh3rm3s0rd1/ClickStore). Utilizando uma combinação de HTML, CSS e JavaScript, juntamente com a API do Mercado Livre, o clickBuy oferece aos usuários uma experiência de compras online aprimorada, permitindo que eles adquiram produtos com um simples clique.

## [clickStore](https://clickstore.netlify.app/)

O [clickStore](https://github.com/gu1lh3rm3s0rd1/ClickStore) foi a base inicial para o desenvolvimento do clickBuy. Com melhorias significativas, o clickBuy incorpora funcionalidades avançadas, proporcionando uma interface mais intuitiva e eficiente para os usuários.

Explore o clickBuy e experimente a evolução da plataforma de compras online.

## Funcionalidades

Pesquisa de Produtos:

- Os clientes podem explorar uma ampla variedade de produtos através da funcionalidade de pesquisa no clickBuy. Ao inserir palavras-chave na barra de pesquisa, os resultados são exibidos em tempo real, proporcionando aos usuários uma maneira eficiente de encontrar os produtos desejados.

Catálogo de Produtos:

- Os resultados da pesquisa são apresentados em uma lista responsiva, incluindo imagens, nomes e preços dos produtos. O catálogo se adapta automaticamente a diferentes tamanhos de tela, garantindo uma experiência de usuário consistente em dispositivos como celulares, tablets e computadores.

Origem dos Produtos:

- O clickBuy oferece uma extensa seleção de produtos provenientes de diversas categorias do Mercado Livre, proporcionando aos usuários uma ampla gama de opções para explorar e adquirir.
Aprimorando a experiência de compra, o clickBuy permite que os usuários encontrem facilmente os produtos desejados, aproveitando a praticidade da pesquisa e a diversidade do catálogo. Além disso, a adaptabilidade responsiva assegura que a plataforma seja acessível em diferentes dispositivos, promovendo uma experiência de compra acessível e amigável.

## Link do Projeto

[Confira o Projeto](https://clickbuyweb.netlify.app/)

## Como Usar

1. Clone o repositório do clickBuy em sua máquina local:
   ```bash
   git clone https://github.com/gu1lh3rm3s0rd1/ClickBUY.git

2. Navegue para a pasta do projeto:
    ```bash
    cd clickbuy

Abra o arquivo index.html no seu navegador da web.

## Exemplo da Funcionalidade do Código

Aqui está um exemplo de código JavaScript que realiza a pesquisa na API do Mercado Livre:

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultsContainer = document.getElementById('resultsContainer');


    searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    fetch(https://api.mercadolibre.com/sites/MLB/search?q=${query})
                .then((response) => response.json())
        .then((data) => displayResults(data.results))
        .catch((error) => console.error('Erro na busca: ', error));
    });

    function displayResults(results) {
    resultsContainer.innerHTML = '';

    results.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.thumbnail;
        productDiv.appendChild(productImage);

        const productName = document.createElement('h3');
        productName.textContent = product.title;
        productDiv.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.textContent = `Preço: R$ ${product.price}`;
        productDiv.appendChild(productPrice);

        resultsContainer.appendChild(productDiv);
    });
    }

## Contribuição

Agradeço pelo interesse em contribuir para o projeto clickBuy! Se você tem ideias para melhorias ou deseja adicionar novas funcionalidades, ficarei feliz em receber sua contribuição.

### Como Contribuir:

1. Faça um fork do repositório clickBuy.
2. Crie uma branch para suas alterações: `git checkout -b minha-contribuicao`.
3. Faça as alterações desejadas no código.
4. Commit suas alterações com mensagens de commit significativas: `git commit -m "Adiciona nova funcionalidade"`.
5. Faça push para a sua branch: `git push origin minha-contribuicao`.
6. Abra um pull request para revisão.

### Discussão Prévia:

Antes de enviar um pull request, abra uma issue para discutir as mudanças propostas. Isso nos permite avaliar a relevância da contribuição, alinhar expectativas e garantir que as alterações estejam alinhadas com os objetivos do projeto.

Agradeço antecipadamente por suas contribuições e aguardo ansioso para trabalhar juntos para melhorar o clickBuy!

## Como Contatar

Se você estiver interessado(a) em colaborar em algum projeto ou apenas quiser bater um papo, fique à vontade para entrar em contato comigo. Abaixo estão os meus canais de contato:

- E-mail: @gsordi2507@gmail.com / @gsordi123@outlook.com
- GitHub: [gu1lh3rm3s0rd1](https://github.com/gu1lh3rm3s0rd1)
- LinkedIn: [guilhermesordi](https://www.linkedin.com/in/guilhermebenjamim/)

## Autor

Guilherme Benjamim Sordi - [https://github.com/gu1lh3rm3s0rd1/](https://github.com/gu1lh3rm3s0rd1).

## Licença

Todos os direitos reservados para o autor.

Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter mais detalhes.
