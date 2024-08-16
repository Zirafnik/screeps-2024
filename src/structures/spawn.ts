export function spawnCreep(name: string) {
    if (!Game.spawns[name].spawning && Memory.spawnQueue.length) {
        // Get first creep in queue
        const creepData = Memory.spawnQueue.shift()!;

        // Adjust name with tick time
        creepData[1] = `${creepData[1]}${Game.time}`;

        Game.spawns[name].spawnCreep(...creepData);
    }
}
