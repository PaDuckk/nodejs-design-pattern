import { Chance } from 'chance'
import { createServer } from 'https'

const chance = new Chance()

export const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })

  const generateMore = () => {
    while (chance.bool({ likelihood: 95 })) {
      const randomChunk = chance.string({
        length: 16 * 1024 - 1,
      })

      const shouldContinue = res.write(`${randomChunk}\n`)

      if (!shouldContinue) {
        /** write 함수에서 false 반환시 백프레셔 발생 */
        console.log('back-pressure')

        /** 캐시가 비워졌다는 'drain' 이벤트 발생시 재귀로 다시 write 실행 */
        return res.once('drain', generateMore)
      }
    }
    res.end()
  }

  generateMore()
  res.on('finish', () => console.log('All Data sent'))
})
