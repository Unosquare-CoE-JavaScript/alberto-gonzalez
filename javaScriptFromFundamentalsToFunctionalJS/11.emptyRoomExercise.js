const newEvelopment = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dinig room": true },
      { "billiard room": true },
      { library: true },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dinig room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
];

var notInRoom = (suspect, memo) => {
  const emptyRooms = reduce(
    suspect.rooms,
    (room, memo) => {
      if (room === false) memo.push(room);
      return memo;
    },
    []
  );
  return emptyRooms;
};

let notInRooms = _.map(newEvelopment, notInRoom);

_.intersection(...notInRooms);
