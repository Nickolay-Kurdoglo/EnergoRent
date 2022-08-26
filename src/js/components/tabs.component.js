import { Component } from "./component.js";

export class TabComponent extends Component {
    constructor(nodeEl) {
        super(nodeEl)
    }

    init() {
        let $tabs = Array.from(this.$element.getElementsByClassName("js-tabs"));

        $tabs.forEach(item => {
            item.addEventListener("click", event => {
                let currentTab = item.getAttribute("data-tab");
                let currentList = this.$element.querySelector(".description__content").querySelector(currentTab);
                let tabLists = Array.from(this.$element.getElementsByClassName("js-tab-list"));

                if (item.classList.contains("active")) return;
                $tabs.map(item => item.classList.remove("active"));
                tabLists.map(item => item.classList.remove("active"));
                
                item.classList.add("active");
                currentList.classList.add("active")

            })
        })

    }
}

