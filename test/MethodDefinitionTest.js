import {describe, beforeEach, it} from 'mocha';
import {expect} from 'chai';
import ES6ClassDeclarations from '../src/ES6ClassDeclarations'
import ManualBinding from '../src/ManualBinding'
import PropertyAssignmentOfArrowFunctions from '../src/PropertyAssignmentOfArrowFunctions'
import PropertyAssignmentOfRegularFunctions from '../src/PropertyAssignmentOfRegularFunctions'

describe('method definition', () => {
  describe('ES6+ class declarations', () => {
    const instance = new ES6ClassDeclarations('bar')

    it('does not bind functions to the instance', () => {
      const foo = instance.foo
      expect(() => foo()).to.throw(TypeError)
    })

    it('can be bound to the instance using an arrow function', () => {
      const foo = () => instance.foo()
      expect(foo()).to.eq('bar')
    })
  })

  describe('manually-bound functions', () => {
    const instance = new ManualBinding('bar')

    it('binds functions to the instance', () => {
      const foo = instance.foo
      expect(foo()).to.eq('bar')
    })
  })

  describe('property assignment of arrow functions', () => {
    const instance = new PropertyAssignmentOfArrowFunctions('bar')

    it('binds functions to the instance', () => {
      const foo = instance.foo
      expect(foo()).to.eq('bar')
    })
  })

  describe('property assignment of regular functions', () => {
    const instance = new PropertyAssignmentOfRegularFunctions('bar')

    it('does not bind functions to the instance', () => {
      const foo = instance.foo
      expect(() => foo()).to.throw(TypeError)
    })

    it('can be bound to the instance using an arrow function', () => {
      const foo = () => instance.foo()
      expect(foo()).to.eq('bar')
    })
  })
})
