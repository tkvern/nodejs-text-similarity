'use strict';

const assert = require('assert')
const TextSimilarity = require('../index')

describe('TextSimilarity', () => {
  it('when text is empty', () => {
    const stringA = ''
    const stringB = ''
    const example = new TextSimilarity(stringA, stringB)
    const result = example.run()
    assert.deepEqual(result, 'errors')
  })
  it('when text is equal', () => {
    const stringA = "I love you"
    const stringB = "I love you"
    const example = new TextSimilarity(stringA, stringB)
    const result = example.run()
    assert.deepEqual(result, 1)
  })
  it('when test is english', () => {
    const stringA = "I'm on the side of the road"
    const stringB = "I'm on the side of the road"
    const example = new TextSimilarity(stringA, stringB)
    const result = example.run()
    assert.deepEqual(result, 1)
  })
  it('when test is 50%', () => {
    const stringA = "太阳刚升起夕阳已落下"
    const stringB = "我在马路边夕阳已落下"
    const example = new TextSimilarity(stringA, stringB)
    const result = example.run()
    assert.deepEqual(result, 0.5)
  })
  it('when test is null', () => {
    const stringA = null
    const stringB = 'null'
    const example = new TextSimilarity(stringA, stringB)
    const result = example.run()
    assert.deepEqual(result, 1)
  })
})