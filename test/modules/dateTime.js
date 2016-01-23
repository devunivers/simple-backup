'use strict';

import assert from 'assert';
import dateTime from '../../src/modules/dateTime.js';

const epochYear = 1970;
const epochMonth = 0;
const epochDay = 1;
const epochHour = 0;
const epochMinute = 0;
const epochSecond = 0;
const date = new Date(
  epochYear,
  epochMonth,
  epochDay,
  epochHour,
  epochMinute,
  epochSecond
);

describe('date module', () => {
  it('year should be formatted', () => {
    const newDateTime = dateTime(date);
    const formattedYear = newDateTime.Y('-').get();

    assert.strictEqual(formattedYear, '1970-', 'year was not formatted properly');
  });

  it('month should be formatted', () => {
    const newDateTime = dateTime(date);
    const formattedMonth = newDateTime.m('-').get();

    assert.strictEqual(formattedMonth, '01-', 'month was not formatted properly');
  });

  it('day should be formatted', () => {
    const newDateTime = dateTime(date);
    const formattedDay = newDateTime.d('_').get();

    assert.strictEqual(formattedDay, '01_', 'day was not formatted properly');
  });

  it('hour should be formatted', () => {
    const newDateTime = dateTime(date);
    const formattedHour = newDateTime.H('-').get();

    assert.strictEqual(formattedHour, '00-', 'hour was not formatted properly');
  });

  it('minute should be formatted', () => {
    const newDateTime = dateTime(date);
    const formattedMinute = newDateTime.M('-').get();

    assert.strictEqual(formattedMinute, '00-', 'minute was not formatted properly');
  });

  it('second should be formatted', () => {
    const newDateTime = dateTime(date);
    const formattedSecond = newDateTime.S('-').get();

    assert.strictEqual(formattedSecond, '00-', 'second was not formatted properly');
  });

  it('date string should be formatted', () => {
    const newDateTime = dateTime(date);
    const formattedDate = newDateTime.Y('-').m('-').d('-').H('.').M('.').S().get();

    assert.strictEqual(formattedDate, '1970-01-01-00.00.00', 'date string was not formatted properly');
  });
});
