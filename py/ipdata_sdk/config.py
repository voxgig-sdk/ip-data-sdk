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
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "type": "`$OBJECT`",
          },
          {
            "name": "company",
            "type": "`$OBJECT`",
          },
          {
            "name": "elapsed_ms",
            "type": "`$NUMBER`",
          },
          {
            "name": "ip",
            "type": "`$STRING`",
          },
          {
            "name": "is_abuser",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_bogon",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_crawler",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_datacenter",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_mobile",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_proxy",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_tor",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_vpn",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "location",
            "type": "`$OBJECT`",
          },
          {
            "name": "rir",
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
