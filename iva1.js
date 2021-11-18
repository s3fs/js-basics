class TreeStore {
  constructor(props) {
    this.tree = props
  }

  getAll() {
    return this.tree
  }

  getItem(id) {
    return this.tree.find(x => x.id === id) || null
  }

  getChildren(id) {
    return this.tree.filter(x => x.parent === id)
  }

  getAllParents(id) {
    let arr = []

    const treeFind = (id) => {
      return this.tree.find(x => x.id === id)
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

console.log(ts.getAllParents(6))