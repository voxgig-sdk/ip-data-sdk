# IpData SDK configuration

module IpDataConfig
  def self.make_config
    {
      "main" => {
        "name" => "IpData",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.ipapi.is",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "get_ip_info" => {},
        },
      },
      "entity" => {
        "get_ip_info" => {
          "fields" => [
            {
              "name" => "asn",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "company",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "elapsed_m",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "ip",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 3,
            },
            {
              "name" => "is_abuser",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 4,
            },
            {
              "name" => "is_bogon",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 5,
            },
            {
              "name" => "is_crawler",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 6,
            },
            {
              "name" => "is_datacenter",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 7,
            },
            {
              "name" => "is_mobile",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 8,
            },
            {
              "name" => "is_proxy",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 9,
            },
            {
              "name" => "is_tor",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 10,
            },
            {
              "name" => "is_vpn",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 11,
            },
            {
              "name" => "location",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 12,
            },
            {
              "name" => "rir",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 13,
            },
          ],
          "name" => "get_ip_info",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => "23.236.48.55",
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/",
                  "select" => {
                    "exist" => [
                      "format",
                      "q",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "parts" => [],
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    IpDataFeatures.make_feature(name)
  end
end
