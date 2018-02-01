const http = require('http')

function request(url) {
  return new Promise(resolve => {
    // This is an example of an http request, for example to fetch
    // user data from an API.
    // This module is being mocked in __mocks__/request.js
    http.get({path: url}, response => {
      let data = ''
      response.on('data', _data => (data += _data))
      response.on('end', () => resolve(data))
    });
  });
}

function getUserName(userID) {
  return request('/users/' + userID).then(user => user.name);
}

function fetchData(callback) {
  setTimeout(() => {
    callback('bbb')
  }, 1000)
}

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}

function sum(a, b) {
  return a + b
}

describe('test', () => {
  let each = ''
  let all = ''

  /**
   * beforeAll, afterAllは，describeの中で１回のみ
   */ 
  beforeAll(() => {
    all = 'before'
    console.log('beforeAll: ', all)
  })
  afterAll(() => {
    all = 'after'
    console.log('afterAll: ', all)
  })

  /**
   * beforeEach, afterEachは，itを実行時に毎回行う
   */ 
  beforeEach(() => {
    each = 'before'
    console.log('beforeEach: ', each)
  })

  afterEach(() => {
    each = 'after'
    console.log('afterEach: ', each)
  })

  // 基本のテスト
  it('sum', () => {
    expect(sum(1,2)).toBe(3)
  })

  // describeの中のテストでこれのみ動かしたい場合.onlyを付ければよい
  // it.only('this will be the only test that runs', () => {
  //   expect(true).toBe(true)
  // })
  
  // 非同期のテスト
  it('test', (done) => {
    function callback(data) {
      expect(data).toBe('bbb')
      done()
    }
    fetchData(callback)
  })

  // mockのテスト
  it('mock', () => {
    const mockCallback = jest.fn()
    forEach([0, 1], mockCallback)

    // The mock function が2度呼ばれた
    expect(mockCallback.mock.calls.length).toBe(2)

    // 最初の関数呼び出しの1つ目の引数
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // 2回目の関数呼び出しの1つ目の引数
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  })

  it('mock returnValue', () => {
    const myMock = jest.fn().mockReturnValue('a')

    expect(myMock()).toEqual('a')
  })

  it('mock implementation', () => {
    const myMockFn = jest
    .fn()
    .mockImplementation(scalar => 42 + scalar)
    
    expect(myMockFn(10)).toEqual(52)
  })

  it('diff を取れるやつ', () => { 
    const diff = require('jest-diff')
    const a = {a: {b: {c: 5}}}
    const b = {a: {b: {c: 6}}}

    const result = diff(a, b)
    // console.log(result)
  })
})