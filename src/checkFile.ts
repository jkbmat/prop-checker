import {EOFError, TCheckResults, TPropsByTag, UnknownPropError} from 'types'
import {createReader, readChar, readN} from 'utils'

const TAG_START = '<UIKit.'
enum EWrapperType {
	BRACKET = 'BRACKET',
	QUOTE = 'QUOTE',
	DOUBLE_QUOTE = 'DOUBLE_QUOTE',
}

export function checkFile (str: string, props: TPropsByTag): TCheckResults {
	let reader = createReader(str)
	let ret: TCheckResults = []
	let isInTag = false
	let tagName = ''
	
	try {
		while (true) {
			if (isInTag) {
				while (/\s/.test(reader.char)) {
					reader = readChar(reader)
				}
				
				let propName = ''
				let wrapperType: EWrapperType
				
				while (!/=/.test(reader.char)) {
					propName += reader.char
					reader = readChar(reader)
				}
				
				reader = readChar(reader)
				switch (reader.char) {
					case '\'':
						wrapperType = EWrapperType.QUOTE
						break
					case '"':
						wrapperType = EWrapperType.DOUBLE_QUOTE
						break
					case '{':
						wrapperType = EWrapperType.BRACKET
						break
				}
				
				let wrapperLevel = 1
				
				debugger
				throw new Error()
			}
			
			if (reader.rest.startsWith(TAG_START)) {
				isInTag = true
				reader = readN(reader, TAG_START.length + 1)
				
				while (!/\s/.test(reader.char)) {
					tagName += reader.char
					reader = readChar(reader)
				}
				
				if (!props.hasOwnProperty(tagName)) {
					throw new UnknownPropError(`ERROR: unknown tag '${tagName}'`)
				}
			}
			
			reader = readChar(reader)
		}
	} catch (e) {
		if (e instanceof EOFError) {
			return ret
		}
		
		throw e
	}
}
