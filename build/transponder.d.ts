type pageTypes = "page" | "iframe"

type messageDataType = {
  data: any,
  from: {
    id: String,
    href: typeof window.location.href,
    pathname: typeof window.location.pathname
    hostname: typeof window.location.hostname,
    port: typeof window.location.port,
    protocol: typeof window.location.protocol,
    hash: typeof window.location.hash,
    search: typeof window.location.search,
    pagetype: pageTypes
  }
}

declare class Transponder {
  constructor(id: string)
  send(data: any, toId?: String[] | String): Transponder
  onMessage(callback?: (data: messageDataType) => void): Transponder
  destory(): void
}

export as namespace Transponder
export = Transponder
