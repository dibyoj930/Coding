// You start with an initial power of power, an initial score of 0, and a bag of tokens given as an integer array tokens, where each tokens[i] denotes the value of tokeni.

// Your goal is to maximize the total score by strategically playing these tokens. In one move, you can play an unplayed token in one of the two ways (but not both for the same token):

// Face-up: If your current power is at least tokens[i], you may play tokeni, losing tokens[i] power and gaining 1 score.
// Face-down: If your current score is at least 1, you may play tokeni, gaining tokens[i] power and losing 1 score.

var bagOfTokensScore = function(tokens, power) {
    let i=0,j=tokens.length-1,s=0,ans=0;
    tokens.sort((a,b)=>a-b);
    if(tokens.length==1&&power<tokens[0])return 0;
    while(i<=j){
        if(power>=tokens[i]){
            power-=tokens[i];
            s++;
            i++;
            ans=Math.max(ans,s);
        }else if(s>0){
            power+=tokens[j];
            j--;
            s--;
        }else{
            break;
        }
    }
    return ans;
};

// Input: tokens = [100,200,300,400], power = 200

// Output: 2