const fn = require('./fn');

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


// 테스트 전후 작업
let num = 0;

beforeEach(() => {
    num = 0;
}) //이게 있어서 테스트 실행 전 num을 0으로 초기화해줌

test('0 더하기 1은 1이야', () => { // 1
    num = fn.add(num, 1);
    expect(num).toBe(1);
})
test('0 더하기 2은 2이야', () => { // 3
    num = fn.add(num, 2);
    expect(num).toBe(2);
})
test('0 더하기 3은 3이야', () => { //6
    num = fn.add(num, 3);
    expect(num).toBe(3);
})
test('0 더하기 4은 4이야', () => { //10
    num = fn.add(num, 4);
    expect(num).toBe(4);
})