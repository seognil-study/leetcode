'use strict';
/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  // * ['48 ms', '98.66 %', '34.9 MB', '73.91 %']
  // * null    cur  -> next -> ...
  // * prev    cur     next
  // * prev <- cur     next
  // *         prev    cur   next
  let cur = head;
  let prev = null;
  let next;
  while (cur !== null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};
exports.reverseList = reverseList;
