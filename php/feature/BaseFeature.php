<?php
declare(strict_types=1);

// IpData SDK base feature

class IpDataBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(IpDataContext $ctx, array $options): void {}
    public function PostConstruct(IpDataContext $ctx): void {}
    public function PostConstructEntity(IpDataContext $ctx): void {}
    public function SetData(IpDataContext $ctx): void {}
    public function GetData(IpDataContext $ctx): void {}
    public function GetMatch(IpDataContext $ctx): void {}
    public function SetMatch(IpDataContext $ctx): void {}
    public function PrePoint(IpDataContext $ctx): void {}
    public function PreSpec(IpDataContext $ctx): void {}
    public function PreRequest(IpDataContext $ctx): void {}
    public function PreResponse(IpDataContext $ctx): void {}
    public function PreResult(IpDataContext $ctx): void {}
    public function PreDone(IpDataContext $ctx): void {}
    public function PreUnexpected(IpDataContext $ctx): void {}
}
