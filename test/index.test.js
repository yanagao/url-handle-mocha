import { query, param } from '../src/index.js';
import chai from 'chai';

let expect = chai.expect;

let url = 'http://www.qq.com?a=111&b=hello&c=&d=false&e=<script>test'
describe('query:对url' + url + '的测试', function () {
    it("a应该为'111'", function () {
        expect(query('a', url)).to.be.equal('111');
    });
    it("b应该为'hello'", function () {
        expect(query('b', url)).to.be.equal('hello');
    });
    it("c应该为''", function () {
        expect(query('c', url)).to.be.equal('');
    });
    it("d应该为'false'", function () {
        expect(query('d', url)).to.be.equal('false');
    });
    it("没有url时应该为''", function () {
        expect(query('d')).to.be.equal('');
    });
    it("没有name时应该为''", function () {
        expect(query('', url)).to.be.equal('');
    });
    it("(避免xss攻击)d应该为'test'", function () {
        expect(query('e', url)).to.be.equal('test');
    });
});

let obj1 = { a: 1, 'b': '2', c: '', d: true, e: false }
describe('param的测试', function () {
	it("obj为''param应该为''", function () {
        expect(param('')).to.be.equal('');
    });
    it("obj为{}param应该为''", function () {
        expect(param({})).to.be.equal('');
    });
    it("obj为" + obj1 + ",param应该为'a=1&b=2&d=true&e=false'", function () {
        expect(param(obj1)).to.be.equal('a=1&b=2&d=true&e=false');
    });
    it("obj为" + obj1 + " keepAll为true,param应该为'a=1&b=2&c=&d=true&e=false'", function () {
        expect(param(obj1, true)).to.be.equal('a=1&b=2&c=&d=true&e=false');
    });
});