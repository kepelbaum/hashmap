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
    return {getList, hash, set, get};
}

let main = hashMap();
// console.log(main.getList());
main.set('Carlos', 'I am the old value');
// console.log(main.getList());
main.set('Carlos', 'I am the new value');
console.log(main.getList());
console.log(main.get('Bob'), main.get('Carlos'));

