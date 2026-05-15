package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "IpData",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://api.ipapi.is",
			"auth": map[string]any{
				"prefix": "Bearer",
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
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "company",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "elapsed_m",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "ip",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "is_abuser",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "is_bogon",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "is_crawler",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "is_datacenter",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "is_mobile",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "is_proxy",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "is_tor",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "is_vpn",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "location",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "rir",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 13,
					},
				},
				"name": "get_ip_info",
				"op": map[string]any{
					"load": map[string]any{
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
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "23.236.48.55",
											"kind": "query",
											"name": "q",
											"orig": "q",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/",
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
								"active": true,
								"parts": []any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
