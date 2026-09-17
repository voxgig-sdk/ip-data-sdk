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
                "slug" => "ip-data",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api.ipapi.is",
                "auth" => [
                    "prefix" => "",
                    "in" => "query",
                    "name" => "key",
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
              'short' => 'Information about the autonomous system that routes the IP address',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'company',
              'short' => 'Information about the organization that owns the IP address (from WHOIS data)',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'elapsed_ms',
              'short' => 'API processing time in milliseconds',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'ip',
              'short' => 'The queried IP address',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'is_abuser',
              'short' => 'Whether the IP has been involved in malicious activities',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_bogon',
              'short' => 'Whether the IP is a bogon (reserved/private IP)',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_crawler',
              'short' => 'Whether the IP is from a known web crawler',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_datacenter',
              'short' => 'Whether the IP is from a datacenter or hosting provider',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_mobile',
              'short' => 'Whether the IP is from a mobile network',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_proxy',
              'short' => 'Whether the IP is a known proxy',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_tor',
              'short' => 'Whether the IP is a Tor exit node',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_vpn',
              'short' => 'Whether the IP is from a VPN service',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'location',
              'short' => 'Geographic location information for the IP address',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'rir',
              'short' => 'Regional Internet Registry (ARIN, APNIC, RIPE, AFRINIC, LACNIC)',
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
                  'segments' => [],
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
                  'parts' => [],
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
