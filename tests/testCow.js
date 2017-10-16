var path = require('path'),
    chai = require('chai'),
    expect = chai.expect,
    _ = require('underscore');

describe('here is a test section', () => {

    describe('#cow', () => {

        let Cow = require('../lib/cow').Cow;
        let cow = new Cow();

        it('should greet you', () => {
            let greeting = cow.greets('mocha') || null;
            expect(greeting).to.not.be.equal(null);
        });


    });

});
