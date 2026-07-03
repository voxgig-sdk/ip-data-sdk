<?php
declare(strict_types=1);

// IpData SDK configuration

class IpDataConfig
{
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
                    "prefix" => "Bearer",
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
              'active' => true,
              'name' => 'asn',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'company',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'elapsed_m',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'ip',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'is_abuser',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'is_bogon',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'is_crawler',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'is_datacenter',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'is_mobile',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'is_proxy',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'is_tor',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'is_vpn',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'location',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'rir',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
          ],
          'name' => 'get_ip_info',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '23.236.48.55',
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
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
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
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
