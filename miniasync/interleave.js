function sleep(duration) {
    return new Promise(resolve => setTimeout(resolve, duration))
}

async function saySomething(name, something) {
    for (let i = 0; i <= 20; ++i) {
        // Use an immediate promise to yield execution. Similiar to setImmediate.
        await Promise.resolve()

        console.log(name, "says", something)
    }
}

export async function run() {
    saySomething("Ann", "thank-you");

    // If the following line is uncommented, allow "thank-you" will come out before "welcome".
    // await sleep(1)

    saySomething("Bob", "welcome");
}
