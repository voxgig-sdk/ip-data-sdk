<?php
declare(strict_types=1);

// IpData SDK utility: result_body

class IpDataResultBody
{
    public static function call(IpDataContext $ctx): ?IpDataResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
