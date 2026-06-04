# IpData SDK

Look up geolocation, ASN, hosting, VPN/proxy/Tor, and abuse signals for any IP address

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About IP Data API

[ipapi.is](https://ipapi.is/) is an IP intelligence API that returns geolocation, network ownership, and risk signals for any IPv4 or IPv6 address. The service sources its ownership data from the five Regional Internet Registries (RIRs) via WHOIS and combines it with detection heuristics for hosting, anonymization, and abuse.

What you get from the API:

- IP metadata flags including `bogon`, `mobile`, `satellite`, and `crawler` status
- Detection of datacenter, VPN, proxy, and Tor exit nodes
- Company and ASN details with abuser scores, network range, and routing information
- Geolocation including country, state, city, latitude, longitude, timezone, and local time
- Abuse contact information (name, address, email) drawn from WHOIS records

The primary endpoint is `GET https://api.ipapi.is/?q={ip}` and responses are available in JSON, HTML, Toon, text, or CSV. Bulk lookups of up to 100 IPs per call are supported on standard plans (up to 1,000 per call on higher tiers). CORS is enabled.

## Try it

**TypeScript**
```bash
npm install ip-data
```

**Python**
```bash
pip install ip-data-sdk
```

**PHP**
```bash
composer require voxgig/ip-data-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/ip-data-sdk/go
```

**Ruby**
```bash
gem install ip-data-sdk
```

**Lua**
```bash
luarocks install ip-data-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { IpDataSDK } from 'ip-data'

const client = new IpDataSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o ip-data-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "ip-data": {
      "command": "/abs/path/to/ip-data-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **GetIpInfo** | Returns the full IP intelligence record — geolocation, ASN/company, hosting and anonymization flags, and abuse signals — via `GET /?q={ip}`. | `/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from ipdata_sdk import IpDataSDK

client = IpDataSDK({})


# Load a specific getipinfo
getipinfo, err = client.GetIpInfo(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'ipdata_sdk.php';

$client = new IpDataSDK([]);


// Load a specific getipinfo
[$getipinfo, $err] = $client->GetIpInfo(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/ip-data-sdk/go"

client := sdk.NewIpDataSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "IpData_sdk"

client = IpDataSDK.new({})


# Load a specific getipinfo
getipinfo, err = client.GetIpInfo(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("ip-data_sdk")

local client = sdk.new({})


-- Load a specific getipinfo
local getipinfo, err = client:GetIpInfo(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = IpDataSDK.test()
const result = await client.GetIpInfo().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = IpDataSDK.test(None, None)
result, err = client.GetIpInfo(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = IpDataSDK::test(null, null);
[$result, $err] = $client->GetIpInfo(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetIpInfo(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = IpDataSDK.test(nil, nil)
result, err = client.GetIpInfo(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetIpInfo(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the IP Data API

- Upstream: [https://ipapi.is/](https://ipapi.is/)

- Free plan offers 1,000 daily requests with no signup required for basic usage
- Paid plans available; purchased credits remain valid indefinitely
- Terms and privacy policy at https://ipapi.is/terms.html and https://ipapi.is/privacy.html
- WHOIS-sourced data attributed to the five Regional Internet Registries

---

Generated from the IP Data API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
