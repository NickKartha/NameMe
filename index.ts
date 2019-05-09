import * as words from './words.json';


function selectName(index: number) {
const indices = new Uint8Array(new Uint32Array([index]).buffer)
return [
    words[indices[0]],
    words[indices[1]],
    words[indices[2]],
    words[indices[3]]
    
  ].join('')
}

for(let i = 20000; i < 20800; i++) {
  console.log(selectName(i))
}


