<?php
declare(strict_types=1);

// Typed models for the IpData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** GetIpInfo entity data model. */
class GetIpInfo
{
    public ?array $asn = null;
    public ?array $company = null;
    public ?float $elapsed_m = null;
    public ?string $ip = null;
    public ?bool $is_abuser = null;
    public ?bool $is_bogon = null;
    public ?bool $is_crawler = null;
    public ?bool $is_datacenter = null;
    public ?bool $is_mobile = null;
    public ?bool $is_proxy = null;
    public ?bool $is_tor = null;
    public ?bool $is_vpn = null;
    public ?array $location = null;
    public ?string $rir = null;
}

/** Match filter for GetIpInfo#load (any subset of GetIpInfo fields). */
class GetIpInfoLoadMatch
{
    public ?array $asn = null;
    public ?array $company = null;
    public ?float $elapsed_m = null;
    public ?string $ip = null;
    public ?bool $is_abuser = null;
    public ?bool $is_bogon = null;
    public ?bool $is_crawler = null;
    public ?bool $is_datacenter = null;
    public ?bool $is_mobile = null;
    public ?bool $is_proxy = null;
    public ?bool $is_tor = null;
    public ?bool $is_vpn = null;
    public ?array $location = null;
    public ?string $rir = null;
}

