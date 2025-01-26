//you are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
//numberOfBoxesi is the number of boxes of type i.
//numberOfUnitsPerBoxi is the number of units in each box of the type i.
//You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
//Return the maximum total number of units that can be put on the truck.
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
 
 let result = 0;
 for (const [ boxes, units ] of boxTypes) {
   const takeBoxes = Math.min(boxes, truckSize);
   result += units * takeBoxes;
   truckSize -= takeBoxes;
   if (!truckSize) break;
 }

 return result;
};

console.log(maximumUnits([[1,3],[2,2],[3,1]],4))
console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]],10))