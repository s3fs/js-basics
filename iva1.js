class TreeStore {
  constructor(props) {
    this.tree = props
    this.treeMap = new Map(Object.entries(props).map(([k, v]) => [Number(k), v]))
  }

  getAll() {
    return this.tree
  }

  getItem(id) {
    return this.treeMap.get(id - 1)
  }

  getChildren(id) {
    let res = []

    for (let value of this.treeMap.values()) {
      value.parent === id ? res = [...res, value] : null
    }
    
    return res
  }

  getAllParents(id) {
    let arr = []

    const treeFind = (id) => {
      return this.treeMap.get(id - 1)
    }

    treeFind(id) ? arr = [...arr, treeFind(id)] : null
    
    let pid = treeFind(id) && treeFind(id).parent

    while (pid !== undefined && pid !== 'root') {
      arr = [...arr, treeFind(pid)]
      pid = treeFind(pid) && treeFind(pid).parent
    }

    return arr
  }
}

const items = [
    { id: 1, parent: 'root' },
    { id: 2, parent: 1, type: 'test' },
    { id: 3, parent: 1, type: 'test' },

    { id: 4, parent: 2, type: 'test' },
    { id: 5, parent: 2, type: 'test' },
    { id: 6, parent: 2, type: 'test' },

    { id: 7, parent: 4, type: null },
    { id: 8, parent: 4, type: null },
]

const ts = new TreeStore(items)

try {
  console.log(ts.getAllParents(6))
  console.log('three', ts.getItem(3))
  console.log(ts.getChildren(2))
  console.log(ts.getAllParents(7))
} catch (e) {
  console.log(`Whoopsie... ${e}`)
}