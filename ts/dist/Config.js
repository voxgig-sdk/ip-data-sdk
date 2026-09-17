"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'IpData',
        slug: "ip-data",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://api.ipapi.is",
        auth: {
            prefix: '',
            in: 'query',
            name: 'key',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            get_ip_info: {},
        }
    };
    entity = {
        "get_ip_info": {
            "fields": [
                {
                    "name": "asn",
                    "short": "Information about the autonomous system that routes the IP address",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "company",
                    "short": "Information about the organization that owns the IP address (from WHOIS data)",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "elapsed_ms",
                    "short": "API processing time in milliseconds",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "ip",
                    "short": "The queried IP address",
                    "type": "`$STRING`"
                },
                {
                    "name": "is_abuser",
                    "short": "Whether the IP has been involved in malicious activities",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "is_bogon",
                    "short": "Whether the IP is a bogon (reserved/private IP)",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "is_crawler",
                    "short": "Whether the IP is from a known web crawler",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "is_datacenter",
                    "short": "Whether the IP is from a datacenter or hosting provider",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "is_mobile",
                    "short": "Whether the IP is from a mobile network",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "is_proxy",
                    "short": "Whether the IP is a known proxy",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "is_tor",
                    "short": "Whether the IP is a Tor exit node",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "is_vpn",
                    "short": "Whether the IP is from a VPN service",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "location",
                    "short": "Geographic location information for the IP address",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "rir",
                    "short": "Regional Internet Registry (ARIN, APNIC, RIPE, AFRINIC, LACNIC)",
                    "type": "`$STRING`"
                }
            ],
            "name": "get_ip_info",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "23.236.48.55",
                                        "kind": "query",
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/",
                            "segments": [],
                            "select": {
                                "exist": [
                                    "format",
                                    "q"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": []
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map