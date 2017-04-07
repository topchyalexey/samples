/**
 * Created by atopchy on 07/04/17.
 */


const data = [256,242,225,215,210,160,120,120,120,120]

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


const pack3arrays = (arr, arrSum) => {
    const res = arr.reduce((res, e) => {
        if ( res.length === 0) {
            res.push([e])
            return res
        }
        let current = res[res.length - 1]
        let currSum = current.reduce((a,b)=>a+b,0) + e
        if(  currSum > arrSum) {
            res.push([e])
        } else {
            current.push(e)
        }
        return res
    }, [])
    if ( res.length > 3 ) {
        // console.log('false:', res)
        return false
    }
    console.log('===========')
    res.reduce((r, e) => { console.log(e, '=', e.reduce((a,b)=>a+b,0)); return res} ,res)
    return true
}

let iterations = 10000000
while ( iterations-- > 0) {
    const arr = shuffle(data)
    pack3arrays(arr, 602)
}

console.log('false')