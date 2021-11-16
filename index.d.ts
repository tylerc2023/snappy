/* eslint-disable */

export class ExternalObject<T> {
  readonly '': {
    readonly '': unique symbol
    [K: symbol]: T
  }
}
export interface Options {
  asBuffer?: boolean | undefined | null
}
export function compressSync(input: Buffer | string): Buffer
export function compress(input: string | Buffer, signal?: AbortSignal | undefined | null): Promise<Buffer>
export function uncompressSync(input: string | Buffer, asBuffer?: Options | undefined | null): string | Buffer
export function uncompress(
  input: string | Buffer,
  options?: Options | undefined | null,
  signal?: AbortSignal | undefined | null,
): Promise<string | Buffer>
