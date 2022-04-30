// Done

const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  
  constructor() {
    this.top = null;
  }

  root() {
    return this.top
  }

  add(data) {
    let node = new Node(data);

    if (!this.top) {
      this.top = node;
      return this;
    }

    let current = this.top;
    while (current) {
      if (data === current.data) return undefined;
      if (data < current.data) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    let current = this.top;
    if (current.data === data) return true;
    let found = null;
    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return true;
  }

  find(data) {
    if (!this.top) return false;

    let current = this.top;
    let found = false;
    while (current && !found) {
      if (data < current.data) {
        current = current.left
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = current
      }
    }
    if (!found) return null;
    return found;
  }

  remove(data) {
    this.top = this.removeNode(this.top, data);
    return this;
  }

  min() {
    let current = this.top;
    while(current.left) {
      current = current.left
    }
    return current.data;
  }

  max() {
    let current = this.top;
    while(current.right) {
      current = current.right;
    }
    return current.data;
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } 
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

}

// const bst = new BinarySearchTree();

// console.log(bst.add(5).add(9).add(3).add(2).add(1).remove(5));

module.exports = {
  BinarySearchTree
};