# IpData SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module IpDataFeatures
  def self.make_feature(name)
    case name
    when "base"
      IpDataBaseFeature.new
    when "test"
      IpDataTestFeature.new
    else
      IpDataBaseFeature.new
    end
  end
end
