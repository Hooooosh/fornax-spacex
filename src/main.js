import getRockets from "./api/getRockets";
import displayComparisonTable from "./helpers/displayComparisonTable";
import { getComparisonData } from "./helpers/getComparisonData";
import getCostPerLaunch from "./helpers/getCostPerLaunch";
import { _initLoadingOverlay, hideLoadingOverlay } from "./helpers/loadingOverlayHandler";
import { initWaterfallTexts as _initWaterfallTexts, updateWaterfallTexts } from "./helpers/waterfallText";
import WaterfallText from "./helpers/waterfallTextClass";

var showingFleetRockets = false
const rockets = []

async function _init() {
  _initLoadingOverlay()

  getRockets().then((data) => {
    rockets.push(...data.map((e, idx) => ({
      id: idx,
      selected: false,
      isInFleet: false,
      data: e,
    })))
    rockets.sort((a, b) => getCostPerLaunch(a.data) - getCostPerLaunch(b.data))

    _initWaterfallTexts()
    _initCards(rockets)
    updateWaterfallTexts(rockets)
    hideLoadingOverlay()
  })

  document.querySelector("#table-close-btn").onclick = closeTable
  document.querySelector("#active-toggle-button").onclick = toggleFleetRocketFilter
}

function toggleFleetRocketFilter() {
  showingFleetRockets = !showingFleetRockets
  document.querySelector("#active-toggle-button").textContent = showingFleetRockets ? "Összes rakéta" : "Csak az aktív rakéták"
  updateCards(rockets)
}

function closeTable() {
  document.querySelector("#table-wrapper").classList.remove("shown")
  rockets.forEach(r => r.selected = false)
  updateCards(rockets)
}

function trySelectForCompare(id) {
  const r = rockets.find(r => r.id === id)
  const selectedCount = rockets.filter(r => r.selected).length

  /* túl sok catch */
  if (selectedCount >= 2 && !r.selected) {
    return;
  }
  r.selected = !r.selected

  /* ha ez a 2. select */
  if (r.selected && selectedCount === 1) {
    displayComparisonTable(rockets.filter(r => r.selected))
  }
  updateCards(rockets)
}

function toggleIsInFleet(id) {
  const r = rockets.find(r => r.id === id)
  r.isInFleet = !r.isInFleet
  updateCards(rockets)
  updateWaterfallTexts(rockets)
}

function updateCards(rocketData) {
  rocketData.forEach(r => {
    const card = document.getElementById(`card-${r.id}`)
    if (!card) return;

    card.classList.remove("select-disabled")
    card.classList.remove("hidden")

    if (r.selected) {
      card.classList.add("selected")
    }
    else {
      card.classList.remove("selected")
      if (rockets.filter(r => r.selected).length >= 2) {
        card.classList.add("select-disabled")
      }
    }

    if (r.isInFleet) {
      card.classList.add("in-fleet")
    }
    else {
      card.classList.remove("in-fleet")
    }
    const fleetToggleBtn = card.querySelector(".fleet-toggle-button")
    fleetToggleBtn.textContent = r.isInFleet ? "Levétel flottából" : "Hozzáadás flottához"


    card.querySelector(".cpl-output").textContent = getCostPerLaunch(r.data) + " $"
    card.querySelector(".leo-output").textContent = r.data.payloadToLeoKg + " kg"


    if (showingFleetRockets && !r.isInFleet) {
      card.classList.add("hidden")
    }
  })
}

function _initCards(rocketData) {
  const wrapper = document.querySelector("#card-wrapper")
  wrapper.innerHTML = ""

  let temp = document.querySelector("#card-template");
  rocketData.forEach((r, i) => {
    let template = temp.content.cloneNode(true);
    let card = template.querySelector(".card")

    const titleEl = card.querySelector(".card-title")
    titleEl.textContent = r.data.name

    const selectBtn = card.querySelector(".card-select-btn")
    selectBtn.onclick = () => trySelectForCompare(r.id)

    const fleetToggleBtn = card.querySelector(".fleet-toggle-button")
    fleetToggleBtn.textContent = r.isInFleet ? "Levétel flottából" : "Hozzáadás flottához"
    fleetToggleBtn.onclick = () => {
      toggleIsInFleet(r.id)
    }

    const bgEl1 = card.querySelector(".card-bg-1")
    const bgEl2 = card.querySelector(".card-bg-2")
    bgEl1.src = r.data.images[0]
    bgEl2.src = r.data.images[1] ?? r.data.images[0]


    card.id = `card-${r.id}`

    wrapper.appendChild(card)
  })

  updateCards(rocketData)
}

window.onload = _init
