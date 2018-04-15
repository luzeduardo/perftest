const delay = _ => {
  return new Promise(resolve => setTimeout(resolve, 500));
}

const delayedLog = async (item) => {
  await delay();
  console.log(item)
}

const paralleliterator = async (array) => {
  const promises = array.map(delayedLog);
  return await Promise.all(promises);
}

module.exports = paralleliterator;