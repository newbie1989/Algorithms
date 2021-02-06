const test = () => {
    console.log('fetching data')
}

const wrap = (test, delay) => {
    let timer
    let counter = 1
    return () => {
        console.log('counter is ', counter++)
        console.log(timer)
        /***
         * This clears the previous timer and if called before the delay it doesnot
         * execute the timeout function
         */
        clearTimeout(timer)

        timer = setTimeout(() => {
            test()
        }, delay)
    }
}

const improved = wrap(test, 1000)

//--------------------------Another approach-----------

let x = (function handlekeydown(event) {
    let timer

    return function (delay) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            apicall()
        }, delay)
    }
})()

function apicall() {
    console.log('api called')
}
;<input type='text' onkeydown='x(1000)' />
