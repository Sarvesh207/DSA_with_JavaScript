/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let ans = new ListNode();
  let ansHead = ans;
  let carry = 0;

  while (l1 || l2 || carry) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    let digit = sum % 10;

    let newNode = new ListNode(digit);

    ans.next = newNode;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    ans = ans.next;
  }

  return ansHead.next;
};
