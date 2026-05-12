import { getComparisonData } from "./getComparisonData"

export default function displayComparisonTable(selectedRockets) {
  const comparisonData1 = getComparisonData(selectedRockets[0])
  const comparisonData2 = getComparisonData(selectedRockets[1])
  const tBody = document.querySelector("#compare-table-body")
  const tHead = document.querySelector("#compare-table-head")
  tBody.innerHTML = ""
  tHead.innerHTML = ""

  document.querySelector("#table-wrapper").classList.add("shown")

  /* thead */
  const emptyCell = document.createElement("th")
  const title1 = document.createElement("th")
  const title2 = document.createElement("th")
  title1.textContent = selectedRockets[0].data.name
  title2.textContent = selectedRockets[1].data.name
  title1.classList.add("font-bold", "text-base")
  title2.classList.add("font-bold", "text-base")
  emptyCell.scope = "col"
  title1.scope = "col"
  title2.scope = "col"
  tHead.appendChild(emptyCell)
  tHead.appendChild(title1)
  tHead.appendChild(title2)

  /* tbody */
  for (let i = 0; i < comparisonData1.length; i++) {
    const tr = document.createElement("tr")

    let chosenArrowCell1 = "/ri/equal-s-fill.svg"
    let chosenArrowCell2 = "/ri/equal-s-fill.svg"
    if (comparisonData1[i].value > comparisonData2[i].value) {
      chosenArrowCell1 = "/ri/arrow-up-s-fill.svg"
      chosenArrowCell2 = "/ri/arrow-down-s-fill.svg"
    }
    else if (comparisonData1[i].value < comparisonData2[i].value) {
      chosenArrowCell1 = "/ri/arrow-down-s-fill.svg"
      chosenArrowCell2 = "/ri/arrow-up-s-fill.svg"
    }

    const rawCell1Html = `
      <td>
        <div class="flex justify-between">
          <span>${comparisonData1[i].value}</span>
          <img src="${chosenArrowCell1}" class="inline w-4 h-4 ml-1 opacity-60" />
        </div>
      </td>
    `
    const rawCell2Html = `
      <td>
        <div class="flex justify-between">
          <span>${comparisonData2[i].value}</span>
          <img src="${chosenArrowCell2}" class="inline w-4 h-4 ml-1 opacity-60" />
        </div>
      </td>
    `

    const rawTitleCellHtml = `
      <th>
        <p>${comparisonData1[i].name}</p>
      </th>
    `

    tr.innerHTML = rawTitleCellHtml + rawCell1Html + rawCell2Html
    tr.style.opacity = "0"
    tr.style.transform = "translateX(-10px)"
    tr.style.transitionDuration = "0.4s"
    setTimeout(() => {
      tr.style.opacity = "1"
      tr.style.transform = "translateX(0)"
    }, 60 * i)
    tBody.appendChild(tr)
  }
}