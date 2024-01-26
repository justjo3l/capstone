import { initializeTimes, updateTimes } from '../pages/Reserve';

test('tests initializeTimes function', () => {
    const times = initializeTimes();
    expect(times).not.toBeNull();
});

test('tests updateTimes function', () => {
    const times = initializeTimes();
    const action = { date: '2021-07-01' };
    const updatedTimes = updateTimes(times, action);
    expect(updatedTimes).not.toStrictEqual(times);
});