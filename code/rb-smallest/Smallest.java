// FREEZE CODE BEGIN
import java.util.*;

class Smallest {
// FREEZE CODE END

// CODIO SOLUTION BEGIN

    public static int nthSmallest(Tree tree, int color, int position) {
        ArrayList<Integer> nodes = new ArrayList<Integer>();
        nthSmallest(tree.getRoot(), color, nodes);
        return nodes.get(position - 1);
    }

    private static void nthSmallest(Node n, int color, ArrayList<Integer> nodes) {
        if (n != None) {
            nthSmallest(n.getLeft(), color, nodes);
            if (n.getColor() == color) {
                nodes.add(n.getValue());
            }
            nthSmallest(n.getRight(), color, nodes);
        }
    }

// CODIO SOLUTION END



// FREEZE CODE BEGIN
    public static void main(String[] args) {
        int treeType = Integer.parseInt(args[0]);
        Tree tree = Helper.generateTree(treeType);
        int color = Integer.parseInt(args[1]);
        int position = Integer.parseInt(args[2]);
        System.out.println(nthSmallest(tree, color, position));
    }
}
// FREEZE CODE END