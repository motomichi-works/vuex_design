export default function setState (state, payload) {
  state[payload.key] = payload.value;
}
