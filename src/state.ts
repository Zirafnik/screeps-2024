import { driller } from 'roles/driller';

export function assignCreepTasks(): void {
    for (const creepName in Game.creeps) {
        const creep = Game.creeps[creepName];

        switch (creep.memory.role) {
            case 'driller':
                driller.run(creep);
                break;
            case 'hauler':
                console.log('Hauler: TBA');
                break;
            default:
                console.log(`${creep.name} could not be assigned a job!`);
        }
    }
}

export function determineClosestSource(spawnName: string): Id<Source> | undefined {
    const spawn = Game.spawns[spawnName];

    // Find available energy sources
    const allFreeSources = spawn.room.find(FIND_SOURCES).filter((source) => Memory.sources[source.id]?.drillers < 1);

    const closestSource = spawn.pos.findClosestByPath(allFreeSources);

    return closestSource?.id;
}
