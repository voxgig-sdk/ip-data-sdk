# IpData SDK exists test

require "minitest/autorun"
require_relative "../IpData_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = IpDataSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
