export const driller = {
    run: function (creep: Creep) {
        const sourceId = creep.memory.sourceId;

        if (sourceId) {
            // Add driller count to source
            if (Memory.sources[sourceId]?.drillers) {
                Memory.sources[sourceId].drillers += 1;
            } else {
                Memory.sources[sourceId] = { drillers: 1 };
            }

            const target = Game.getObjectById(sourceId);

            if (target && creep.harvest(target) === ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        } else {
            console.log(`${creep.name} has no .sourceId`);
        }
    },
    recordSource: function (creep) {
        {
        }
    },
};
