import java.util.ArrayList;
import java.util.List;

/**
 * Created by lee on 8/16/17.
 怎么计算consistentHashing的
 */

public class Solution {
    public List<List<Integer>> consistentHashing(int n) {
        // Write your code here
        List<List<Integer>> results = new ArrayList<List<Integer>>();
        List<Integer> machine = new ArrayList<Integer>();
        machine.add(0);
        machine.add(359);
        machine.add(1);
        results.add(machine);

        System.out.println("1- result" + results.toString());

        for (int i = 1; i < n; ++i) {
            List<Integer> new_machine = new ArrayList<Integer>();
            int index = 0;
            for (int j = 1; j < i; ++j) {
                if (results.get(j).get(1) - results.get(j).get(0) + 1 >
                        results.get(index).get(1) - results.get(index).get(0) + 1)
                    index = j;
            }

            int x = results.get(index).get(0);
            int y = results.get(index).get(1);
            results.get(index).set(1, (x + y) / 2);

            new_machine.add((x + y) / 2 + 1);
            new_machine.add(y);
            new_machine.add(i + 1);
            results.add(new_machine);
        }
        return results;
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        List out = s.consistentHashing(4);
    }



}
