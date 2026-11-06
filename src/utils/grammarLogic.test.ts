import test from 'node:test';
import assert from 'node:assert/strict';
import { filterStructures, verifyAnswer, calculateProgress, stripRubyTags } from './grammarLogic';
import { LESSON_1_STRUCTURES } from '../data/lesson1Grammar';

test('filterStructures searches by symbol correctly', () => {
  const result = filterStructures(LESSON_1_STRUCTURES, 'だ');
  assert.ok(result.length >= 1);
  assert.equal(result[0].symbol, 'だ');
});

test('filterStructures filters by category', () => {
  const particles = filterStructures(LESSON_1_STRUCTURES, '', 'particle');
  assert.ok(particles.length >= 3);
  particles.forEach(p => assert.equal(p.category, 'particle'));
});

test('verifyAnswer validates string and boolean accurately', () => {
  assert.equal(verifyAnswer('は / も', 'は / も'), true);
  assert.equal(verifyAnswer(' は / も ', 'は / も'), true);
  assert.equal(verifyAnswer('غلط (False)', 'غلط (False)'), true);
  assert.equal(verifyAnswer(true, true), true);
  assert.equal(verifyAnswer(false, true), false);
  assert.equal(verifyAnswer('گزینه اول', 'گزینه دوم'), false);
});

test('calculateProgress calculates accurate percentage within bounds', () => {
  assert.equal(calculateProgress(0, 10), 0);
  assert.equal(calculateProgress(5, 10), 50);
  assert.equal(calculateProgress(10, 10), 100);
  assert.equal(calculateProgress(12, 10), 100);
});

test('stripRubyTags strips ruby annotations leaving clean kanji/kana', () => {
  const sample = '<ruby>私<rt>わたし</rt></ruby>は<ruby>本<rt>ほん</rt></ruby>です。';
  assert.equal(stripRubyTags(sample), '私は本です。');
});
