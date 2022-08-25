import { Component } from "./component.js";

export class PopupComponent extends Component{
    constructor(nodeEl) {
        super(nodeEl)
    }

    init () {

        const close = this.$element.querySelector("#close");

        close.addEventListener("click", () => {
            this.$element.classList.add("hide");
        })

        Array.from(document.getElementsByClassName("js-popup-open")).forEach(item => {
            item.addEventListener("click", () => {
                this.$element.classList.remove("hide");
            })    
        })
    }
}