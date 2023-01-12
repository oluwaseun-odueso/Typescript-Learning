import { format } from "path";

function isPrime (num: number): boolean {
    let divisor: number = 2;
    while (divisor <= (num / 2)) {
        if (num % divisor === 0) {
            return false;
        };
        divisor++;
    };
    return true;
};

function reverse(num: number): number {
    let reversal: number | string
    if (num === 0) {
        reversal = 0;
    } else {
        reversal = ''

        while(num > 0) {
            const digit: number = num % 10;
            Math.floor(num / 10);
            reversal = reversal + digit.toString()
        }
    }
    return Number(reversal)
}

function emirp(numberOfEmirps: number) {
    let NUMBER_OF_EMIRP_PER_LINE = 10;
    let count = 0;
    let number = 2;

    while(count < numberOfEmirps) {
        if (isPrime(number) && isPrime(reverse(number)) && number != reverse(number)) {
            console.log(number + " ");
            count ++;
            if (count % NUMBER_OF_EMIRP_PER_LINE === 0) {
                console.log()
                console.log()
            }
        }
        number ++;
    }
};

const main = () => {
    console.log("The first 100 emirps are: ")
    console.log()
    emirp(100);
};

main();