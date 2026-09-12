export interface GetIpInfo {
    asn?: Record<string, any>;
    company?: Record<string, any>;
    elapsed_ms?: number;
    ip?: string;
    is_abuser?: boolean;
    is_bogon?: boolean;
    is_crawler?: boolean;
    is_datacenter?: boolean;
    is_mobile?: boolean;
    is_proxy?: boolean;
    is_tor?: boolean;
    is_vpn?: boolean;
    location?: Record<string, any>;
    rir?: string;
}
export interface GetIpInfoLoadMatch {
    format?: string;
    q?: string;
}
