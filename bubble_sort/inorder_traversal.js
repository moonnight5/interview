// 中序遍历 一棵树 递归的概念
// 中序遍历 左子树 根节点 右子数
function TreeNode(val) {
  this.val = val
  this.right = this.left = null
}

let a1 = new TreeNode(1);
// let a2 = new TreeNode(null);
let a2 = new TreeNode(2);
let a3 = new TreeNode(3);

a1.right = a2;
a2.left = a3;


var inorderTraversal = function (root) {
  let arr = [];
  const inorder = root => {
    if (root === null) return null
    inorder(root.left);
    arr.push(root.val);
    inorder(root.right);
  };
  inorder(root);

  return arr;
}

console.log(inorderTraversal(a1));
