<?php
declare(strict_types=1);

// IpData SDK utility: feature_add

class IpDataFeatureAdd
{
    public static function call(IpDataContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
