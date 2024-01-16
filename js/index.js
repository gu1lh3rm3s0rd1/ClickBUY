window.addEventListener("DOMContentLoaded", (event) => {
  //evento para capturar o submit
  document.getElementById("busca").addEventListener("submit", function (event) {
    event.preventDefault();

    let query = document.getElementById("search-input").value.trim();
    if (query !== "") {
      searchProducts(query);
    }
  });
});

let itemsPerPage = 20;
let currentPage = 1;
let totalItems = 0;
let totalPages = 0;
let currentResults = [];

function searchProducts(query) {
  let url = `https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(
    query
  )}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      totalItems = data.results.length;
      totalPages = Math.ceil(totalItems / itemsPerPage);
      currentPage = 1;
      currentResults = data.results;
      displayResults();
    })
    .catch((error) => console.error("Erro ao realizar a pesquisa:", error));
}

function displayResults() {
  let resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  if (currentResults.length === 0) {
    resultsContainer.innerHTML = "Nenhum resultado encontrado.";
    return;
  }

  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let currentItems = currentResults.slice(startIndex, endIndex);

  currentItems.forEach(function (product) {
    let productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <div style='display: grid; justify-content: center; align-content: center; align-items: center; justify-items: start;'>
        <p>${product.title}</p>
        <p>R$ ${product.price}</p>
      </div>
    `;

    productElement.addEventListener("click", function () {
      // permalink é uma propriedae retornada da API que retorna a página original do produto no Mercado Livre
      window.open(product.permalink, "_blank");
    });

    resultsContainer.appendChild(productElement);
  });

  let paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  let prevButton = document.createElement("button");
  prevButton.classList.add("btn", "btn:hover");
  prevButton.textContent = "< Anterior";
  prevButton.id = "prev-btn";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", goToPreviousPage);
  paginationContainer.appendChild(prevButton);

  let nextButton = document.createElement("button");
  nextButton.classList.add("btn", "btn:hover");
  nextButton.textContent = "Próximo >";
  nextButton.id = "next-btn";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", goToNextPage);
  paginationContainer.appendChild(nextButton);
}

function goToPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    displayResults();
  }
}

function goToNextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    displayResults();
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////////


// const limit = 5;
const defaultLimit = 5;
let limit = defaultLimit; 

const isLoading = {
  eletronicos: false,
  moda: false,
  saude: false, // beleza
  smartphones: false,
  esportes: false,
  home: false,
  kids: false,
  auto: false,
};

const apis = {
  eletronicos: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1000',
    containerId: 'produtos-eletronicos',
    offset: 0,
    mostrarMaisBtnId: 'mostrarMaisBtnEletronicos',
    fecharMaisBtnId: 'fecharMaisBtnEletronicos',
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  moda: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1430',
    containerId: 'produtos-moda',
    offset: 0,
    mostrarMaisBtnId: 'mostrarMaisBtnModa',
    fecharMaisBtnId: 'fecharMaisBtnModa',
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  saude: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1246',
    containerId: 'produtos-saude',
    offset: 0,
    mostrarMaisBtnId: 'mostrarMaisBtnSaude',
    fecharMaisBtnId: 'fecharMaisBtnSaude',
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  smartphones: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1051',
    containerId: 'produtos-smartphones',
    offset: 0,
    mostrarMaisBtnId: 'mostrarMaisBtnSmartphones',
    fecharMaisBtnId: 'fecharMaisBtnSmartphones',
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  esportes: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1276',
    containerId: 'produtos-esportes',
    offset: 0,
    mostrarMaisBtnId: 'mostrarMaisBtnEsportes',
    fecharMaisBtnId: 'fecharMaisBtnEsportes',
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  home: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1574',
    containerId: 'produtos-home',
    offset: 0,
    mostrarMaisBtnId: 'mostrarMaisBtnHome',
    fecharMaisBtnId: 'fecharMaisBtnHome',
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  kids: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1132',
    containerId: 'produtos-kids',
    offset: 0,
    mostrarMaisBtnId: 'mostrarMaisBtnKids',
    fecharMaisBtnId: 'fecharMaisBtnKids',
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  food: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1403',
    containerId: 'produtos-food',
    offset: 0,
    mostrarMaisBtnId: 'mostrarMaisBtnFood',
    fecharMaisBtnId: 'fecharMaisBtnFood',
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
};


