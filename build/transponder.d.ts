declare enum pageTypes {
  'page',
  'iframe'
}
declare interface messageDataType {
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
  send(data: any, toId?: String[] | String): void
  onMessage(callback?: (data: messageDataType) => void): void
  destory(): void
}

export as namespace Transponder
export = Transponder
