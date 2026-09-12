import { IpDataEntityBase } from '../IpDataEntityBase';
import type { IpDataSDK } from '../IpDataSDK';
import type { Control } from '../types';
import type { GetIpInfo, GetIpInfoLoadMatch } from '../IpDataTypes';
declare class GetIpInfoEntity extends IpDataEntityBase<GetIpInfo> {
    constructor(client: IpDataSDK, entopts: any);
    make(this: GetIpInfoEntity): GetIpInfoEntity;
    load(this: any, reqmatch?: GetIpInfoLoadMatch, ctrl?: Control): Promise<GetIpInfoEntity>;
}
export { GetIpInfoEntity };
