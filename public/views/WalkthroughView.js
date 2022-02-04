import {View} from '/views/View.js';

class WalkthroughView extends View{
    constructor(){
        super();
    }

    connectedCallback(){
        this.classList.add('view')
        this.innerHTML = `<card-item variant="1">
                                <p>There has been a murder in Seymour’s Bay today, 2/10/2022.

                            It is with great sadness that we announce the loss of our beloved Bob.
                            </br>
                            </br>
                            <img src="/img/image1.png"/>
                            </br>
                            </br>

                            Use your SQL skills to help the police department solve the mystery crime.

                            </br>
                            </br>
                            Hints: Murder date 2/10/2022

                            Please refer to the <a href="/ERD">ERD</a> for our database.

                            Happy Birthday Jonathan and have fun!</p>
                         </card-item>`

        window.DP.dispatch("VIEW_LOAD")
    }

}

window.customElements.define('walkthrough-view', WalkthroughView);
export{WalkthroughView};