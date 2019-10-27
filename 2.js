function arrToObj(arr) {
  return arr.reduce((acc, el) => {
    acc.id = el.id,
    acc.token = el.token,
    acc.identity = { name: el.name, contact: el.contact }
    return acc
  }, {});
};
console.log(arrToObj([
  {
    id: 1,
    token: '123',
    name: 'name',
    contact: 'lorem ipsum',
  }
]));
