package main

type ListNode struct {
	Val  int
	Next *ListNode
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	head := &ListNode{0, nil}
	tail := head

	prevAdd := 0

	for l1 != nil || l2 != nil || prevAdd != 0 {
		val := prevAdd

		if l1 != nil {
			val += l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			val += l2.Val
			l2 = l2.Next
		}

		tail.Next = &ListNode{
			val % 10,
			nil,
		}
		tail = tail.Next

		prevAdd = int(val / 10)
	}

	return head.Next
}
