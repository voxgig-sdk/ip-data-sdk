# IpData SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "IpData",
            "slug": "ip-data",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://api.ipapi.is",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "get_ip_info": {},
            },
        },
        "entity": {
      "get_ip_info": {
        "fields": [
          {
            "name": "asn",
            "short": "Information about the autonomous system that routes the IP address",
            "type": "`$OBJECT`",
          },
          {
            "name": "company",
            "short": "Information about the organization that owns the IP address (from WHOIS data)",
            "type": "`$OBJECT`",
          },
          {
            "name": "elapsed_ms",
            "short": "API processing time in milliseconds",
            "type": "`$NUMBER`",
          },
          {
            "name": "ip",
            "short": "The queried IP address",
            "type": "`$STRING`",
          },
          {
            "name": "is_abuser",
            "short": "Whether the IP has been involved in malicious activities",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_bogon",
            "short": "Whether the IP is a bogon (reserved/private IP)",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_crawler",
            "short": "Whether the IP is from a known web crawler",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_datacenter",
            "short": "Whether the IP is from a datacenter or hosting provider",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_mobile",
            "short": "Whether the IP is from a mobile network",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_proxy",
            "short": "Whether the IP is a known proxy",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_tor",
            "short": "Whether the IP is a Tor exit node",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_vpn",
            "short": "Whether the IP is from a VPN service",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "location",
            "short": "Geographic location information for the IP address",
            "type": "`$OBJECT`",
          },
          {
            "name": "rir",
            "short": "Regional Internet Registry (ARIN, APNIC, RIPE, AFRINIC, LACNIC)",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                    {
                      "example": "23.236.48.55",
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/",
                "parts": [],
                "select": {
                  "exist": [
                    "format",
                    "q",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
