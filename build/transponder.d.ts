declare class Transponder {
  constructor(id: string)
  send(data: any, toId?: String[] | String): void
  onMessage(callback?: Function): void
  destory(): void
}

export as namespace Transponder
export = Transponder
