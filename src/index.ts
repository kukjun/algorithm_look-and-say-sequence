import * as readline from "readline";
import {lookAndSaySequence} from "./look-and-say-sequence";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('입력: ', (input: string) => {
    const result = lookAndSaySequence(parseInt(input));
    console.log(`출력: ${result}`);

    rl.close();
})
