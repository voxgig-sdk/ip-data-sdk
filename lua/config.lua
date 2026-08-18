-- IpData SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "IpData",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://api.ipapi.is",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["get_ip_info"] = {},
      },
    },
    entity = {
      ["get_ip_info"] = {
        ["fields"] = {
          {
            ["name"] = "asn",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "company",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "elapsed_ms",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "ip",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_abuser",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_bogon",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_crawler",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_datacenter",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_mobile",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_proxy",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_tor",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_vpn",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "location",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "rir",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "get_ip_info",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "23.236.48.55",
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/",
                ["parts"] = {},
                ["select"] = {
                  ["exist"] = {
                    "format",
                    "q",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
