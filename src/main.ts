import { ErrorMapper } from 'utils/ErrorMapper';
import { print } from 'utils/print';
import { spawnCreep } from 'structures/spawn';
import { assignCreepTasks, determineClosestSource } from 'state';

declare global {
    interface Memory {
        spawnQueue: Array<[BodyPartConstant[], string, SpawnOptions]>;
        sources: {
            [sourceId: Id<Source>]: {
                drillers: number;
            };
        };
    }

    interface CreepMemory {
        role: 'driller' | 'hauler';
        sourceId?: Id<Source>;
    }
}

export const loop = ErrorMapper.wrapLoop(() => {
    console.log(`Current game tick is ${Game.time}`);

    const creepsCount = Object.keys(Game.creeps).length;
    const availableRooms = Object.keys(Game.rooms);
    const roomEnergy = Game.rooms[availableRooms[0]].energyAvailable;

    // GAME START
    if (availableRooms.length === 1 && creepsCount === 0 && roomEnergy <= 300) {
        Memory.spawnQueue = [];
        Memory.sources = {};

        // Add two basic creeps to spawn queue
        Memory.spawnQueue.push(
            [
                [WORK, MOVE],
                'BasicDriller',
                {
                    directions: [TOP],
                    memory: { role: 'driller', sourceId: determineClosestSource('spawn0') },
                },
            ],
            [
                [WORK, CARRY],
                'BasicTransporter',
                {
                    directions: [LEFT],
                    memory: { role: 'hauler' },
                },
            ]
        );
    }

    assignCreepTasks();
    spawnCreep('spawn0');
});
