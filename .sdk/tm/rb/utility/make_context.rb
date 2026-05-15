# IpData SDK utility: make_context
require_relative '../core/context'
module IpDataUtilities
  MakeContext = ->(ctxmap, basectx) {
    IpDataContext.new(ctxmap, basectx)
  }
end
