import getCostPerLaunch from "./getCostPerLaunch"

const comparisonParams = [
    {
        name: "magasság",
        method: (r) => r.data.height
    },
    {
        name: "átmérő",
        method: (r) => r.data.diameter
    },
    {
        name: "alaptömeg",
        method: (r) => r.data.mass
    },
    {
        name: "fokozatok száma",
        method: (r) => r.data.stageCount
    },
    {
        name: "hajtóművek száma",
        method: (r) => r.data.engineCount
    },
    {
        name: "LEO teherbírás",
        method: (r) => r.data.payloadToLeoKg
    },
    {
        name: "kilövési költség",
        method: (r) => getCostPerLaunch(r.data)
    }
]

export const getComparisonData = (rocket) => {
    return comparisonParams.map(param => {
        return {
            name: param.name,
            value: param.method(rocket)
        }
    })
}
