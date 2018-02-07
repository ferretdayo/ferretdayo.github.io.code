const http = require('http')

function request (url) {
  return new Promise(resolve => {
    // This is an example of an http request, for example to fetch
    // user data from an API.
    // This module is being mocked in __mocks__/request.js
    http.get({path: url}, response => {
      let data = ''
      response.on('data', _data => (data += _data))
      response.on('end', () => resolve(data))
    })
  })
}

// function getUserName (userID) {
//   return request('/users/' + userID).then(user => user.name)
// }

function fetchData (callback) {
  setTimeout(() => {
    callback('bbb')
  }, 1000)
}

function forEach (items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}

function sum (a, b) {
  return a + b
}

function getUsers () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: 'tarou', old: 20 },
        { name: 'ichiro', old: 23 },
        { name: 'jiro', old: 21 }
      ])
    }, 1000)
  })
}

class User {
  constructor (name, old) {
    this.name = name
    this.old = old
  }
  happyBirthDay (callbackAction) {
    callbackAction(this.name, this.old)
  }
}
describe('test', () => {
  it('モックテスト', () => {
    const mockFn = jest.fn().mockImplementation((name, old) => `${name}君!${old}の誕生日おめでとう`)
    const user = new User('Tsuruemon', 23)
    user.happyBirthDay(mockFn)
    expect(mockFn).toBeCalled() // モック関数が呼ばれたかどうか
    expect(mockFn.mock.calls[0][0]).toBe('Tsuruemon') // 1回目のコールの第一引数のチェック
    expect(mockFn.mock.calls[0][1]).toBe(23) // 1回目のコールの第二引数のチェック
    expect(mockFn.mock.calls.length).toBe(1) // 関数の呼び出し回数のチェック
    user.happyBirthDay(mockFn)
    expect(mockFn.mock.calls.length).toBe(2) // 関数の呼び出し回数のチェック
  })

  it('非同期テスト', () => {
    expect(getUsers()).resolves.toContainEqual({ name: 'tarou', old: 20 })
  })

  it('足し算のテスト', () => {
    expect(sum(1, 2)).toBe(3)
  })

  // describeの中のテストでこれのみ動かしたい場合.onlyを付ければよい
  // it.only('this will be the only test that runs', () => {
  //   expect(true).toBe(true)
  // })

  // 非同期のテスト
  it('test', (done) => {
    function callback (data) {
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
    expect(mockCallback.mock.calls[0][0]).toBe(0)

    // 2回目の関数呼び出しの1つ目の引数
    expect(mockCallback.mock.calls[1][0]).toBe(1)
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
    console.log(result)
  })
})
