class MyURLSearchParams {
    /**
     * @param {string} init
     */
    constructor(init) {
      this.map = new Map();
  
      if (init.startsWith('?')) init = init.slice(1);
  
      const pairs = init.split('&').filter(Boolean);
  
      for (const pair of pairs) {
        const [rawKey, rawValue = ''] = pair.split('=');
        const key = decodeURIComponent(rawKey);
        const value = decodeURIComponent(rawValue);
        this.append(key, value);
      }
    }
  
    /** 
     * @param {string} name
     * @param {any} value
     */
    append(name, value) {
      name = String(name);
      value = String(value);
      if (!this.map.has(name)) {
        this.map.set(name, []);
      }
      this.map.get(name).push(value);
    }
  
    /**
     * @param {string} name
     */
    delete(name) {
      this.map.delete(name);
    }
  
    /**
     * @returns {Iterator}
     */
    *entries() {
      for (const [key, values] of this.map.entries()) {
        for (const value of values) {
          yield [key, value];
        }
      }
    }
  
    /**
     * @param {(value: string, key: string) => void} callback
     */
    forEach(callback) {
      for (const [key, values] of this.map.entries()) {
        for (const value of values) {
          callback(value, key);
        }
      }
    }
  
    /**
     * @param {string} name
     * @return {string|null}
     */
    get(name) {
      const values = this.map.get(name);
      return values ? values[0] : null;
    }
  
    /**
     * @param {string} name
     * @return {string[]}
     */
    getAll(name) {
      return this.map.get(name) || [];
    }
  
    /**
     * @param {string} name
     * @return {boolean}
     */
    has(name) {
      return this.map.has(name);
    }
  
    /**
     * @returns {Iterator}
     */
    *keys() {
      for (const [key, values] of this.map.entries()) {
        for (let _ of values) {
          yield key;
        }
      }
    }
  
    /**
     * @param {string} name
     * @param {any} value
     */
    set(name, value) {
      this.map.set(String(name), [String(value)]);
    }
  
    // sort all key/value pairs based on the keys
    sort() {
      const sorted = [...this.map.entries()].sort(([a], [b]) => a.localeCompare(b));
      this.map = new Map(sorted);
    }
  
    /**
     * @return {string}
     */
    toString() {
      const params = [];
      for (const [key, values] of this.map.entries()) {
        for (const value of values) {
          params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
      }
      return params.join('&');
    }
  
    /**
     * @returns {Iterator}
     */
    *values() {
      for (const values of this.map.values()) {
        for (const value of values) {
          yield value;
        }
      }
    }
  
    [Symbol.iterator]() {
      return this.entries();
    }
  }
  