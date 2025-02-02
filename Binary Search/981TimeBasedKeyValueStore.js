
var TimeMap = function() {
  this.keyStore = new Map()
};

/**
* @param {string} key
* @param {string} value
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.keyStore.has(key)) {
      this.keyStore.set(key, []);
  }
  this.keyStore.get(key).push([timestamp, value]);
};

/**
* @param {string} key
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
  const values = this.keyStore.get(key) || [];
  let l = 0;
  let r = values.length - 1;
  let res = '';

  while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (values[mid][0] <= timestamp) {
          res = values[mid][1];
          l = mid + 1;
      } else {
          r = mid - 1;
      }
  }
  return res;
};

/**
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/