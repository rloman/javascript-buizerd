async function foo() {
    return 42;
}


async function bar() {
    let r = await foo();

    console.log(r);
}


bar();
console.log("Einde programma");