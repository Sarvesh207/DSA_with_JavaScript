/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  //  Find the middle
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half

  let prev = null;
  let curr = slow;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  //  check palindrome

  let startPoint = head;
  let secondPoint = prev;

  while (secondPoint) {
    if (startPoint.val != secondPoint.val) {
      return false;
    }

    startPoint = startPoint.next;
    secondPoint = secondPoint.next;
  }

  return true;
};
