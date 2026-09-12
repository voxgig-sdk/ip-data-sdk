import { Context } from './Context';
declare class IpDataError extends Error {
    isIpDataError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { IpDataError };
