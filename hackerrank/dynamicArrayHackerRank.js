'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the dynamicArray function below.
function dynamicArray(n, queries) {
    let computation = new Array();
    let result = new Array();
    let lastAns = 0;

    for (let i = 0; i < n; i++) {
        computation.push(new Array());
    }

    for (let i = 0; i < queries.length; i++) {
        let q = queries[i];

        if (q[0] == 1) {
            computation[(q[1] ^ lastAns) % n].push(q[2]);
        } else {
            let seq = computation[(q[1] ^ lastAns) % n];
            lastAns = seq[(q[2]) % seq.length];
            result.push(lastAns);
        }
    }

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nq = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nq[0], 10);

    const q = parseInt(nq[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
