var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1
};

var SANTA = {
  initialized : false,
  collected : [],
  latest : {
    x : 0,
    y : 0
  },
  points : 0
};

var PRESENTS = {
  initialized : false,
  positions : [],
  speeds : [],
  collisions : [],
  latest : {
    x : 0,
    y : 0
  }
}
