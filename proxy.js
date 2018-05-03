const target = {}
const p = new Proxy(target, {
  get(target, property) {
    return target[property] || 'default'
  },
  set(target, property, value) {
    console.log(target, property, value)
  }
});

export default p;