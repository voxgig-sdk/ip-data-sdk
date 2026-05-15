
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { IpDataSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await IpDataSDK.test()
    equal(null !== testsdk, true)
  })

})
