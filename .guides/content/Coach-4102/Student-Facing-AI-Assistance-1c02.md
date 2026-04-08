##

## Verifying Red-Black Tree

<div style="background-color:rgba(3, 30, 60, 0.05); padding:10px 10px 5px 10px;">

**Breakfast stands vigilant, armed with the knowledge of Cypher's target. The mission is clear: to fortify the Red-Black trees that guard the city's most sensitive data. As the hacker's digital tendrils creep ever closer, it's imperative to ensure that these trees remain perfectly balanced, impervious to any form of cyber assault.**

### ++Problem++

**Your task is to verify that Cypher has not tampered with a given Red-Black tree. The method `nthSmallest` will be the first line of defense, by giving us a way to check the value of the $n^{th}$ smallest node for a given color.**

**The `nthSmallest` method takes a `Tree` object, an integer representing the color (`1` for red and `0` for black) of the node, and another integer representing the $n{th}$ position. The method returns an integer representing the value of the desired node.**

```java -hide-clipboard
public static int nthSmallest(Tree tree, int color, int position)
```

<details>
<summary><strong>Hint</strong></summary>
<blockquote>

The `Tree` class has the following public method which you may find helpful:
* `public Node getRoot()` - returns the root node of the tree.

The `Node` class has the following public methods which you may find helpful:
* `public int getColor()` - returns the color of the node; `1` represents red and `0` represents black.
* `public int getValue()` - returns the value stored in the node.
* `public Node getLeft()` - returns the left child.
* `public Node getRight()` - returns the right child.

</blockquote>
</details>

### ++Expected Output++

**++Compilation++**
**Be sure that your code compiles without any errors before using the test cases. Click the button below to compile your code.**

{Compile Code}(javac code/rb-smallest/Smallest.java code/rb-smallest/Helper.java)

**++Test Case 1++**
**The first test case finds the third smallest red node in the following Red-Black tree:**

<div style="width:70%; margin:auto">

![The image shows a red black tree. The nodes are 62 (black), 33 (black), 57 (red), 99 (red), 75 (black), 67 (red), 80 (red), and 129 (black).](.guides/img/rb-smallest1.png)

</div>

**You should see the following output:**

```tex -hide-clipboard
80
```

{Test Case 1}(java -cp code/rb-smallest/ Smallest 1 1 3)

---

**++Test Case 2++**
**The second test case finds the second smallest black node in the following Red-Black tree:**

<div style="width:70%; margin:auto">

![The image shows a red black tree. The nodes are 43 (black), 24 (black), 12 (red), 187 (red), 74 (black), 265 (black), 68 (red), and 99 (red).](.guides/img/rb-smallest2.png)

</div>

**You should see the following output:**

```tex -hide-clipboard
43
```

{Test Case 2}(java -cp code/rb-smallest/ Smallest 2 0 2)

</div>

{Check It!|assessment}(code-output-compare-1494437039)
