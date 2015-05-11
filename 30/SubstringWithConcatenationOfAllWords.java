public class Solution {
    public List<Integer> findSubstring(String S, String[] L) {
        List<Integer> rslt = new ArrayList<Integer>();

        // edge case
        if(L.length==0) return rslt;

        // initialize k queues and k maps
        int k = L[0].length();
        int queues[] = new int[k];
        List<Map<String, Integer>> maps = new ArrayList<Map<String, Integer>>();
        Map<String, Integer> map_temp = new HashMap<String, Integer>();
        for(int i = 0;i < L.length;i++) setMap(map_temp, L[i]);
        for(int i = 0;i < k;i++) queues[i] = 0;
        for(int i = 0;i < k;i++) maps.add(new HashMap<String, Integer>(map_temp));

        // go though S
        for(int i = 0;i <= S.length()-k;i++){
            Map<String, Integer> map = maps.get(i%k);
            String s = S.substring(i,i+k);
            if(map.containsKey(s)){
                queues[i%k]++;
                map.put(s,map.get(s)-1);
                if(map.get(s)==0) map.remove(s);
                // find a match
                if(queues[i%k]==L.length){
                    rslt.add(i-(queues[i%k]-1)*k);
                    setMap(map, S.substring(i-k*(queues[i%k]-1),i-k*(queues[i%k]-1)+k));
                    queues[i%k]--;
                }
            }else{
                if(queues[i%k] > 0){
                    if(!s.equals(S.substring(i-k*queues[i%k],i-k*queues[i%k]+k)))
                        while(queues[i%k] > 0){
                            setMap(map, S.substring(i-k*queues[i%k],i-k*queues[i%k]+k));
                            queues[i%k]--;
                        }
                }
            }
        }

        return rslt;
    }

    private void setMap(Map<String, Integer> map, String s){
        if(!map.containsKey(s))
            map.put(s,1);
        else
            map.put(s,map.get(s)+1);
        return;
    }
}