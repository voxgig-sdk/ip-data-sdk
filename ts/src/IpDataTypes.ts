// Typed models for the IpData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GetIpInfo {
  asn?: Record<string, any>
  company?: Record<string, any>
  elapsed_m?: number
  ip?: string
  is_abuser?: boolean
  is_bogon?: boolean
  is_crawler?: boolean
  is_datacenter?: boolean
  is_mobile?: boolean
  is_proxy?: boolean
  is_tor?: boolean
  is_vpn?: boolean
  location?: Record<string, any>
  rir?: string
}

export interface GetIpInfoLoadMatch {
  asn?: Record<string, any>
  company?: Record<string, any>
  elapsed_m?: number
  ip?: string
  is_abuser?: boolean
  is_bogon?: boolean
  is_crawler?: boolean
  is_datacenter?: boolean
  is_mobile?: boolean
  is_proxy?: boolean
  is_tor?: boolean
  is_vpn?: boolean
  location?: Record<string, any>
  rir?: string
}

