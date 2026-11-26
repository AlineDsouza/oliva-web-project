const    searchForm = document.getElementById("searchForm");
const   searchInput = document.getElementById("searchInput");
const     searchBox = document.getElementById("searchBox");
const      btnTodos = document.getElementById("btnTodos");
const   btnEntradas = document.getElementById("btnEntradas");
const     btnPratos = document.getElementById("btnPratos");
const btnSobremesas = document.getElementById("btnSobremesas");
const    btnBebidas = document.getElementById("btnBebidas")

const produtos = [
    {         nome: "prod1",
             preco: 999,
              tipo: "entrada",
      ingredientes: ["salgado", "rissol"],
              link: "https://via.placeholder.com/320x240/lightgrey/black/?text=Imagem%20da%20entrada%201",  
            activo: true  
    },
    {         nome: "prod2",
             preco: 999,
              tipo: "entrada",
      ingredientes: ["pao", "manteiga"],
              link: "https://via.placeholder.com/320x240/lightgrey/black/?text=Imagem%20da%20entrada%202",  
            activo: true  
    },
    {         nome: "prod3",
             preco: 999,
              tipo: "entrada",
      ingredientes: ["salgado", "presunto"],
              link: "https://via.placeholder.com/320x240/lightgrey/black/?text=Imagem%20da%20entrada%203",  
            activo: true  
    },
    {         nome: "prod4",
             preco: 999,
              tipo: "prato",
      ingredientes: ["carne", "porco", "lombo", "assado"],
              link: "https://via.placeholder.com/320x240/lightgrey/black/?text=Imagem%20do%20prato%201",  
            activo: true  
    },
    {         nome: "prod5",
             preco: 999,
              tipo: "prato",
      ingredientes: ["peixe", "bacalhau", "recheado"],
              link: "https://via.placeholder.com/320x240/lightgrey/black/?text=Imagem%20do%20prato%202",  
            activo: true  
    },
    {         nome: "prod6",
             preco: 999,
              tipo: "prato",
      ingredientes: ["peixe", "dourada", "grelhado"],
              link: "https://via.placeholder.com/320x240/lightgrey/black/?text=Imagem%20do%20prato%203",  
            activo: true  
    },
    {         nome: "prod7",
             preco: 999,
              tipo: "prato",
      ingredientes: ["carne", "vitela", "bife", "grelhado"],
              link: "https://via.placeholder.com/320x240/lightgrey/black/?text=Imagem%20do%20prato%204",  
            activo: true  
    },
    {         nome: "prod8",
             preco: 999,
              tipo: "sobremesa",
      ingredientes: ["doce", "maca", "assada"],
              link: "https://via.placeholder.com/320x240/lightgrey/black/?text=Imagem%20da%20sobremesa%201",  
            activo: true  
    },
    {         nome: "prod9",
             preco: 999,
              tipo: "sobremesa",
      ingredientes: ["doce", "pudim"],
              link: "https://via.placeholder.com/320x240/lightgrey/black/?text=Imagem%20da%20sobremesa%202",  
            activo: true  
    },
    {         nome: "prod10",
             preco: 999,
              tipo: "sobremesa",
      ingredientes: ["doce", "tiramissu"],
              link: "https://via.placeholder.com/320x240/lightgrey/black/?text=Imagem%20da%20sobremesa%203",  
            activo: true  
    },
    {         nome: "prod11",
             preco: 999,
              tipo: "bebida",
      ingredientes: ["alcool", "vinho", "tinto"],
              link: "https://via.placeholder.com/320x240/lightgrey/black/?text=Imagem%20da%20bebida%201",  
            activo: true  
    },
    {         nome: "prod12",
             preco: 999,
              tipo: "bebida",
      ingredientes: ["refrigerante", "sumo", "laranja"],
              link: "https://via.placeholder.com/320x240/lightgrey/black/?text=Imagem%20da%20bebida%201",  
            activo: true  
    }
]

function filterByTipo(tipo) {
    for(const produto of produtos){
        if(produto.tipo === tipo){
			produto.activo = true;
        }
		else{
			produto.activo = false;
		}
    }
}

function removeFilter(){
    for(const produto of produtos){
        produto.activo = true;
    }
}

function showResults(){
	let found = false;
    searchBox.innerHTML = '';

    for(const produto of produtos){
        if(produto.activo === true) {
			found = true;
            const itemBox = document.createElement("div");
            itemBox.className = "col";

            const itemCard = document.createElement("div");
            itemCard.className = "card p-0 h-100 rounded-1";
            
            const cardImage = document.createElement("img");
            cardImage.setAttribute("src", produto.link);
            cardImage.setAttribute("class", "card-img-top m-0");
            itemCard.appendChild(cardImage);

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";
            
            const cardTitle = document.createElement("h5");
            cardTitle.className = "card-title";
            cardTitle.textContent = produto.nome;
            cardBody.appendChild(cardTitle);

            const cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.textContent = produto.tipo;
            cardBody.appendChild(cardText);
            
            const cardPrice = document.createElement("p");
            cardPrice.className = "badge text-bg-success";
            const price = produto.preco / 100;
            cardPrice.textContent = `${price} €`;
            cardBody.appendChild(cardPrice);

            itemCard .appendChild(cardBody);
            itemBox  .appendChild(itemCard);
            searchBox.appendChild(itemBox);
        }
    }

	if(!found){
		const notFound = document.createElement("p");
		notFound.textContent = "Sem resultados.";
		
		searchBox.appendChild(notFound);
	}
}

btnTodos.addEventListener("click", (event)  => {
    event.preventDefault();
    removeFilter();
    showResults();
});

btnBebidas.addEventListener("click", (event)  => {
    event.preventDefault();
    filterByTipo("bebida");
    showResults();
});

btnEntradas.addEventListener("click", (event)  => {
    event.preventDefault();
    filterByTipo("entrada");
    showResults();
});

btnPratos.addEventListener("click", (event)  => {
    event.preventDefault();
    filterByTipo("prato");
    showResults();
});

btnSobremesas.addEventListener("click", (event)  => {
    event.preventDefault();
    filterByTipo("sobremesa");
    showResults();
});

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showResults();
});

document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();
    showResults();
});