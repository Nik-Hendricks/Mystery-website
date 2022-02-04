import {View} from '/views/View.js';

class SolveView extends View{
    constructor(){
        super();
    }

    connectedCallback(){
        this.classList.add('view')
        this.innerHTML = `
                        <card-item variant="1">
                            <img src="/img/image3.png"/>
                        </card-item>
                        <sql-editor></sql-editor>
                         `
        
        window.DP.dispatch("VIEW_LOAD")
    }

}

window.customElements.define('solve-view', SolveView);
export{SolveView};