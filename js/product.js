

// "MLB1743": "Carros, Motos e Outros",
// "MLB1071": "Animais e Mascotas",
// "MLB1367": "Antiguidades e Coleções",
// "MLB1368": "Arte, Livraria e Costura",
// "MLB1384": "Bebês",
// "MLB1246": "Beleza e Cuidado Pessoal",
// "MLB1039": "Câmeras e Acessórios",
// "MLB1648": "Computadores",
// "MLB1144": "Consoles e Videogames",
// "MLB1500": "Construção",
// "MLB5726": "Eletrodomésticos e Ar Condicionado",
// "MLB1499": "Indústrias e Escritórios",
// "MLB1459": "Imóveis",
// "MLB1182": "Instrumentos Musicais",
// "MLB3937": "Jóias e Relógios",
// "MLB1540": "Serviços",
// "MLB1953": "Outras Categorias"

const limit = 50;
const isLoading = {
  animais: false,
  arte: false,
  bebes: false,
  beleza: false,
  cameras: false,
  carros: false,
  colecao: false,
  computadores: false,
  construcao: false,
  eletronicos: false,
  esportes: false,
  food: false,
  home: false,
  // imoveis: false,
  industria: false,
  joias: false,
  moda: false,
  musica: false,
  outros: false,
  saude: false,
  servicos: false,
  smartphones: false,
  kids: false,
  videogames: false,
  eletrodomestico: false,
};



const apis = {
  animais: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1071',
    containerId: 'produtos-animais',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  arte: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1368',
    containerId: 'produtos-arte',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  bebes: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1384',
    containerId: 'produtos-bebes',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  beleza: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1246',
    containerId: 'produtos-beleza',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  cameras: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1039',
    containerId: 'produtos-cameras',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  carros: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1743',
    containerId: 'produtos-carros',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  colecao: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1367',
    containerId: 'produtos-colecao',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  computadores: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1648',
    containerId: 'produtos-computadores',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  construcao: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1500',
    containerId: 'produtos-construcao',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  eletronicos: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1000',
    containerId: 'produtos-eletronicos',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  esportes: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1276',
    containerId: 'produtos-esportes',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  food: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1403',
    containerId: 'produtos-food',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  home: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1574',
    containerId: 'produtos-home',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  // imoveis: {
  //   url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1459',
  //   containerId: 'produtos-imoveis',
  //   offset: 0,
  //   sort: 'sort=sold_quantity_desc',
  //   shipping_cost: 'shipping_cost=free',
  //   reputation_health_gauge: 'reputation_health_gauge=healthy',
  //   tags: 'tags=good_quality_picture',
  // },
  industria: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1499',
    containerId: 'produtos-industria',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  joias: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB3937',
    containerId: 'produtos-joias',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  moda: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1430',
    containerId: 'produtos-moda',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  musica: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1182',
    containerId: 'produtos-musica',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  outros: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1953',
    containerId: 'produtos-outros',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  saude: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1246',
    containerId: 'produtos-saude',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  servicos: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1540',
    containerId: 'produtos-servicos',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  smartphones: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1051',
    containerId: 'produtos-smartphones',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  kids: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1132',
    containerId: 'produtos-kids',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  videogames: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1144',
    containerId: 'produtos-videogames',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
  eletrodomestico: {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB5726',
    containerId: 'produtos-eletrodomestico',
    offset: 0,
    sort: 'sort=sold_quantity_desc',
    shipping_cost: 'shipping_cost=free',
    reputation_health_gauge: 'reputation_health_gauge=healthy',
    tags: 'tags=good_quality_picture',
  },
};



async function displayResults(apiInfo) {
  const produtosContainer = document.getElementById('products');

  if (!produtosContainer) {
    console.error('Erro: Elemento com ID "products" não encontrado.');
    return;
  }

  const apiUrl = `${apiInfo.url}&limit=${limit}&offset=${apiInfo.offset}&sort=${apiInfo.sort}&tags=${apiInfo.tags}&reputation_health_gauge=${apiInfo.reputation_health_gauge}&shipping_cost=${apiInfo.shipping_cost}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.error(`Erro ao obter dados da API ${apiInfo.url}:`, response.status, response.statusText);
      return;
    }

    const data = await response.json();
    console.log(`Dados da API ${apiInfo.url}:`, data);

    produtosContainer.innerHTML = '';

    const fragment = document.createDocumentFragment();

    data.results.forEach(offer => {
      const linkProduto = document.createElement('a');
      linkProduto.href = offer.permalink;
      linkProduto.target = '_blank';
      linkProduto.rel = 'noopener noreferrer';
      linkProduto.id = 'link';

      const produtoItem = document.createElement('div');
      produtoItem.className = 'produto-item2';

      const produtoImagem = document.createElement('div');
      produtoImagem.className = 'produto-imagem';
      const imagem = document.createElement('img');
      imagem.src = offer.thumbnail;
      produtoImagem.appendChild(imagem);

      const produtoNome = document.createElement('div');
      produtoNome.className = 'produto-nome2';
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

    apiInfo.offset += limit;
  } catch (error) {
    console.error(`Erro ao processar dados da API ${apiInfo.url}:`, error);
  }
}



async function mostrarProdutos(categoria) {
  if (!isLoading[categoria]) {
    isLoading[categoria] = true;
    try {
      const api = apis[categoria];
      if (!api) {
        throw new Error(`API não definida para a categoria: ${categoria}`);
      }
      await displayResults(api);
    } catch (error) {
      console.error(`Erro ao mostrar produtos da categoria ${categoria}:`, error);
    } finally {
      isLoading[categoria] = false;
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Exibir a API padrão ao carregar a página
  mostrarProdutos('eletronicos');

  const categoryTitles = document.querySelectorAll('#categories li');

  categoryTitles.forEach(title => {
    title.addEventListener('click', function () {
      const categoryName = title.dataset.category;
      if (categoryName) {
        console.log(`Clicou na categoria: ${categoryName}`);
        mostrarProdutos(categoryName);
      }
    });
  });
});


