import {getProps} from 'getProps'
import * as fs from 'fs'

test('getProps empty', () => {
	expect(getProps('')).toStrictEqual([])
})

test('getProps UIKit', () => {
	const file = fs.readFileSync('./__test__/definitions/Button.ts.test', 'utf8')
	expect(getProps(file)).toStrictEqual([
		{
			'propName': 'key',
			'isRequired': false,
		},
		{
			'propName': 'variant',
			'isRequired': true,
		},
		{
			'propName': 'onClick',
			'isRequired': false,
		},
		{
			'propName': 'className',
			'isRequired': false,
		},
		{
			'propName': 'size',
			'isRequired': false,
		},
		{
			'propName': 'block',
			'isRequired': false,
		},
		{
			'propName': 'disabled',
			'isRequired': false,
		},
		{
			'propName': 'href',
			'isRequired': true,
		},
		{
			'propName': 'type',
			'isRequired': false,
		},
		{
			'propName': 'defaultBrowserBehaviour',
			'isRequired': false,
		},
		{
			'propName': 'route',
			'isRequired': false,
		},
		{
			'propName': 'isTargetBlank',
			'isRequired': false,
		},
		{
			'propName': 'active',
			'isRequired': false,
		},
		{
			'propName': 'nodeRef',
			'isRequired': false,
		},
		{
			'propName': 'onMouseEnter',
			'isRequired': false,
		},
		{
			'propName': 'onMouseLeave',
			'isRequired': false,
		},
		{
			'propName': 'data-selenium-id',
			'isRequired': false,
		},
		{
			'propName': 'nativeProps',
			'isRequired': false,
		}
	])
})
