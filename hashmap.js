function hashMap () {
    let list = init();
    function init () {
        let first = [];
        for (i = 0; i < 16; i++) {
            first.push([]);
        }
        return first;
    }
    let getList = () => list;
    function hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
          hashCode = hashCode % 16;
        }
        return hashCode;
      }     
    function set(key, value) {
        let hashCode = hash(key);
        let toggle = 0;
        list[hashCode].forEach((obj) => {
            if (obj.key === key) {
                toggle = 1;
                obj.value = value;
            }
        }) 
        if (toggle === 0) {
            list[hashCode].push({key, value});
        }
    }
    function get(key) {
        let hashCode = hash(key);
        let temp = null;
        list[hashCode].forEach((obj) => {
            if (obj.key === key) {
                temp = obj.value;
            }
        }) 
        return temp;
    }
    function has(key) {
        let hashCode = hash(key);
        let temp = false;
        list[hashCode].forEach((obj) => {
            if (obj.key === key) {
                temp = true;
            }
        }) 
        return temp;
    }
    function remove(key) {
        let hashCode = hash(key);
        let temp = false;
        for (let i = 0; i < list[hashCode].length; i++) {
            if (list[hashCode][i].key === key) {
                temp = true;
                list[hashCode].splice(i, 1);
                break;
            }
        }
        return temp;
    }
    function length() {
        let len = 0;
        for (i = 0; i < 16; i++) {
            list[i].forEach((obj) => len++);
        }
        return len;
    }
    function clear() {
        list = init();
    }
    function keys() {
        let arr = [];
        for (i = 0; i < 16; i++) {
            list[i].forEach((obj) => arr.push(obj.key));
        }
        return arr;
    }
    function values() {
        let arr = [];
        for (i = 0; i < 16; i++) {
            list[i].forEach((obj) => arr.push(obj.value));
        }
        return arr;
    }
    function entries() {
        let arr = [];
        for (i = 0; i < 16; i++) {
            list[i].forEach((obj) => arr.push([obj.key, obj.value]));
        }
        return arr;
    }
    return {getList, hash, set, get, has, remove, length, clear, keys, values, entries};
}

let main = hashMap();
// console.log(main.getList());
main.set('Carlos', 'I am the old value');
// console.log(main.getList());
main.set('Carlos', 'I am the new value');
main.set('Bob', 'hehe');
// console.log(main.getList());
// console.log(main.get('Bob'), main.get('Carlos'));
// console.log(main.has('Bob'), main.has('Carlos'));
// main.remove('Bob');
// main.clear();
console.log(main.length());
// console.log(main.keys(), main.values());
console.log(main.entries());


