

class App {
    tootTipListener () {
        let button = document.querySelector('.button')
        button.addEventListener('click',() => {
            let isActive = document.querySelector('.showToolTip');
            if (isActive !== null) {
                this.deleteTooltip()
                isActive.classList.remove('showToolTip')
            } else {
                this.createToolTip(button)
                let tooltip = document.querySelector('.tooltip');
                tooltip.classList.add('showToolTip')
                this.positionedToolTip(button, tooltip)
            }
        })
    }
    createToolTip(button) {
        let toolTip = document.createElement('div')
        toolTip.classList.add('tooltip')
        button.appendChild(toolTip)
        let title = document.createElement('div')
        title.classList.add('title')
        title.textContent = 'Title toolTip'
        toolTip.appendChild(title)
        let description = document.createElement('div')
        description.classList.add('description')
        description.textContent = 'Tooltip Description'
        toolTip.appendChild(description)
        console.log(button.offsetHeight)


    }
    positionedToolTip(button, tooltip) {
        tooltip.style.bottom = `${button.offsetTop + button.offsetHeight + 5}px`
        tooltip.style.right = `${button.offsetWidth / 2}px`
        tooltip.style.width = `${button.offsetWidth}px`

    }
    deleteTooltip() {
        let tooltip = document.querySelector('.tooltip');
        tooltip.remove()
    }


}

let newApp = new App();
newApp.tootTipListener();
