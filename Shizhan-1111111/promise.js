/**
 * Created by lee on 9/8/17.
 */
let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

    //cleaning the room

    let isClean = true;

    if (isClean) {
        resolve('Clean');
    } else {
        reject('not Clean');
    }

});

promiseToCleanTheRoom.then(function(fromResolve) {
    console.log('the room is' + fromResolve);
}).catch(function(fromReject){
    console.log('the room is' + fromReject);
})