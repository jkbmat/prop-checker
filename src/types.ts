export type TProp = {propName: string, isRequired: boolean}
export type TProps = TProp[]
export type TPropsByTag = {[tagName: string]: TProps}
export type TCheckResult = {
	charNumber: number,
	lineNumber: number,
	description: string,
	preview: string,
}
export type TCheckResults = TCheckResult[]
export type TCharReading = {
	char: string,
	rest: string,
	charNumber: number,
	lineNumber: number,
}

class BaseError extends Error {
	constructor(m: string) {
		super(m)
		
		// restore prototype chain
		const actualProto = new.target.prototype
		Object.setPrototypeOf(this, actualProto)
	}
}

export class EOFError extends BaseError {}
export class UnknownPropError extends BaseError {}
