# IpData SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module IpDataFeatures
  def self.make_feature(name)
    case name
    when "base"
      IpDataBaseFeature.new
    when "ratelimit"
      IpDataRatelimitFeature.new
    when "retry"
      IpDataRetryFeature.new
    when "test"
      IpDataTestFeature.new
    when "timeout"
      IpDataTimeoutFeature.new
    else
      IpDataBaseFeature.new
    end
  end
end
