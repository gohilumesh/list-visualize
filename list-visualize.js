function ListVisualization() {
  this._list = [];
  this.addElementToList = () => {

      let doc = document;
      let inputElement = doc.querySelector('.add-element');
      let val = inputElement.value.trim();

      if (val.length > 0) {
          this._list.push(val);
      }

      console.log(this._list);
  }

  this.visualize = () => {
    let doc = document;
    let inputElement = doc.querySelector('.add-element');
    let parentElement = document.querySelector('.visualize');
    let value = inputElement.value.trim();
    if (value.length > 0) {
      let liel = document.createElement('l1');
      liel.setAttribute("class", "numberCircle");
      let textNode = document.createTextNode(value);
      liel.appendChild(textNode);
      parentElement.appendChild(liel);
    }

  }
}


let listVisualize = new ListVisualization();

ListVisualization.prototype.init = () => {
  let doc = document;
  let btn = doc.querySelector('.p-btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    listVisualize.addElementToList();
    listVisualize.visualize();
    listVisualize.resetForm();
    listVisualize.toggleBtn();
    });
    let inputElement = doc.querySelector('.add-element');
    inputElement.addEventListener('keyup', (e) => {
        e.preventDefault();
        let value = inputElement.value.trim();
        value.length > 0 ? btn.disabled = false : btn.disabled = true;
    });
}

ListVisualization.prototype.resetForm = () => {
  let doc = document;
  let inputElement = doc.querySelector('.add-element');
  inputElement.value = '';
}

ListVisualization.prototype.toggleBtn = () => {
  let doc = document;
  let btn = doc.querySelector('.p-btn');
  let btnDisabledAttribute = btn.getAttribute('disabled');
  let newval = btnDisabledAttribute === 'true' ?  false : true;
  btn.disabled = newval;
}


document.addEventListener("DOMContentLoaded", () => {
  listVisualize.init();
});
