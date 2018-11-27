import {factorial} from './prueba'

fdescribe('Test de la funcion factorial', () => {
    it('should be 0 when n = 0', () => {
        expect(factorial(0)).toEqual(0);
    });

    it('should be 1 when n = 1', () => {
        expect(factorial(1)).toEqual(1);
    });

    it('should be 120 when n = 5', () => {
        expect(factorial(5)).toEqual(120);
    });

    it('should be ? when n = -1', () => {
        expect(factorial(-1)).toBeNull();
    });
});