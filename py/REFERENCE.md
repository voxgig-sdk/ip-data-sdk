# IpData Python SDK Reference

Complete API reference for the IpData Python SDK.


## IpDataSDK

### Constructor

```python
from ip-data_sdk import IpDataSDK

client = IpDataSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IpDataSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = IpDataSDK.test()
```


### Instance Methods

#### `GetIpInfo(data=None)`

Create a new `GetIpInfoEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## GetIpInfoEntity

```python
get_ip_info = client.GetIpInfo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | ``$OBJECT`` | No |  |
| `company` | ``$OBJECT`` | No |  |
| `elapsed_m` | ``$NUMBER`` | No |  |
| `ip` | ``$STRING`` | No |  |
| `is_abuser` | ``$BOOLEAN`` | No |  |
| `is_bogon` | ``$BOOLEAN`` | No |  |
| `is_crawler` | ``$BOOLEAN`` | No |  |
| `is_datacenter` | ``$BOOLEAN`` | No |  |
| `is_mobile` | ``$BOOLEAN`` | No |  |
| `is_proxy` | ``$BOOLEAN`` | No |  |
| `is_tor` | ``$BOOLEAN`` | No |  |
| `is_vpn` | ``$BOOLEAN`` | No |  |
| `location` | ``$OBJECT`` | No |  |
| `rir` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GetIpInfo().load({"id": "get_ip_info_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetIpInfoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = IpDataSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

