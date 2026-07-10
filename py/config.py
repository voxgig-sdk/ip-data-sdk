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
            "active": True,
            "name": "asn",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "company",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "elapsed_m",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "ip",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "is_abuser",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "is_bogon",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "is_crawler",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "is_datacenter",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "is_mobile",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_proxy",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "is_tor",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "is_vpn",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "location",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "rir",
            "req": False,
            "type": "`$STRING`",
            "index$": 13,
          },
        ],
        "name": "get_ip_info",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "23.236.48.55",
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
