class DrinkItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set drink(drink) {
    this._drink = drink;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
          .card {
            margin-bottom: 18px;
            border-radius: 10px;
            max-width: 300px;
            margin-right: 10px;
            margin-left: 10px;
            overflow: hidden;
            background-color: #f8f9fa;
          }

          .card img {
            width: 100%;
            max-height: 300px;
            max-width: 300px;
            object-fit: cover;
            object-position: center;
          }

          .card .card-body {
            padding: 24px;
          }

          .card .card-body h2 {
            font-weight: lighter;
          }

          .card .card-body p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 10;
            -webkit-box-orient: vertical;
          }
          
        </style>
        <div class="card">
          <img class="card-img-top" src="${this._drink.strDrinkThumb}" alt="image">
          <div class="card-body">
            <h5 class="card-title">${this._drink.strDrink}</h5>
            <p class="card-text">${this._drink.strInstructions}</p>
          </div>
        </div>
      `;
  }
}

customElements.define("drink-item", DrinkItem);
