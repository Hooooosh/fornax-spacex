
export default function mapRockets(rawRockets) {
    return rawRockets.map(r => ({
        name: r.name,
        active: r.active,
        stageCount: r.stages,
        engineCount: r.engines.number,
        payloadToLeoKg: r.payload_weights.find(p => p.id === 'leo').kg,
        height: r.height.meters,
        diameter: r.diameter.meters,
        mass: r.mass.kg,
        images: r.flickr_images
    }))
}


/* 
név, 
aktív státusz, 
fokozatok száma, 
hajtóművek száma, 
teherbírás LEO-ra, 
magasság, 
átmérő, 
súly, 
kép
 */