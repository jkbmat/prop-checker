import fs from 'fs'

export function walk (path: string, filetype: RegExp): string[] {
	let ret: string[] = []
	
	const dir = fs.readdirSync(path, {withFileTypes: true})
	
	for (const file of dir) {
		const filePath = `${path}\\${file.name}`
		
		if (file.isDirectory()) {
			ret = [...ret, ...walk(filePath, filetype)]
			continue
		}
		
		if (!filetype.test(filePath)) {
			continue
		}
		
		ret.push(filePath)
	}
	
	return ret
}
