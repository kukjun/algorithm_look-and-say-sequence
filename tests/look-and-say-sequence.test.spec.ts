import {lookAndSaySequence} from "../src/look-and-say-sequence";

describe('Look And Say Sequence Test', () => {
    describe('if N=5', () => {
        it('should M=12', () => {
            // given
            const N = 5;
            const expectM = 12;
            // when
            const resultM = lookAndSaySequence(N);
            // then
            expect(resultM).toBe(expectM);
        });
    });
    describe('if N=8', () => {
        it('should M=21', () => {
            // given
            const N = 8;
            const expectM = 21;
            // when
            const resultM = lookAndSaySequence(N);
            // then
            expect(resultM).toBe(expectM);
        });
    });
    describe('if N=12', () => {
        it('should M=11', () => {
            // given
            const N = 12;
            const expectM = 11;
            // when
            const resultM = lookAndSaySequence(N);
            // then
            expect(resultM).toBe(expectM);
        });
    });

});