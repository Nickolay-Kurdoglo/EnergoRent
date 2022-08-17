export class Component {
    constructor(nodeElement) {
        this.$element = document.getElementById(nodeElement)
        this.init()
    }

    init () {}
}