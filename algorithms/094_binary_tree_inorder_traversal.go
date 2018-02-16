package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func inorderTraversal(root *TreeNode) []int {
	result := []int{}
	if root == nil {
		return result
	}

	return inorderTraversalIter(root, result)
}

func inorderTraversalIter(root *TreeNode, result []int) []int {
	if root.Left != nil {
		result = inorderTraversalIter(root.Left, result)
	}

	result = append(result, root.Val)

	if root.Right != nil {
		result = inorderTraversalIter(root.Right, result)
	}

	return result
}
