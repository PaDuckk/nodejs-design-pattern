import internal, { Transform } from 'stream'

export class ReplaceStream extends Transform {
  searchStr: string
  replaceStr: string
  tail: string

  constructor(searchStr: string, replaceStr: string, options?: internal.TransformOptions) {
    super({ ...(options ?? {}) })

    this.searchStr = searchStr
    this.replaceStr = replaceStr
    this.tail = ''
  }

  _transform(chunk: any, encoding: any, callback: any) {
    const pieces = (this.tail + chunk).split(this.searchStr)
    const lastPiece = pieces[pieces.length - 1]
    const taileLen = this.searchStr.length - 1
    this.tail = lastPiece.slice(-taileLen)
    pieces[pieces.length - 1] = lastPiece.slice(0, -taileLen)

    this.push(pieces.join(this.replaceStr))
    callback()
  }

  _flush(callback: any) {
    this.push(this.tail)
    callback()
  }
}
