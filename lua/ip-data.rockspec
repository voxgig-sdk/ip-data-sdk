package = "voxgig-sdk-ip-data"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/ip-data-sdk.git"
}
description = {
  summary = "IpData SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["ip-data_sdk"] = "ip-data_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
