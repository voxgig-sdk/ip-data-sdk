<?php
declare(strict_types=1);

// IpData SDK utility: prepare_body

class IpDataPrepareBody
{
    public static function call(IpDataContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
