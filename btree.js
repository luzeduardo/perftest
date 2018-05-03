// class BinaryTree {
//   constructor(value = null,left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }

//   * [Symbol.iterator]() {
//     yield this.value;
//     if (this.left) {
//       yield* this.left;
//     }
//     if (this.right) {
//       yield* this.right;
//     }
//   }
// }

class BinaryTree {
  constructor(value = null, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }

  * [Symbol.iterator]() {
    yield this.value;
    if (this.left) {
      yield* this.left;
    }
    if (this.right) {
      yield* this.right;
    }
  }
}
module.exports = BinaryTree