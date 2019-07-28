import {checkFile} from 'checkFile'
import * as fs from 'fs'
import {UnknownPropError} from 'types'
import {getPropsByTag} from 'getPropsByTag'

const file = fs.readFileSync('./__test__/js/create-campaign-dashboard.js.test', 'utf8')

test('Empty file has no problems', () => {
	expect(checkFile('', {})).toStrictEqual([])
})

test('Unknown tag throws an error', () => {
	try {
		checkFile(file, {})
	} catch (e) {
		expect(e).toBeInstanceOf(UnknownPropError)
		return
	}
	
	fail('No error thrown')
})

test('Complex file checking', () => {
	const definitions = getPropsByTag('__test__/definitions')
	expect(checkFile(file, definitions)).toEqual([
	
	])
})
