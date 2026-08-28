# IpData TypeScript SDK Reference

Complete API reference for the IpData TypeScript SDK.


## IpDataSDK

### Constructor

```ts
new IpDataSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IpDataSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = IpDataSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `IpDataSDK` instance in test mode.


### Instance Methods

#### `GetIpInfo(data?: object)`

Create a new `GetIpInfo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GetIpInfoEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `IpDataSDK.test()`.

**Returns:** `IpDataSDK` instance in test mode.


---

## GetIpInfoEntity

```ts
const get_ip_info = client.GetIpInfo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `Record<string, any>` | No | Information about the autonomous system that routes the IP address |
| `company` | `Record<string, any>` | No | Information about the organization that owns the IP address (from WHOIS data) |
| `elapsed_ms` | `number` | No | API processing time in milliseconds |
| `ip` | `string` | No | The queried IP address |
| `is_abuser` | `boolean` | No | Whether the IP has been involved in malicious activities |
| `is_bogon` | `boolean` | No | Whether the IP is a bogon (reserved/private IP) |
| `is_crawler` | `boolean` | No | Whether the IP is from a known web crawler |
| `is_datacenter` | `boolean` | No | Whether the IP is from a datacenter or hosting provider |
| `is_mobile` | `boolean` | No | Whether the IP is from a mobile network |
| `is_proxy` | `boolean` | No | Whether the IP is a known proxy |
| `is_tor` | `boolean` | No | Whether the IP is a Tor exit node |
| `is_vpn` | `boolean` | No | Whether the IP is from a VPN service |
| `location` | `Record<string, any>` | No | Geographic location information for the IP address |
| `rir` | `string` | No | Regional Internet Registry (ARIN, APNIC, RIPE, AFRINIC, LACNIC) |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GetIpInfo().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GetIpInfoEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpDataSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new IpDataSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

