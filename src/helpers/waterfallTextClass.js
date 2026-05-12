const ANIM_DURATION_MS = 450

const WATERFALL_TEXT = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

export default class WaterfallText {
  shownIndex = null
  prevShownIndex = null
  id = ""

  constructor(parentEl, id) {
    this.id = id

    let temp = document.querySelector("#waterfall-text-template");
    let wrapper = temp.content.cloneNode(true);
    const innerText = wrapper.querySelector(".waterfall-text-inner")

    const children = WATERFALL_TEXT.map(t => {
      const el = document.createElement("p")
      el.classList.add(...["waterfall-text-item", "font-medium", "tracking-wide", "leading-none", "select-none"])
      el.textContent = t
      return el
    })

    children.forEach(c => innerText.appendChild(c))

    innerText.id = id

    if (parentEl) {
      parentEl.appendChild(wrapper)
    }

    this.setShownIndex(null)
  }

  setShownIndex(index) {
    this.prevShownIndex = this.shownIndex
    this.shownIndex = index
    this._update()
  }

  _update() {
    const el = document.getElementById(this.id)
    if (el) {
      
      if (this.shownIndex === null) {
        el.style.transform = `translateY(0)`
        el.classList.add("waterfall-text-transparent")
      }
      else {
        el.style.transform = `translateY(${-this.shownIndex}em)`
        el.classList.remove("waterfall-text-transparent")
      }
    }
  }
}
