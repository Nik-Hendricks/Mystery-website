import {View} from '/views/View.js';

class MainView extends View{
    constructor(){
        super();
    }

    connectedCallback(){
        this.classList.add('view')
        this.innerHTML = `<card-item variant="1">
                         </card-item>`

        window.DP.dispatch("VIEW_LOAD")
    }

}

window.customElements.define('main-view', MainView);
export{MainView};