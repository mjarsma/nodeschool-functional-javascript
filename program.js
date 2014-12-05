/**
 * Created by Miikka on 3.12.2014.
 */
/* 1 - Hello World
module.exports = function upperCaser(input){
    return input.toUpperCase();
};
*/

/* 2 - Higher Order Functions
function repeat(operation, num){
    if(num <= 0) return;
    operation();
    return repeat(operation, --num);
}
module.exports = repeat;
*/

/* 3 - Basic : Map
function doubleAll(numbers){
    return numbers.map(function(num){
        return num * 2;
    });
}
module.exports = doubleAll;
*/

/* 4 - Basic : Filter
function getShortMessages(messages){
    return messages.filter(function(msg) {
        return msg.message.length < 50;
    }).map(function(msg){
        return msg.message;
    });
};
module.exports = getShortMessages;
*/

/* 5 - Basic : Every Some

function checkUsersValid(goodUsers){
    return function(submittedUsers) {
        return submittedUsers.every(function (testUser) {
            return goodUsers.some(function (goodUser) {
                return testUser.id === goodUser.id;
            });
        });
    }
};
module.exports = checkUsersValid;
*/

/* 6 - Basic : Reduce
function countWords(inputWords){
    return inputWords.reduce(function(wordsTotal, word){
        (++wordsTotal[word]) || (wordsTotal[word] = 1);
        return wordsTotal;
    }, {});
};
module.exports = countWords;
*/

// 7 - Basic : Recursion
function reduce(arr, fn, initial){

}
module.exports = reduce;
