import identity from 'lodash/utility/identity';

function createReducer(
  initialState, reducerMap = {}, handleDefault = identity
) {
  return (state = initialState, action = {}) =>
    (reducerMap[action.type] || handleDefault)(state, action);
}

function createConstants(...constants) {
  return constants.reduce((output, constant) => {
    output[constant] = constant;
    return output;
  }, {});
}

export default { createConstants, createReducer };
