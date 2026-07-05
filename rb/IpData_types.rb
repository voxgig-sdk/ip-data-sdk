# frozen_string_literal: true

# Typed models for the IpData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetIpInfo entity data model.
#
# @!attribute [rw] asn
#   @return [Hash, nil]
#
# @!attribute [rw] company
#   @return [Hash, nil]
#
# @!attribute [rw] elapsed_m
#   @return [Float, nil]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] is_abuser
#   @return [Boolean, nil]
#
# @!attribute [rw] is_bogon
#   @return [Boolean, nil]
#
# @!attribute [rw] is_crawler
#   @return [Boolean, nil]
#
# @!attribute [rw] is_datacenter
#   @return [Boolean, nil]
#
# @!attribute [rw] is_mobile
#   @return [Boolean, nil]
#
# @!attribute [rw] is_proxy
#   @return [Boolean, nil]
#
# @!attribute [rw] is_tor
#   @return [Boolean, nil]
#
# @!attribute [rw] is_vpn
#   @return [Boolean, nil]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] rir
#   @return [String, nil]
GetIpInfo = Struct.new(
  :asn,
  :company,
  :elapsed_m,
  :ip,
  :is_abuser,
  :is_bogon,
  :is_crawler,
  :is_datacenter,
  :is_mobile,
  :is_proxy,
  :is_tor,
  :is_vpn,
  :location,
  :rir,
  keyword_init: true
)

# Request payload for GetIpInfo#load.
#
# @!attribute [rw] asn
#   @return [Hash, nil]
#
# @!attribute [rw] company
#   @return [Hash, nil]
#
# @!attribute [rw] elapsed_m
#   @return [Float, nil]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] is_abuser
#   @return [Boolean, nil]
#
# @!attribute [rw] is_bogon
#   @return [Boolean, nil]
#
# @!attribute [rw] is_crawler
#   @return [Boolean, nil]
#
# @!attribute [rw] is_datacenter
#   @return [Boolean, nil]
#
# @!attribute [rw] is_mobile
#   @return [Boolean, nil]
#
# @!attribute [rw] is_proxy
#   @return [Boolean, nil]
#
# @!attribute [rw] is_tor
#   @return [Boolean, nil]
#
# @!attribute [rw] is_vpn
#   @return [Boolean, nil]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] rir
#   @return [String, nil]
GetIpInfoLoadMatch = Struct.new(
  :asn,
  :company,
  :elapsed_m,
  :ip,
  :is_abuser,
  :is_bogon,
  :is_crawler,
  :is_datacenter,
  :is_mobile,
  :is_proxy,
  :is_tor,
  :is_vpn,
  :location,
  :rir,
  keyword_init: true
)

