import * as assert from 'assert'
import * as athena from '../index'

describe('Array', () => {
  describe('#createClient()', () => {
    it('should return athenaClient', (done: any) => {
      const client = athena.createClient(
        { bucketUri: 's3://xxxx' },
        { region: 'xxxx' },
      )
      assert.notEqual(client, undefined)
      done()
    })
  })
})
