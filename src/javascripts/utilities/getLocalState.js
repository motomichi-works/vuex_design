export default function getLocalState (rootState, moduleNames) {
  const stateObjects = [rootState];

  for (let i = 0; i < moduleNames.length; i++) {
    stateObjects[i + 1] = stateObjects[i][moduleNames[i]];
  }

  const localState = stateObjects.pop();

  return localState;
};
