# IpData SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

IpDataUtility.registrar = ->(u) {
  u.clean = IpDataUtilities::Clean
  u.done = IpDataUtilities::Done
  u.make_error = IpDataUtilities::MakeError
  u.feature_add = IpDataUtilities::FeatureAdd
  u.feature_hook = IpDataUtilities::FeatureHook
  u.feature_init = IpDataUtilities::FeatureInit
  u.fetcher = IpDataUtilities::Fetcher
  u.make_fetch_def = IpDataUtilities::MakeFetchDef
  u.make_context = IpDataUtilities::MakeContext
  u.make_options = IpDataUtilities::MakeOptions
  u.make_request = IpDataUtilities::MakeRequest
  u.make_response = IpDataUtilities::MakeResponse
  u.make_result = IpDataUtilities::MakeResult
  u.make_point = IpDataUtilities::MakePoint
  u.make_spec = IpDataUtilities::MakeSpec
  u.make_url = IpDataUtilities::MakeUrl
  u.param = IpDataUtilities::Param
  u.prepare_auth = IpDataUtilities::PrepareAuth
  u.prepare_body = IpDataUtilities::PrepareBody
  u.prepare_headers = IpDataUtilities::PrepareHeaders
  u.prepare_method = IpDataUtilities::PrepareMethod
  u.prepare_params = IpDataUtilities::PrepareParams
  u.prepare_path = IpDataUtilities::PreparePath
  u.prepare_query = IpDataUtilities::PrepareQuery
  u.result_basic = IpDataUtilities::ResultBasic
  u.result_body = IpDataUtilities::ResultBody
  u.result_headers = IpDataUtilities::ResultHeaders
  u.transform_request = IpDataUtilities::TransformRequest
  u.transform_response = IpDataUtilities::TransformResponse
}
