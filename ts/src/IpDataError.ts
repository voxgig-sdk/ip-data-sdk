
import { Context } from './Context'


class IpDataError extends Error {

  isIpDataError = true

  sdk = 'IpData'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  IpDataError
}

