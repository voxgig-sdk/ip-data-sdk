// Typed models for the IpData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// GetIpInfo is the typed data model for the get_ip_info entity.
type GetIpInfo struct {
	Asn *map[string]any `json:"asn,omitempty"`
	Company *map[string]any `json:"company,omitempty"`
	ElapsedM *float64 `json:"elapsed_m,omitempty"`
	Ip *string `json:"ip,omitempty"`
	IsAbuser *bool `json:"is_abuser,omitempty"`
	IsBogon *bool `json:"is_bogon,omitempty"`
	IsCrawler *bool `json:"is_crawler,omitempty"`
	IsDatacenter *bool `json:"is_datacenter,omitempty"`
	IsMobile *bool `json:"is_mobile,omitempty"`
	IsProxy *bool `json:"is_proxy,omitempty"`
	IsTor *bool `json:"is_tor,omitempty"`
	IsVpn *bool `json:"is_vpn,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Rir *string `json:"rir,omitempty"`
}

// GetIpInfoLoadMatch is the typed request payload for GetIpInfo.LoadTyped.
type GetIpInfoLoadMatch struct {
	Asn *map[string]any `json:"asn,omitempty"`
	Company *map[string]any `json:"company,omitempty"`
	ElapsedM *float64 `json:"elapsed_m,omitempty"`
	Ip *string `json:"ip,omitempty"`
	IsAbuser *bool `json:"is_abuser,omitempty"`
	IsBogon *bool `json:"is_bogon,omitempty"`
	IsCrawler *bool `json:"is_crawler,omitempty"`
	IsDatacenter *bool `json:"is_datacenter,omitempty"`
	IsMobile *bool `json:"is_mobile,omitempty"`
	IsProxy *bool `json:"is_proxy,omitempty"`
	IsTor *bool `json:"is_tor,omitempty"`
	IsVpn *bool `json:"is_vpn,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Rir *string `json:"rir,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
