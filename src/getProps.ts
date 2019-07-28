import {EOFError, TProps} from 'types'
import {createReader, readChar, readN} from 'utils'

export function getProps (str: string): TProps {
	const startString = 'export interface IProps {'
	let reader = createReader(str)
	
	try {
		while (!reader.rest.startsWith(startString)) {
			reader = readChar(reader)
		}
		reader = readN(reader, startString.length)
		
		let bracketLevel = 1
		let interestingSection = ''
		
		while (bracketLevel) {
			reader = readChar(reader)
			
			interestingSection += reader.char
			
			if (reader.char === '{') {
				bracketLevel += 1
			}
			if (reader.char === '}') {
				bracketLevel -= 1
			}
		}
		
		const ret: TProps = [{
			propName: 'key',
			isRequired: false,
		}]
		const regex = /'?([\w-]+)'?(\?)?: .*?\s/g
		
		while (true) {
			const result = regex.exec(interestingSection)
			
			if (!result) {
				return ret
			}
			
			ret.push({
				propName: result[1],
				isRequired: result[2] == undefined,
			})
		}
	} catch (e) {
		if (e instanceof EOFError) {
			return []
		}
		
		throw e
	}
}
