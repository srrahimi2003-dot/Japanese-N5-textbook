import test from 'node:test';
import assert from 'node:assert/strict';
import {
  generateTimelineData,
  calculateLessonStats,
  calculateCategoryStats,
  TOTAL_CURRICULUM_STRUCTURES,
  LESSON_TARGET_COUNTS
} from './dashboardLogic';

test('TOTAL_CURRICULUM_STRUCTURES is 82 structures across 10 lessons', () => {
  assert.equal(TOTAL_CURRICULUM_STRUCTURES, 82);
  assert.equal(Object.keys(LESSON_TARGET_COUNTS).length, 10);
  assert.equal(LESSON_TARGET_COUNTS[1], 12);
});

test('generateTimelineData returns 7 days ending at current mastered count', () => {
  const data = generateTimelineData(12);
  assert.equal(data.length, 7);
  // Last entry (today) must match current mastered count
  assert.equal(data[6].masteredCumulative, 12);
  // Trajectory should be non-decreasing
  for (let i = 1; i < data.length; i++) {
    assert.ok(data[i].masteredCumulative >= data[i - 1].masteredCumulative);
  }
});

test('calculateLessonStats calculates accurate lesson 1 progress', () => {
  const stats = calculateLessonStats(['da', 'desu']);
  assert.equal(stats.length, 10);
  assert.equal(stats[0].lessonNumber, 1);
  assert.equal(stats[0].masteredCount, 2);
  assert.equal(stats[0].targetCount, 12);
  assert.equal(stats[0].percentage, 17); // 2/12 = 16.6% -> 17%
  assert.equal(stats[0].status, 'in-progress');
});

test('calculateLessonStats handles full mastery of lesson 1', () => {
  const all12 = ['da', 'desu', 'wa', 'mo', 'kore', 'sore', 'are', 'no', 'ii', 'i-adjectives', 'na-adjectives', 'ka'];
  const stats = calculateLessonStats(all12);
  assert.equal(stats[0].masteredCount, 12);
  assert.equal(stats[0].percentage, 100);
  assert.equal(stats[0].status, 'mastered');
});

test('calculateCategoryStats aggregates categories correctly', () => {
  const catStats = calculateCategoryStats(['da', 'desu', 'wa']);
  assert.equal(catStats.length, 5);
  const copula = catStats.find(c => c.category === 'copula');
  assert.ok(copula);
  assert.equal(copula?.count, 2); // da + desu
  const particle = catStats.find(c => c.category === 'particle');
  assert.equal(particle?.count, 1); // wa
});
