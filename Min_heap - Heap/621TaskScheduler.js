/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let count = new Array(26).fill(0);

  for (let task of tasks) {
      count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
  }

  const maxf = Math.max(...count);
  let maxCount = 0;
  for (const i of count) {
      if (i === maxf) {
          maxCount++;
      }
  }
  const time = (maxf - 1) * (n + 1) + maxCount;
  return Math.max(tasks.length, time);

  // Greedy
  // count.sort((a, b) => a - b);
  // const maxf = count[25];
  // let idle = (maxf - 1) * n;

  // for (let i = 24; i >=0; i--) {
  //     idle -= Math.min(maxf - 1, count[i]);
  // }

  // return Math.max(0, idle) + tasks.length;


  // Max-heap solution

  // let maxHeap = new MaxPriorityQueue();
  // for (let i = 0; i < 26; i++) {
  //     if (count[i] > 0) maxHeap.push(count[i]);
  // }

  // let time = 0;
  // let q = new Queue();

  // while (maxHeap.size() > 0 || q.size() > 0) {
  //     time++;

  //     if (maxHeap.size() > 0) {
  //         let cnt = maxHeap.pop() - 1;
  //         if (cnt !== 0) {
  //             q.push([cnt, time + n]);
  //         }
  //     }

  //     if (q.size() > 0 && q.front()[1] === time) {
  //         maxHeap.push(q.pop()[0]);
  //     }
  // }
  // return time;
};