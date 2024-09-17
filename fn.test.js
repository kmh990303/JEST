// const fn = require('./fn');

// test('1은 1이야.', () => {
//     expect(1).toBe(1);
// });

// test('2 더하기 3은 5야.', () => {
//     expect(fn.add(2, 3)).toBe(5);
// })

// test('2 더하기 3은 5야.', () => {
//     expect(fn.add(2, 3)).toEqual(5);
// })

// test('3 더하기 3은 5가 아니야.', () => {
//     expect(fn.add(3, 3)).not.toBe(5);
// })

// test('이름과 나이를 전달 받아서 객체를 반환해줘', () => {
//     expect(fn.makeUser('Mike', 30)).toEqual({
//         name: "Mike",
//         age: 30,
//     })
// }) //객체나 배열은 재귀적으로 검사해야 하기에 toBe 가 아닌 toEqual을 사용해야 함

// test('이름과 나이를 전달 받아서 객체를 반환해줘', () => {
//     expect(fn.makeUser('Mike', 30)).toStrictEqual({
//         name: "Mike",
//         age: 30,
//     })
// })

// //toBeNull, toBeUndefined, toBeDefined
// test("null은 null입니다.", () => {
//     expect(null).toBeNull();
// })

// //toBeTruthy, toBeFalsy

// test("비어 있지 않은 문자열은 true 입니다.", () => {
//     expect(fn.add("hello", 'world')).toBeTruthy();
// })

// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan 작다
// toBeLessThanOrEqual 작거나 같다

// test("ID는 10자 이하여야 합니다.", () => {
//     const id = 'THE BLACK';
//     expect(id.length).toBeLessThanOrEqual(10);
// })

// test("비밀번호 4자리", () => {
//     const id = '1234';
//     expect(id.length).toBe(4);
// })

// //컴퓨터는 이진법을 사용하므로 소수의 경우 무한 소수로 나타남
// test('0.1 더하기 0.2는 0.3 입니다.', () => {
//     expect(fn.add(0.1, 0.2)).toBe(0.3);
// }) // toBe는 오류가 나므로 toBeCloseTo를 쓰면 테스트 통과됨

// test('0.1 더하기 0.2는 0.3입니다.', () => {
//     expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
// })

// 정규 표현식 toMatch로 이용

// test('hello world 에 a 라는 글자가 있나?', () => {
//     expect("hello world").toMatch(/h/);
// })
// test('hello world 에 a 라는 글자가 있나?', () => {
//     expect("hello world").toMatch(/H/i);
// }) //대소문자 구분 없이 존재 여부 확인해줌

// 배열 요소 포함 여부 toContain

// test('유저 리스트에 Mike 가 있나?', () => {
//     const user = "Mike";
//     const userList = ['Tom', 'Mike', 'Kai'];
//     expect(userList).toContain(user);
// })

// test('이거 에러 나나요?', () => {
//     expect(() => fn.throwErr()).toThrow("xx");
// }) //toThrow랑 특정 내용을 출력하는지 확인 가능

// test('3초 후에 받아온 이름은 Mike', (done) => {
//     function callback(name) {
//         try {
//             expect(name).toBe("Mike");
//             done();
//         } catch (error) {
//             done();
//         }
//     }
//     fn.getName(callback);
//     //done 이 호출 완료되어야 종료되는 방식 // 비동기 테스트
//     // 프로미스를 리턴하면 jest는 resolve 될 때까지 기다려주고, done을 작성 안 해도 됨
// })
// test('3초 후에 받아온 나이는 30', () => {
//     // return fn.getAge().then(age => {
//     //     expect(age).toBe(30);
//     // }) //첫 번째 방식
//     return expect(fn.getAge()).resolves.toBe(30);
//     // return expect(fn.getAge()).rejects.toMatch('error');
// }) //프로미스를 사용할 땐 return을 작성해야 함

// async, await 사용
// test('3초 후 나이 30.', async () => {
//     const age = await fn.getAge();
//     expect(age).toBe(30);
// })
// test('3초 후 나이 30.', async () => {
//     await expect(fn.getAge()).resolves.toBe(30);
// })


// // 테스트 전후 작업
// let num = 0;

// beforeEach(() => {
//     num = 0;
// }) //이게 있어서 테스트 실행 전 num을 0으로 초기화해줌

