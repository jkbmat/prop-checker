import {EOFError, TCharReading} from 'types'


export function readChar (reader: TCharReading): TCharReading {
	if (!reader.rest.length) {
		throw new EOFError('EOF')
	}
	
	const char = reader.rest[0]
	let {charNumber, lineNumber} = reader
	
	charNumber += 1
	
	if (char === '\n') {
		charNumber = 0
		lineNumber += 1
	}
	
	return {
		char,
		rest: reader.rest.slice(1),
		charNumber,
		lineNumber,
	}
}

export function createReader (str: string): TCharReading {
	return {
		rest: str,
		char: '',
		charNumber: 0,
		lineNumber: 0,
	}
}

export function readN (reader: TCharReading, n: number) {
	let ret = reader
	
	for (let i = 0; i < n; i++) {
		ret = readChar(ret)
	}
	
	return ret
}
