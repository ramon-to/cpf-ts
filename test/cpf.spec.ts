import { check } from '../src';

describe('check', () => {
    it.each([
        ['', false],
        ['00000000000', false],
        ['11111111111', false],
        ['22222222222', false],
        ['33333333333', false],
        ['44444444444', false],
        ['55555555555', false],
        ['66666666666', false],
        ['77777777777', false],
        ['88888888888', false],
        ['99999999999', false],
        ['43952010839', true],
        ['02112754092', true],
        [2112754092, true],
        ['021.127.540-92', true],
        [579124088, true],
        ['00579124088', true],
        ['005.791.240-88', true],
    ])('check("%s") should return %p', (input, expected) => {
        expect(check(input)).toBe(expected);
    });
});
