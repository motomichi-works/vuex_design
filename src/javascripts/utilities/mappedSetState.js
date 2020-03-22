export default function mappedSetState (payload, modulePath = '') {
  if (modulePath === '') {
    this.$store.commit('setState', {
      key: payload.key,
      value: payload.value,
    });

    return;
  }

  this.$store.commit(`${modulePath}/setState`, {
    key: payload.key,
    value: payload.value,
  });
}