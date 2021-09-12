import { ReplaceStream } from './chapter-6/replace-stream'

const replaceStream = new ReplaceStream('World', 'Node.js')

replaceStream.on('data', (chunk) => console.log(chunk.toString()))

replaceStream.write('Hello W')
replaceStream.write('orld')
replaceStream.end()

/**
 *   출력 결과는 ...
 *   Hel
 *   lo Node.js
 *
 *   Transform을 이용해 World라는 단어를 끊어서 보내도 Node.js단어로 변환해주는 로직 구현
 */
