# IpData SDK configuration


def make_config():
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
                "prefix": "Bearer",
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
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "company",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "elapsed_m",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "ip",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "is_abuser",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "is_bogon",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "is_crawler",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "is_datacenter",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "is_mobile",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "is_proxy",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "is_tor",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "is_vpn",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "location",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "rir",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 13,
          },
        ],
        "name": "get_ip_info",
        "op": {
          "load": {
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
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "23.236.48.55",
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/",
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
                "active": True,
                "parts": [],
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
