const shape = require("./shape");

class square extends shape {

    render() {
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <square height="500" width="500" fill="${this.color}" />
        <text fill="${this.textColor}" font-size="75" x="175" y="250">${this.text}</text>
        </svg>`
    }
}

module.exports = square;