export const lookAndSaySequence = (input: number): number => {
    return solutionByBruteForce(input)
}


// BruteForce
const solutionByBruteForce = (input: number): number => {
    let value = "1";
    if (input !== 1) {
        for (let i = 1; i < input; i++) {
            value = lookAndSayByBruteForce(value);

        }
    }
    const result = getMiddleValue(value);
    return result;

}

const lookAndSayByBruteForce = (input: string): string => {
    let result = '';
    let count = 1;

    // 원래 문자열을 앞에서부터 확인하는데,
    // 연속되는 문자열을 확인하고, 해당 문자열에 대한 갯수와 숫자를 파악하고, 다음 문자열에 반영
    for (let i = 0; i < input.length; i++) {
        // 마지막인 경우, 다음 index와 같지 않은 경우엔 현재 갯수와 결과를 반환
        if (i !== input.length - 1 && input[i] === input[i + 1]) {
            count++;
        } else {
            result += count.toString() + input[i]
            count = 1;
        }
    }
    return result;
}

const getMiddleValue = (input: string): number => {
    const middleIndex = Math.floor(input.length / 2);
    let result;
    // 홀수, 짝수 계산 방식이 다름
    if (input.length % 2 !== 0) {
        result = parseInt(input[middleIndex]);
    } else {
        const numberString = input[middleIndex - 1] + input[middleIndex];
        result = parseInt(numberString);
    }

    return result;
}