// test('0 더하기 1은 1이야', () => { // 1
//     num = fn.add(num, 1);
//     expect(num).toBe(1);
// })
// test('0 더하기 2은 2이야', () => { // 3
//     num = fn.add(num, 2);
//     expect(num).toBe(2);
// })
// test('0 더하기 3은 3이야', () => { //6
//     num = fn.add(num, 3);
//     expect(num).toBe(3);
// })
// test('0 더하기 4은 4이야', () => { //10
//     num = fn.add(num, 4);
//     expect(num).toBe(4);
// })

// let user; //beforeAll, afterAll은 모든 테스트 케이스 전 후로 한번 씩만 실행됨

// beforeAll(async () => {
//     user = await fn.connectUserDb();
// })
// afterAll(() => {
//     return fn.disconnectDb();
// })

// test('이름은 Mike', () => {
//     expect(user.name).toBe('Mike');
// })
// test('나이은 30', () => {
//     expect(user.age).toBe(30);
// })

// describe로 테스트 케이스들을 묶을 수 있음

// describe('Car 관련 작업', () => {
//     let car;

//     test
// })

// 외부의 beforeEach는 내부 beforeEach 보다 먼저 실행되고, 외부의 afterEach는 내부 afterEach보다 늦게 실행됨


// //test.only('테스트명', () => {
//     expect(fn.add(num, 5)).toBe(6);
// }) 여러 케이스 중 test.only 한 케이스만 테스트 실행됨

// test.skip('0 더하기 4은 4', () => {
//     expect(fn.add(num, 4)).toBe(4);
//     num = 10;
// }); //test.skip 하면 테스트를 수행하지 않게 함

// mock function : 테스트 하기 위해 흉내만 내는 함수

// const mockFn = jest.fn();

// mockFn();
// mockFn(1);

// test('함수는 2번 호출됩니다.', () => {
//     expect(mockFn.mock.calls.length).toBe(2);
// });
// test('2번 째로 호출된 함수에 전달된 첫 번째 인수는 1 입니다.', () => {
//     expect(mockFn.mock.calls[1][0]).toBe(1);
// })

// const mockFn = jest.fn();

// mockFn(10);
// mockFn(20);
// mockFn(30);

// function forEachAdd1(arr) {
//     arr.forEach(num => {
//         mockFn(num + 1);
//     })
// }

// forEachAdd1([10, 20, 30]);

// test('함수 호출은 3번 됩니다.', () => {
//     expect(mockFn.mock.calls.length).toBe(3);
// })

// test('전달된 값은 11, 21, 31 입니다.', () => {
//     expect(mockFn.mock.calls[0][0]).toBe(11);
//     expect(mockFn.mock.calls[1][0]).toBe(21);
//     expect(mockFn.mock.calls[2][0]).toBe(31);
// })

// const mockFn = jest.fn(num => num + 1);

// mockFn(10);
// mockFn(20);
// mockFn(30);

// test('10에서 1 증가한 값이 반환된다', () => {
//     expect(mockFn.mock.results[0].value).toBe(11);
// })

// const mockFn = jest.fn();

// mockFn
//     .mockReturnValueOnce(10)
//     .mockReturnValueOnce(20)
//     .mockReturnValueOnce(30)
//     .mockReturnValue(40);

// mockFn();
// mockFn();
// mockFn();
// mockFn();

// test('dd', () => {
//     console.log(mockFn.mock.results);
//     expect('dd').toBe('dd');
// })

// const mockFn = jest.fn();

// mockFn
//     .mockReturnValueOnce(true)
//     .mockReturnValueOnce(false)
//     .mockReturnValueOnce(true)
//     .mockReturnValueOnce(false)
//     .mockReturnValue(true)
// const result = [1, 2, 3, 4, 5].filter(num => mockFn(num));

// test('홀수는 1, 3, 5', () => {
//     expect(result).toStrictEqual([1, 3, 5]);
// })

// const fn = require('./fn');

// jest.mock('./fn');
// fn.createUser.mockReturnValue({ name: 'Mike' }); //목함수로 실행됨

// toBeCalled() 한번 이상 호출?
// toBeCalledTimes(3) 정확히 세 번 호출?