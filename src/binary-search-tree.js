const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = new Node(data);
    }
    addToTree(this.rootNode, data);

    function addToTree(node, value) {
      if (node === null) {
        return new Node(value)
      }
      else if (node.data > value) {
        node.left = addToTree(node.left, value);
      }
      else if(node.data < value) {
        node.right = addToTree(node.right, value);
      }
      else {
        return node;
      }
      return node;
    }
    // remove line with error and write your code here
  }

  has(data) {
    return hasValue(this.rootNode, data);

    function hasValue(node, value) {
      if (node === null) {
        return false;
      }
      else if (node.data === value) {
        return true;
      }
      else if (node.data > value) {
        return hasValue(node.left, value);
      }
      else {
        return hasValue(node.right, value);
      }
    }
    // remove line with error and write your code here
  }

  find(data) {
    return findValue(this.rootNode, data);

    function findValue(node, value) {
      if (node === null) {
        return null;
      }
      else if (node.data === value) {
        return node;
      }
      else if (node.data > value) {
        return findValue(node.left, value);
      }
      else {
        return findValue(node.right, value)
      }
    }
    // remove line with error and write your code here
  }

  remove(data) {
    return removeFromTree(this.rootNode, data);
    function removeFromTree(node, value) {
      if(node === null) {
        return null;
      }
      else if (node.data > value) {
        node.left = removeFromTree(node.left, value);
        return node;
      }
      else if (node.data < value) {
        node.right = removeFromTree(node.right, value);
        return node;
      }
      else {
        if (node.left === null && node.right === null) {
          return null;
        }
        else if (node.left === null) {
          return node.right;
        }
        else if (node.right === null) {
          return node.left;
        }
        else {
          let maxLeft = node.left;
          while (maxLeft.right !== null) {
            maxLeft = maxLeft.right;
          }
          node.data = maxLeft.data;
          node.left = removeFromTree(node.left, maxLeft.data);
          return node;
        }
      }
    }
    // remove line with error and write your code here
  }

  min() {
    let ptr = this.rootNode;
    if (ptr === null) {
      return null;
    }
    while (ptr.left) {
      ptr = ptr.left;
    }
    return ptr.data;
    // remove line with error and write your code here
  }

  max() {
    let ptr = this.rootNode;
    if (ptr === null) {
      return null;
    }
    while (ptr.right !== null) {
      ptr = ptr.right;
    }
    return ptr.data;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};