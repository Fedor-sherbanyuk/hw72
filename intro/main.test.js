const {of,last,some,includ} = require('./main.js');

test('indexOf find',() =>{
    const array = ['e', 'n', 'a', 'v', 'a', 'c'];
    expect(of(array,'c')).toBe(5)
    expect(of(array,'c')).toEqual(5)
    expect(of(array,'c')).toBeGreaterThan(3)
})

test('lastIndexOf find',() =>{
    const array = ['e', 'n', 'a', 'v', 'a', 'c'];
    expect(last(array,'a')).toBe(4)
    expect(of(array,'c')).toEqual(5)
    expect(of(array,'v')).toBeGreaterThan(2)
})

test('includes',() =>{
    const array = ['e', 'n', 'a', 'v', 'a', 'c'];
    expect(includ(array,'n')).toBe(true)
    expect(includ(array,'a')).toEqual(true)
    expect(includ(array,'q')).toBe(false)
})

test('some',() =>{
    const array2 = [1, 2, 3, 4, 5];
    expect(some(array2,function (element) {
        return element % 2 === 0
    })).toBe(true)
    expect(some(array2,function (element) {
        return element % 2 === 0
    })).toEqual(true)
    expect(some(array2,function (element) {
        return element % 2 === 0
    })).toBeTruthy()

})