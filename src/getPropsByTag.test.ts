import {getPropsByTag} from 'getPropsByTag'
import {getProps} from 'getProps'
import fs from 'fs'


test('Wrong folder returns empty', () => {
	expect(getPropsByTag('__test__/walk/empty')).toStrictEqual({})
})

test('Nonexistent path throws', () => {
	try {
		getPropsByTag('nonexistent')
	} catch (e) {
		expect('It works!').toBeTruthy()
		return
	}
	
	fail('No error thrown')
})

test('Complex prop getting', () => {
	expect(getPropsByTag('__test__/definitions')).toStrictEqual({
		Button: getProps(fs.readFileSync('__test__/definitions/Button.ts.test', 'utf8')),
		Icon: getProps(fs.readFileSync('__test__/definitions/Icon.ts.test', 'utf8')),
		Link: getProps(fs.readFileSync('__test__/definitions/Link.ts.test', 'utf8')),
	})
})
