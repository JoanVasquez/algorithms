'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let f = [];

    for (let i = 0; i < n; i++) {
        let index = (n + ((i - d) % n)) % n;
        f[index] = a[i];
    }

    let result = "";
    for (let i = 0; i < f.length; i++) {
        result = result + (f[i] + ((i != f.length - 1) ? " " : ""));
        
    }
    console.log(result)
}
