import java.util.*;

class Node {
    private int value;
    Node parent;
    private Node left, right;
    private int color; // 0 for black, 1 for red

    public Node(int v) {
        value = v;
        color = 1; // New nodes are always red
    }

    public int getColor() {
      return color;
    }

    public Node getLeft() {
      return left;
    }

    public Node getRight() {
      return right;
    }

    public void setColor(int c) {
      color = c;
    }

    public int getValue() {
      return value;
    }

    public void setLeft(Node n) {
      left = n;
    }

    public void setRight(Node n) {
      right = n;
    }
}

class Tree {
    private Node root;

    public Node getRoot() {
      return root;
    }

    public void insert(int value) {
        Node newNode = new Node(value);
        root = insert(root, null, newNode);
        fixTree(newNode); // Fix violations after insertion
        root.setColor(0); // Ensure the root is always black
    }

    private Node insert(Node node, Node parent, Node newNode) {
        if (node == null) {
            newNode.parent = parent;
            return newNode;
        }

        if (newNode.getValue() < node.getValue()) {
            node.setLeft(insert(node.getLeft(), node, newNode));
        } else if (newNode.getValue() > node.getValue()) {
            node.setRight(insert(node.getRight(), node, newNode));
        }

        return node;
    }

    private Node leftRotate(Node x) {
        Node y = x.getRight();
        Node newSubtree = y.getLeft();

        y.setLeft(x);
        x.setRight(newSubtree);

        y.parent = x.parent;

        if (x.parent == null) {
            root = y;
        } else if (x == x.parent.getLeft()) {
            x.parent.setLeft(y);
        } else {
            x.parent.setRight(y);
        }

        x.parent = y;

        return y; // Return the new root of the rotated subtree
    }

    private Node rightRotate(Node x) {
        Node y = x.getLeft();
        Node newSubtree = y.getRight();

        y.setRight(x);
        x.setLeft(newSubtree);

        y.parent = x.parent;

        if (x.parent == null) {
            root = y;
        } else if (x == x.parent.getRight()) {
            x.parent.setRight(y);
        } else {
            x.parent.setLeft(y);
        }

        x.parent = y;

        return y; // Return the new root of the rotated subtree
    }

    private void fixTree(Node node) {
        Node parent = node.parent;

        // Parent is null, we've reached the root, no changes made
        if (parent == null) {
            return;
        }

        // Parent is black, no changes made
        if (parent.getColor() == 0) {
            return;
        }

        // We can assume both parent and child are red

        Node grandparent = parent.parent;
        // No grandparent means the parent is the root. Set to black.
        if (grandparent == null) {
            parent.setColor(0);
            return;
        }

        Node uncle = getUncle(parent);
        if (uncle != null && uncle.getColor() == 1) { // Case 1 uncle is red
            parent.setColor(0);
            grandparent.setColor(1);
            uncle.setColor(0);

            // Call recursively for grandparent
            fixTree(grandparent);
        } else if (parent == grandparent.getLeft()) { // Parent is left child of grandparent
            if (node == parent.getRight()) { // Case 2 "<" triangle formation
                leftRotate(parent); // Rotate to "/" line formation
                parent = node;
            }

            rightRotate(grandparent); // Case 3 "/" line formation

            // Recolor original parent and grandparent
            parent.setColor(0);
            grandparent.setColor(1);
        } else { // Parent is right child of grandparent
            if (node == parent.getLeft()) { // Case 2 ">" triangle formation
                rightRotate(parent); // Rotate to "\" line formation
                parent = node;
            }

            leftRotate(grandparent); // Case 3 "\" line formation

            // Recolor original parent and grandparent
            parent.setColor(0);
            grandparent.setColor(1);
        }
    }

    private Node getUncle(Node parent) {
        Node grandparent = parent.parent;

        if (grandparent.getLeft() == parent) {
            return grandparent.getRight();
        } else {
            return grandparent.getLeft();
        }
    }

}

public class Helper {
    public static Tree generateTree(int type) {
        Tree tree = new Tree();

        if (type == 1) {
            tree.insert(62);
            tree.insert(33);
            tree.insert(99);
            tree.insert(57);
            tree.insert(75);
            tree.insert(129);
            tree.insert(67);
            tree.insert(80);
        } else if (type == 2) {
            tree.insert(43);
            tree.insert(187);
            tree.insert(24);
            tree.insert(99);
            tree.insert(12);
            tree.insert(265);
            tree.insert(74);
            tree.insert(68);
        } else if (type == 3) {
            tree.insert(17);
            tree.insert(18);
            tree.insert(19);
            tree.insert(14);
            tree.insert(15);
            tree.insert(16);
            tree.insert(1);
            tree.insert(20);
        }else if (type == 4) {
            tree.insert(38);
            tree.insert(37);
            tree.insert(36);
            tree.insert(35);
            tree.insert(45);
            tree.insert(47);
            tree.insert(49);
            tree.insert(79);
        }

        return tree;
    }
}