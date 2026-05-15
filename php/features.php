<?php
declare(strict_types=1);

// IpData SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class IpDataFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new IpDataBaseFeature();
            case "test":
                return new IpDataTestFeature();
            default:
                return new IpDataBaseFeature();
        }
    }
}
