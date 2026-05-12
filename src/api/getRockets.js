import mapRockets from "../mappers/rocketMapper"

const FETCH_DELAY = 3000
const FETCH_URL = 'https://api.spacexdata.com/v4/rockets'

export default async function getRockets() {
    const raw = await fetch(FETCH_URL).then(r => r.json())
    /* manualis kesleltetes */
    return await new Promise((res) => {
        setTimeout(() => {
            res(mapRockets(raw))
        }, FETCH_DELAY)
    })
}
