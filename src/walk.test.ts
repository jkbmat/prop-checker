import {walk} from 'walk'


test('Walking an empty folder produces an empty response', () => {
	expect(walk('__test__/walk/empty', /\.txt\.test$/)).toStrictEqual([])
})

test('Complex walking', () => {
	expect(walk('__test__', /\.txt\.test$/)).toStrictEqual([
		'__test__\\walk\\firstA.txt.test',
		'__test__\\walk\\firstB.txt.test',
		'__test__\\walk\\secondA\\secondAA.txt.test',
		'__test__\\walk\\secondA\\secondAB.txt.test',
		'__test__\\walk\\secondB\\secondBA.txt.test',
		'__test__\\walk\\secondB\\thirdA\\thirdA.txt.test',
		'__test__\\walk\\secondB\\thirdA\\thirdB.txt.test',
		'__test__\\walk\\secondB\\thirdA\\thirdC.txt.test',
	])
})

test('Nonexistent path throws', () => {
	try {
		walk('nonexistent', /.*/)
	} catch (e) {
		expect('It works!').toBeTruthy()
		return
	}
	
	fail('No error thrown')
})
