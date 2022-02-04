import {View} from '/views/View.js';

class HappyBirthdayView extends View{
    constructor(){
        super();
    }

    connectedCallback(){
        this.classList.add('view')
        this.innerHTML = `<card-item variant="1">
                            <img src="/img/image2.png"/>
                         </card-item>`

        window.DP.dispatch("VIEW_LOAD")
    }

}

window.customElements.define('happy-birthday-view', HappyBirthdayView);
export{HappyBirthdayView};