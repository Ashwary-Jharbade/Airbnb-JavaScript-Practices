// Use object method shorthand
const obj = {
  state: 1,
  modifyState(state) {
    return obj.state + state;
  },
};
