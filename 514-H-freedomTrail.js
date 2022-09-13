// https://docs.google.com/document/d/1WlhuE4JPwy78bJUc6iKI0I3fxiL0Mg-y5dulr9AmEAE/edit#heading=h.libjz7sc9e0b
// I: ring - string; key - string; use string to spell key
// O: output min steps ; to confirm each spell, also need 1 more step

// example: ring: 'godding', key: 'gd', steps: 4
// example: ring: 'goiddido', key: 'od', steps: 4

function findRotateSteps(ring, key) {
  // dynamic programming question
}

console.log(findRotateSteps('godding', 'gd')); // 4
console.log(findRotateSteps('goiddido', 'od')); // 4
console.log(findRotateSteps('godooidoo', 'di')); // 6

// 1st try: heap out of memory
// let steps = key.length;
// let result = [];
// const helper = (step, index, goal) => {
//   if (goal === '') {
//     result.push(step);
//     return;
//   }
//   let count = 0;
//   while (count < ring.length) {
//     if (ring[(index + count) % ring.length] === goal[0]) {
//       helper(
//         step + Math.min(count, ring.length - count),
//         (index + count) % ring.length,
//         goal.slice(1)
//       );
//     }
//     count++;
//   }
// };
// helper(steps, 0, key);
//
// return Math.min(...result);

// // solution:
//   //Initialize a table to track the number of steps to each letter in the key from each starting point in the ring
//   const table = [...Array(key.length + 1)]
//     // fill the table with Number.MAX_VALUE
//     .map((charInKey) => Array(ring.length).fill(Number.MAX_VALUE));
//   // the top row represents the 12 oClock position, it takes 0 steps to get there
//   table[0][0] = 0;
//   //Iterate over each letter in the key
//   for (let k = 1; k <= key.length; k++) {
//     //Iterate over each letter in the ring until the current letter in the key and ring match
//     for (let r = 0; r < ring.length; r++) {
//       if (ring[r] === key[k - 1]) {
//         //Iterate over each possible previous position in the ring
//         for (let pr = 0; pr < ring.length; pr++) {
//           // check if clockwise or counterclockwise is shorter
//           const shorterPath = Math.min(
//             Math.abs(r - pr),
//             ring.length - Math.abs(pr - r)
//           );
//           //Update the table with the minimum number of steps it takes to reach the current letter in the key from the current //starting point in the ring
//           table[k][r] = Math.min(
//             // keep the previous solution if it's smaller -or-
//             table[k][r],
//             // how many steps it took to get to the last character in the key
//             /* NOTE: any position in the above row that isn't
//              * a possible previous place will contain Number.MAX_VALUE.
//              * We won't update the current [k][r] until [k][pr] is lower than Number.MAX_VALUE
//              *
//              */
//             table[k - 1][pr] + shorterPath
//           );
//         }
//       }
//     }
//   }
//   // return the lowest value in the last row + length of the key to simulate button presses
//   return Math.min(...table[key.length]) + key.length;
