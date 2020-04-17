export default function toggleErrorMessages (args) {
  const constraint = args.constraints[args.constraintsKey];

  if (typeof constraint === 'undefined') return;

  Object.keys(constraint).forEach((validatorName) => {
    constraint[validatorName].event = args.event;
  });

  const errorMessages = args.validate.single(args.value, constraint);

  if (typeof errorMessages === 'undefined' || args.constraintsKey === 'noValidation') {
    // clear realtimeErrors
    this.mappedSetState({
      key: 'realtimeErrors',
      value: [],
    }, args.modulePath);
    return;
  }

  if (!args.isBlured) return;

  // set realtimeErrors
  this.mappedSetState({
    key: 'realtimeErrors',
    value: errorMessages,
  }, args.modulePath);
};
