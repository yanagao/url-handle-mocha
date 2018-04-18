import { query, param } from '../src/index.js';
import chai from 'chai';

let expect = chai.expect;

describe('query:对url（http://www.qq.com?a=111&b=hello&c=&d=false&e=<script>test）的测试', function () {
    it("a应该为'111'", function () {
        expect(query('a', 'http://www.qq.com?a=111&b=hello&c=&d=false')).to.be.equal('111');
    });
    it("b应该为'hello'", function () {
        expect(query('b', 'http://www.qq.com?a=111&b=hello&c=&d=false')).to.be.equal('hello');
    });
    it("c应该为''", function () {
        expect(query('c', 'http://www.qq.com?a=111&b=hello&c=&d=false')).to.be.equal('');
    });
    it("d应该为'false'", function () {
        expect(query('d', 'http://www.qq.com?a=111&b=hello&c=&d=false')).to.be.equal('false');
    });
    it("没有url时应该为''", function () {
        expect(query('d')).to.be.equal('');
    });
    it("没有name时应该为''", function () {
        expect(query('', 'http://www.qq.com?a=111&b=hello&c=&d=false')).to.be.equal('');
    });
    it("(避免xss攻击)d应该为'test'", function () {
        expect(query('e', 'http://www.qq.com?a=111&b=hello&c=&d=false&e=<script>test')).to.be.equal('test');
    });
});
describe('param的测试', function () {
	it("obj为''param应该为''", function () {
        expect(param('')).to.be.equal('');
    });
    it("obj为{}param应该为''", function () {
        expect(param({})).to.be.equal('');
    });
    it("obj为{ a: 1, 'b': '2', c: '', d: true, e: false },param应该为'a=1&b=2&d=true&e=false'", function () {
        expect(param({ a: 1, 'b': '2', c: '', d: true, e: false })).to.be.equal('a=1&b=2&d=true&e=false');
    });
    it("obj为{ a: 1, 'b': '2', c: '', d: true, e: false } keepAll为true,param应该为'a=1&b=2&c=&d=true&e=false'", function () {
        expect(param({ a: 1, 'b': '2', c: '', d: true, e: false }, true)).to.be.equal('a=1&b=2&c=&d=true&e=false');
    });
});