-- Typed models for the IpData SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class GetIpInfo
---@field asn? table
---@field company? table
---@field elapsed_m? number
---@field ip? string
---@field is_abuser? boolean
---@field is_bogon? boolean
---@field is_crawler? boolean
---@field is_datacenter? boolean
---@field is_mobile? boolean
---@field is_proxy? boolean
---@field is_tor? boolean
---@field is_vpn? boolean
---@field location? table
---@field rir? string

---@class GetIpInfoLoadMatch

local M = {}

return M