async function displayResults2(apiInfo) {
  const apiUrl = `${apiInfo.url}&limit=${limit}&offset=${apiInfo.offset}&sort=${apiInfo.sort}&tags=${apiInfo.tags}&reputation_health_gauge=${apiInfo.reputation_health_gauge}&shipping_cost=${apiInfo.shipping_cost}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    console.error(`Erro ao obter dados da API ${apiInfo.url}:`, response.status, response.statusText);
    return;
  }

  const data = await response.json();
  console.log(`Dados da API ${apiInfo.url}:`, data);

  const produtosContainer = document.getElementById(apiInfo.containerId);

  const fragment = document.createDocumentFragment();

  data.results.forEach(offer => {
    const linkProduto = document.createElement('a');
    linkProduto.href = offer.permalink;
    linkProduto.target = '_blank';
    linkProduto.rel = 'noopener noreferrer';
    linkProduto.id = 'link';

    const produtoItem = document.createElement('div');
    produtoItem.className = 'produto-item';

    const produtoImagem = document.createElement('div');
    produtoImagem.className = 'produto-imagem';
    const imagem = document.createElement('img');
    imagem.src = offer.thumbnail;
    produtoImagem.appendChild(imagem);

    const produtoNome = document.createElement('div');
    produtoNome.className = 'produto-nome';
    produtoNome.textContent = offer.title;

    const produtoPreco = document.createElement('div');
    produtoPreco.className = 'produto-preco';
    produtoPreco.textContent = `R$ ${offer.price}`;

    produtoItem.appendChild(produtoImagem);
    produtoItem.appendChild(produtoNome);
    produtoItem.appendChild(produtoPreco);
    linkProduto.appendChild(produtoItem);

    fragment.appendChild(linkProduto);
  });

  produtosContainer.appendChild(fragment);

  // Incrementar o offset para a próxima página
  apiInfo.offset += limit;
}



async function mostrarProdutos(apiName) {
  if (!isLoading[apiName]) {
    isLoading[apiName] = true;
    try {
      await displayResults2(apis[apiName]);
    } catch (error) {
      console.error(`Erro ao mostrar produtos da API ${apiName}:`, error);
    } finally {
      isLoading[apiName] = false;
      // Adicione qualquer lógica adicional após carregar os produtos
    }
  }
}

const categorias = ['smartphones', 'saude', 'eletronicos', 'moda', 'home', 'kids', 'food', 'esportes'];

categorias.forEach(categoria => mostrarProdutos(categoria));



async function mostrarMais(apiName) {
  if (!isLoading[apiName]) {
    // Atualiza o limite para exibir 30 produtos
    limit = 30;

    mostrarProdutos(apiName);
    const produtosDiv = document.getElementById(`produtos-${apiName}`);
    produtosDiv.classList.add('expandido');
    const fecharMaisBtn = document.getElementById(apis[apiName].fecharMaisBtnId);
    fecharMaisBtn.style.display = 'inline-block';

    let opacity = 0;
    const fadeInInterval = setInterval(() => {
      if (opacity < 1) {
        opacity += 0.1;
        fecharMaisBtn.style.opacity = opacity;
      } else {
        clearInterval(fadeInInterval);
      }
    }, 150);

    // Modificar as propriedades da classe .produto
    const produtos = document.querySelectorAll(`#produtos-${apiName}.produto`);
    produtos.forEach(item => {
      item.style.display = 'grid';
      item.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
      item.style.gridGap = '5px';
      item.style.overflowY = 'scroll';
      item.style.margin = '0vw 0vw 0vw';
      item.style.marginTop = '3vw';
      item.style.backgroundColor = '#fff';
      item.style.borderRadius = '15px';
      item.style.width = '65vw';
      item.style.height = '65vh';
      item.style.alignContent = 'center';
      item.style.justifyContent = 'center';
      item.style.alignItems = 'center';
      item.style.justifyItems = 'center';
      item.style.placeContent = 'unset';
      item.style.placeItems = 'unset';
      item.style.border = '1px solid #555';
    });

    // Reinicia o limite para o valor padrão após exibir os produtos
    limit = defaultLimit;
  }
}


async function fecharMaisBtn(apiName) {

  limit = 5;

  const produtosDiv = document.getElementById(`produtos-${apiName}`);
  const fecharMaisBtn = document.getElementById(apis[apiName].fecharMaisBtnId);

  const fadeOutInterval = setInterval(() => {
    produtosDiv.classList.remove('expandido');
    const produtos = document.querySelectorAll(`#produtos-${apiName}.produto`);
    produtos.forEach(item => {
      item.style.display = '';
      item.style.gridTemplateColumns = '';
      item.style.gridGap = '';
      item.style.overflowY = '';
      item.style.margin = '';
      item.style.marginTop = '';
      item.style.backgroundColor = '';
      item.style.borderRadius = '';
      item.style.width = '';
      item.style.height = '';
      item.style.alignContent = '';
      item.style.justifyContent = '';
      item.style.alignItems = '';
      item.style.justifyItems = '';
      item.style.placeContent = '';
      item.style.placeItems = '';
      item.style.border = '';
      item.style.transition = 'transform 0.5s ease';
    });

    fecharMaisBtn.style.display = 'none';

    clearInterval(fadeOutInterval);
  }, 150);

  limit = defaultLimit;
}
