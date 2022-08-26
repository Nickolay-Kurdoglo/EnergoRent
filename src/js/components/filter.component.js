import { Component } from "./component.js";

export class FilterComponent extends Component {
    constructor(nodeEl) {
        super(nodeEl)
    }

    init() {
        try {
            const filtersArray = Array.from(this.$element.getElementsByClassName("filter"));

            filtersArray.forEach((item, index) => {
                item.addEventListener("click", event => {
                    if (!event.target.classList.contains("filter__header") && !event.target.parentNode.classList.contains("filter__header")) return;
                    item.classList.toggle("opened");
                });
            });
        } 
        catch (error) {
            console.warn(error)
        }
    }
}