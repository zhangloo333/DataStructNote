/**
 * Created by lee on 9/8/17.
 */
function timeout(ms) {
    return new Promise((resolve) => {
            setTimeout(resolve, ms);
});
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value)
}

asyncPrint('hello world', 50);