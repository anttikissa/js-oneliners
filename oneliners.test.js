const { entropy, nth, pad2 } = require('./oneliners');

test('entropy', () => {
	expect(entropy('abbcccddddaa')).toBe(23.509775004326936);
	expect(entropy('1223334444')).toBe(18.464393446710154);
	expect(entropy('')).toBe(0);
	expect(entropy('1234')).toBe(2 * 4);
	expect(entropy('1234abcd')).toBe(3 * 8);
	expect(entropy('1234abcd5678XYZW')).toBe(4 * 16);
	expect(entropy('correcthorsebatterystaple')).toBe(84.09640474436812);
});

test('nth', () => {
	expect(nth(1)).toBe('1st');
	expect(nth(2)).toBe('2nd');
	expect(nth(3)).toBe('3rd');
	expect(nth(4)).toBe('4th');
	expect(nth(5)).toBe('5th');
	expect(nth(6)).toBe('6th');
	expect(nth(7)).toBe('7th');
	expect(nth(10)).toBe('10th');
	expect(nth(11)).toBe('11th');
	expect(nth(12)).toBe('12th');
	expect(nth(13)).toBe('13th');
	expect(nth(20)).toBe('20th');
	expect(nth(21)).toBe('21st');
	expect(nth(22)).toBe('22nd');
	expect(nth(23)).toBe('23rd');
	expect(nth(24)).toBe('24th');
	expect(nth(28)).toBe('28th');
	expect(nth(30)).toBe('30th');
	expect(nth(31)).toBe('31st');
	expect(nth(32)).toBe('32nd');
	expect(nth(33)).toBe('33rd');
	expect(nth(34)).toBe('34th');
	expect(nth(38)).toBe('38th');
	expect(nth(100)).toBe('100th');
	expect(nth(101)).toBe('101st');
	expect(nth(102)).toBe('102nd');
	expect(nth(103)).toBe('103rd');
	expect(nth(104)).toBe('104th');
	expect(nth(110)).toBe('110th');
	expect(nth(111)).toBe('111th');
	expect(nth(112)).toBe('112th');
	expect(nth(113)).toBe('113th');
});

test('pad2', () => {
	expect(pad2(0)).toBe('00');
	expect(pad2(1)).toBe('01');
	expect(pad2(10)).toBe('10');
	expect(pad2(11)).toBe('11');
	expect(pad2(99)).toBe('99');
	// Whoops!
	expect(pad2(110)).toBe('10');
	expect(pad2(111)).toBe('11');
});
