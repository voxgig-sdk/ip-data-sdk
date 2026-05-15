<?php
declare(strict_types=1);

// IpData SDK utility: result_headers

class IpDataResultHeaders
{
    public static function call(IpDataContext $ctx): ?IpDataResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
