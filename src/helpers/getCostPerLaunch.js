export default function getCostPerLaunch(rocket) {
    console.log(rocket)
    let cost = 5000000
    if (rocket.stageCount > 2) {
        cost *= 1.1
    }
    cost += rocket.engineCount * 50000
    return cost
}
/* Alapdíj: $5,000,000
Ha a rakéta több mint 2 fokozatú (stages > 2): +10% felár az addigi összegre
Minden egyes hajtómű (engines.number) után: +$50,000 */