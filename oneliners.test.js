const { entropy } = require('./oneliners');

test('entropy', () => {
	expect(entropy('abbcccddddaa')).toBe(23.509775004326936);
	expect(entropy('1223334444')).toBe(18.464393446710154);
	expect(entropy('')).toBe(0);
	expect(entropy('1234')).toBe(8);
	expect(entropy('correcthorsebatterystaple')).toBe(84.09640474436812);
});
