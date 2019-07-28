import {TPropsByTag} from 'types'
import {walk} from 'walk'
import fs from 'fs'
import {getProps} from 'getProps'

export function getPropsByTag (definitionsPath: string): TPropsByTag {
	const paths = walk(definitionsPath, /\.ts(\.test)?$/)
	
	const ret: TPropsByTag = {}
	
	for (const path of paths) {
		const file = fs.readFileSync(path, 'utf8')
		const tag = Array.from(path.match(/(\w+)\.ts(\.test)?$/) || '')[1]
		
		ret[tag] = getProps(file)
	}
	
	return ret
}
