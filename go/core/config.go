package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "IpData",
			"slug": "ip-data",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.ipapi.is",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"get_ip_info": map[string]any{},
			},
		},
		"entity": map[string]any{
			"get_ip_info": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "asn",
						"short": "Information about the autonomous system that routes the IP address",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "company",
						"short": "Information about the organization that owns the IP address (from WHOIS data)",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "elapsed_ms",
						"short": "API processing time in milliseconds",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "ip",
						"short": "The queried IP address",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_abuser",
						"short": "Whether the IP has been involved in malicious activities",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_bogon",
						"short": "Whether the IP is a bogon (reserved/private IP)",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_crawler",
						"short": "Whether the IP is from a known web crawler",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_datacenter",
						"short": "Whether the IP is from a datacenter or hosting provider",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_mobile",
						"short": "Whether the IP is from a mobile network",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_proxy",
						"short": "Whether the IP is a known proxy",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_tor",
						"short": "Whether the IP is a Tor exit node",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_vpn",
						"short": "Whether the IP is from a VPN service",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "location",
						"short": "Geographic location information for the IP address",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "rir",
						"short": "Regional Internet Registry (ARIN, APNIC, RIPE, AFRINIC, LACNIC)",
						"type": "`$STRING`",
					},
				},
				"name": "get_ip_info",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "23.236.48.55",
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/",
								"segments": []any{},
								"select": map[string]any{
									"exist": []any{
										"format",
										"q",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
