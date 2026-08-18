<?php
declare(strict_types=1);

// IpData SDK configuration

class IpDataConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "IpData",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.ipapi.is",
                "auth" => [
                    "prefix" => "",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "get_ip_info" => [],
                ],
            ],
            "entity" => [
        'get_ip_info' => [
          'fields' => [
            [
              'name' => 'asn',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'company',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'elapsed_ms',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'ip',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'is_abuser',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_bogon',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_crawler',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_datacenter',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_mobile',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_proxy',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_tor',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_vpn',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'location',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'rir',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'get_ip_info',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '23.236.48.55',
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/',
                  'parts' => [],
                  'select' => [
                    'exist' => [
                      'format',
                      'q',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return IpDataFeatures::make_feature($name);
    }
}
