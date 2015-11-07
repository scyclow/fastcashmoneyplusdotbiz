import { Map } from 'immutable';
import { types } from '../actions/mouseMovement';
import { createReducer } from '../utilities/redux-utils';

const { MOUSE_MOVE, ADD_TARGET, REMOVE_TARGET, PAGE_SCROLL } = types;

const initialState = Map({
  coords: { x: 0, y: 0 },
  scrollY: 0,
  targets: Map()
});

const targetDist = (mouseCoords, target) => {
  const xDiff = Math.abs(mouseCoords.x - target.get('x'));
  const yDiff = Math.abs(mouseCoords.y - target.get('y'));
  return Math.sqrt((xDiff ** 2) + (yDiff ** 2));
};

const reducerMap = {
  [MOUSE_MOVE]: (state, { coords }) => {
    const updateTarget = (target) => target.set('distance',
      targetDist(coords, target)
    );

    return state
      .set('coords', coords)
      .update('targets', (targets) => targets.map(updateTarget));
  },

  [ADD_TARGET]: (state, { id, coords }) => {
    const { x, y } = coords;
    return state.setIn(['targets', id],
      Map({ x, y, distance: 0 })
    );
  },

  [REMOVE_TARGET]: (state, { id }) => state.remove(id),
  [PAGE_SCROLL]: (state, { scrollY }) => state.set('scrollY', scrollY)
};

const mouseMovement = createReducer(initialState, reducerMap);

export default mouseMovement;
