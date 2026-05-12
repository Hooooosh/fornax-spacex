import getCostPerLaunch from "./getCostPerLaunch"
import WaterfallText from "./waterfallTextClass"

const waterfallKgCharElements = []
const waterfallCostCharElements = []

export function updateWaterfallTexts(rocketData) {
    const activeCount = rocketData.filter(r => r.isInFleet).length

    let avgCost = 0
    let totalPayload = 0
    if(activeCount) {
        avgCost = Math.floor(rocketData.filter(e => e.isInFleet).reduce((acc, r) => acc + getCostPerLaunch(r.data), 0) / activeCount)
        totalPayload = Math.floor(rocketData.filter(e => e.isInFleet).reduce((acc, r) => acc + r.data.payloadToLeoKg, 0))
    }

    const avgCostStr = avgCost.toString().split("").reverse().join("")
    const totalPayloadStr = totalPayload.toString().split("").reverse().join("")

    waterfallCostCharElements.forEach((t, idx) => {
        setTimeout(() => {
            const digit = avgCostStr.length > idx ? avgCostStr[idx] : null
            t.setShownIndex(digit)
        }, idx * 75);
    })
    waterfallKgCharElements.forEach((t, idx) => {
        setTimeout(() => {
            const digit = totalPayloadStr.length > idx ? totalPayloadStr[idx] : null
            t.setShownIndex(digit)
        }, idx * 75);
    })
}

export function initWaterfallTexts() {
    const DIGITS = 10
    /* a flottába helyezett rakéták összesített teherbírása (LEO, kg), */
    let parent = document.querySelector("#topbar-kg")
    for (let i = 0; i < DIGITS; i++) {
        const id = `topbar-kg-${i}`
        const wt = new WaterfallText(parent, id)
        waterfallKgCharElements.unshift(wt)
        wt._update()
    }

    /* a flottába helyezett rakéták átlagos kilövési költsége (a 3. pont képlete alapján). */
    parent = document.querySelector("#topbar-cost")
    for (let i = 0; i < DIGITS; i++) {
        const id = `topbar-cost-${i}`
        const wt = new WaterfallText(parent, id)
        waterfallCostCharElements.unshift(wt)
        wt._update()
    }
}