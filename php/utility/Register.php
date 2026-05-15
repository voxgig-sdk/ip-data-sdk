<?php
declare(strict_types=1);

// IpData SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

IpDataUtility::setRegistrar(function (IpDataUtility $u): void {
    $u->clean = [IpDataClean::class, 'call'];
    $u->done = [IpDataDone::class, 'call'];
    $u->make_error = [IpDataMakeError::class, 'call'];
    $u->feature_add = [IpDataFeatureAdd::class, 'call'];
    $u->feature_hook = [IpDataFeatureHook::class, 'call'];
    $u->feature_init = [IpDataFeatureInit::class, 'call'];
    $u->fetcher = [IpDataFetcher::class, 'call'];
    $u->make_fetch_def = [IpDataMakeFetchDef::class, 'call'];
    $u->make_context = [IpDataMakeContext::class, 'call'];
    $u->make_options = [IpDataMakeOptions::class, 'call'];
    $u->make_request = [IpDataMakeRequest::class, 'call'];
    $u->make_response = [IpDataMakeResponse::class, 'call'];
    $u->make_result = [IpDataMakeResult::class, 'call'];
    $u->make_point = [IpDataMakePoint::class, 'call'];
    $u->make_spec = [IpDataMakeSpec::class, 'call'];
    $u->make_url = [IpDataMakeUrl::class, 'call'];
    $u->param = [IpDataParam::class, 'call'];
    $u->prepare_auth = [IpDataPrepareAuth::class, 'call'];
    $u->prepare_body = [IpDataPrepareBody::class, 'call'];
    $u->prepare_headers = [IpDataPrepareHeaders::class, 'call'];
    $u->prepare_method = [IpDataPrepareMethod::class, 'call'];
    $u->prepare_params = [IpDataPrepareParams::class, 'call'];
    $u->prepare_path = [IpDataPreparePath::class, 'call'];
    $u->prepare_query = [IpDataPrepareQuery::class, 'call'];
    $u->result_basic = [IpDataResultBasic::class, 'call'];
    $u->result_body = [IpDataResultBody::class, 'call'];
    $u->result_headers = [IpDataResultHeaders::class, 'call'];
    $u->transform_request = [IpDataTransformRequest::class, 'call'];
    $u->transform_response = [IpDataTransformResponse::class, 'call'];
});
