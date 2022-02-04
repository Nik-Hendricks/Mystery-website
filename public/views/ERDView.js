import {View} from '/views/View.js';

class ERDView extends View{
    constructor(){
        super();
    }

    connectedCallback(){
        this.classList.add('view')
        this.innerHTML = `<card-item variant="1">
                            <img src="/img/image4.png"/>
                         </card-item>`

        window.DP.dispatch("VIEW_LOAD")
    }

}

window.customElements.define('erd-view', ERDView);
export{ERDView};