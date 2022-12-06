class CockItem extends HTMLElement {
  set cock(cock) {
    this._cock = cock;
    this.render();
  }
 
  
  render() {
    this.innerHTML = `
    <img class="fan-art-cock" src="${this._cock.strDrinkThumb}" alt="Fan Art">
    <div class="cock-info">
        <h2>${this._cock.strDrink}</h2>
        <p>${this._cock.strCategory}</p>
    </div>
  `;
}
}

customElements.define('cock-item', CockItem);