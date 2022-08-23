import { Component } from "./component.js"

export class FilterComponent extends Component {
    constructor(nodeEl) {
        super(nodeEl)
    }

    init () {
        const filtersArray = Array.from(this.$element.getElementsByClassName("filter"));

        filtersArray.forEach((item, index) => {
            item.addEventListener("click", event => {
                if (!event.target.classList.contains("filter__header") && !event.target.parentNode.classList.contains("filter__header")) return;
                item.classList.toggle("opened");
                // item.getElementsByClassName("filter__arrow")
            });
        });
    }
}