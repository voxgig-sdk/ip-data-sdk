
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'IpData',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://api.ipapi.is",

    auth: {
      prefix: '',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      get_ip_info: {
      },

    }
  }


  entity = {
    "get_ip_info": {
      "fields": [
        {
          "name": "asn",
          "type": "`$OBJECT`"
        },
        {
          "name": "company",
          "type": "`$OBJECT`"
        },
        {
          "name": "elapsed_ms",
          "type": "`$NUMBER`"
        },
        {
          "name": "ip",
          "type": "`$STRING`"
        },
        {
          "name": "is_abuser",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_bogon",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_crawler",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_datacenter",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_mobile",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_proxy",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_tor",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_vpn",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "location",
          "type": "`$OBJECT`"
        },
        {
          "name": "rir",
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
              "parts": [],
              "select": {
                "exist": [
                  "format",
                  "q"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

