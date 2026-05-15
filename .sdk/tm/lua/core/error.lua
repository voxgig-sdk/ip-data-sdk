-- IpData SDK error

local IpDataError = {}
IpDataError.__index = IpDataError


function IpDataError.new(code, msg, ctx)
  local self = setmetatable({}, IpDataError)
  self.is_sdk_error = true
  self.sdk = "IpData"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function IpDataError:error()
  return self.msg
end


function IpDataError:__tostring()
  return self.msg
end


return IpDataError
