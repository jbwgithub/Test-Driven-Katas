/* eslint-env mocha, chai */
const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it ('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it ('Returns correct string based on original entry', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal(
      `Lorem ipsum dolor
      sit eu amet, elit na
      magna sem amet nulla
      vel purus ac ligula.`
    );
  });
});
