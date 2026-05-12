
let currentDotAnimCycle = 0


function _runLoadingOverlayAnim() {
    currentDotAnimCycle++
    const el = document.querySelector("#loading-overlay")
    const innerText = "Kapcsolódás a SpaceX szerveréhez" + ".".repeat(currentDotAnimCycle % 3 + 1)
    el.textContent = innerText
}

const dotInterval = setInterval(_runLoadingOverlayAnim, 500)

export function hideLoadingOverlay() {
    const el = document.querySelector("#loading-overlay")
    el.style.opacity = 0
    el.style.pointerEvents = "none"
    clearInterval(dotInterval)
}


export function _initLoadingOverlay() {
    const el = document.querySelector("#loading-overlay")
    el.style.opacity = 1
    el.style.paddingTop = 0
}
