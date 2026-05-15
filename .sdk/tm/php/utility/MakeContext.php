<?php
declare(strict_types=1);

// IpData SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class IpDataMakeContext
{
    public static function call(array $ctxmap, ?IpDataContext $basectx): IpDataContext
    {
        return new IpDataContext($ctxmap, $basectx);
    }
}
