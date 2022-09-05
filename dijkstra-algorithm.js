const graph = {
  start: { A: 50, B: 20 },
  A: { C: 40, D: 20 },
  B: { A: 90, D: 90 },
  C: { D: 160, finish: 50 },
  D: { finish: 20 },
  finish: {},
};
const start = "start";
const finish = "finish";
/*
  const graph = {
    1: { 2: 2, 4: 3 },
    2: { 4: 4, 3: 4, 1: 2 },
    4: { 1: 3, 2: 4, 3: 5 },
    3: { 2: 4, 4: 5, 5: 6 },
  };
  const start = "1";
  const finish = "5";
  */
const distance = (graph, start, finish) => {
  let minVals = { start: [0, [String(start)]] };
  for (let key in graph) {
    for (let keyWay in graph[key]) {
      let way = graph[key][keyWay];
      if (keyWay in minVals && key in minVals) {
        if (minVals[keyWay][0] > minVals[key][0] + way) {
          minVals[keyWay] = [
            minVals[key][0] + way,
            minVals[key][1].concat([keyWay]),
          ];
        }
      } else {
        minVals[keyWay] = [
          minVals[key][0] + way,
          minVals[key][1].concat([keyWay]),
        ];
      }
    }
  }
  return {
    distance: minVals[finish][0],
    path: minVals[finish][1],
  };
};

console.log(distance(graph, start, finish));
