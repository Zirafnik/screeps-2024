import { ErrorMapper } from 'utils/ErrorMapper';

export const loop = ErrorMapper.wrapLoop(() => {
    console.log(`Current game tick is ${Game.time}`);
});
