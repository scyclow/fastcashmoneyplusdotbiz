import { createConstants } from '../utilities/redux-utils';

const types = createConstants(
  'MOUSE_MOVE',
  'ADD_TARGET',
  'REMOVE_TARGET',
  'PAGE_SCROLL'
);

function mouseMovement({ x = 0, y = 0 }) {
  return {
    type: types.MOUSE_MOVE,
    coords: { x, y }
  };
}

function addTarget(id, { x = 0, y = 0 }) {
  return {
    type: types.ADD_TARGET,
    coords: { x, y },
    id
  };
}

function removeTarget(id) {
  return {
    type: types.REMOVE_TARGET,
    id
  };
}

function pageScroll(scrollY) {
  return {
    type: types.PAGE_SCROLL,
    scrollY
  };
}

export default {
  types,
  addTarget,
  removeTarget,
  mouseMovement,
  pageScroll
};
