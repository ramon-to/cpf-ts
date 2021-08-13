const DIGITS = 11;
const EXCLUDE_LIST: string[] = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
];

const NOT_NUMBERS_RGX = /[^0-9]/g;

function removeNotNumberChars(data: string) {
    return data.toString().replace(NOT_NUMBERS_RGX, '');
}

function padZeros(data: number | string): string {
    const dataString = typeof data === 'string' ? data : data.toString();

    if (dataString.length === DIGITS) {
        return dataString;
    }

    return padZeros(`0${dataString}`);
}

function prepareData(data: string | number): string {
    if (typeof data === 'string') {
        return removeNotNumberChars(data);
    }

    return padZeros(data);
}

function checkBlockList(data: string): boolean {
    return EXCLUDE_LIST.find((notAllowed) => data === notAllowed) === undefined;
}

function checkDigits(data: string): boolean {
    return data.length === DIGITS;
}

function getDivisionRest(value: number): number {
    const divisionRest = (value * 10) % 11;
    return divisionRest === 10 ? 0 : divisionRest;
}

function calcSum(data: string): number {
    const multiplier = data.length + 1;

    return data
        .split('')
        .map((digitStr: string, index: number) => {
            const digit = parseInt(digitStr, 10);
            return digit * (multiplier - index);
        })
        .reduce((total: number, digit: number) => total + digit, 0);
}

function validate(data: string): boolean {
    const firstDigit = data.slice(9, 10);
    const secondDigit = data.slice(10, 11);
    const sum1 = calcSum(data.slice(0, 9));
    const sum2 = calcSum(data.slice(0, 10));
    const divisionRest = getDivisionRest(sum1).toString();
    const divisionRest2 = getDivisionRest(sum2).toString();

    return firstDigit === divisionRest && secondDigit === divisionRest2;
}

export function check(data: string | number): boolean {
    const cleanedData = prepareData(data);
    return checkDigits(cleanedData) && checkBlockList(cleanedData) && validate(cleanedData);
}
