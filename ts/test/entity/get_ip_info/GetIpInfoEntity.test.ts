

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { IpDataSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetIpInfoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_DATA_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_DATA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpDataSDK.test()
    const ent = testsdk.GetIpInfo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_DATA_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_ip_info.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"asn","req":false,"short":"Information about the autonomous system that routes the IP address","type":"`$OBJECT`","index$":0},{"active":true,"name":"company","req":false,"short":"Information about the organization that owns the IP address (from WHOIS data)","type":"`$OBJECT`","index$":1},{"active":true,"name":"elapsed_ms","req":false,"short":"API processing time in milliseconds","type":"`$NUMBER`","index$":2},{"active":true,"name":"ip","req":false,"short":"The queried IP address","type":"`$STRING`","index$":3},{"active":true,"name":"is_abuser","req":false,"short":"Whether the IP has been involved in malicious activities","type":"`$BOOLEAN`","index$":4},{"active":true,"name":"is_bogon","req":false,"short":"Whether the IP is a bogon (reserved/private IP)","type":"`$BOOLEAN`","index$":5},{"active":true,"name":"is_crawler","req":false,"short":"Whether the IP is from a known web crawler","type":"`$BOOLEAN`","index$":6},{"active":true,"name":"is_datacenter","req":false,"short":"Whether the IP is from a datacenter or hosting provider","type":"`$BOOLEAN`","index$":7},{"active":true,"name":"is_mobile","req":false,"short":"Whether the IP is from a mobile network","type":"`$BOOLEAN`","index$":8},{"active":true,"name":"is_proxy","req":false,"short":"Whether the IP is a known proxy","type":"`$BOOLEAN`","index$":9},{"active":true,"name":"is_tor","req":false,"short":"Whether the IP is a Tor exit node","type":"`$BOOLEAN`","index$":10},{"active":true,"name":"is_vpn","req":false,"short":"Whether the IP is from a VPN service","type":"`$BOOLEAN`","index$":11},{"active":true,"name":"location","req":false,"short":"Geographic location information for the IP address","type":"`$OBJECT`","index$":12},{"active":true,"name":"rir","req":false,"short":"Regional Internet Registry (ARIN, APNIC, RIPE, AFRINIC, LACNIC)","type":"`$STRING`","index$":13}],"name":"get_ip_info","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"23.236.48.55","kind":"query","name":"q","orig":"q","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /","json":"{\"operationId\":\"getIpInfo\",\"parameters\":[{\"description\":\"The IP address (IPv4 or IPv6) or ASN to query. If not provided, returns information about the requester's IP address.\",\"in\":\"query\",\"name\":\"q\",\"required\":false,\"schema\":{\"example\":\"23.236.48.55\",\"type\":\"string\"}},{\"description\":\"Output format for the response\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"html\",\"toon\",\"text\",\"csv\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"success\":{\"summary\":\"Example IP lookup response\",\"value\":{\"asn\":{\"abuse\":\"abuse@akamai.com\",\"active\":true,\"asn\":20940,\"country\":\"US\",\"created\":\"2001-09-25\",\"descr\":\"AKAMAI-ASN1\",\"domain\":\"akamai.com\",\"org\":\"Akamai International B.V.\",\"rir\":\"ARIN\",\"route\":\"23.236.48.0/20\",\"type\":\"hosting\",\"updated\":\"2023-08-03\",\"whois\":\"https://ipapi.is/whois/AS20940\"},\"company\":{\"abuser_score\":\"0.00\",\"domain\":\"akamai.com\",\"name\":\"Akamai Technologies Inc.\",\"network\":\"23.0.0.0/8\",\"type\":\"hosting\",\"whois\":\"https://ipapi.is/whois/23.236.48.55\"},\"elapsed_ms\":1.02,\"ip\":\"23.236.48.55\",\"is_abuser\":false,\"is_bogon\":false,\"is_crawler\":false,\"is_datacenter\":true,\"is_mobile\":false,\"is_proxy\":false,\"is_tor\":false,\"is_vpn\":false,\"location\":{\"city\":\"Los Angeles\",\"continent\":\"NA\",\"country\":\"US\",\"country_name\":\"United States\",\"is_dst\":true,\"latitude\":34.0522,\"local_time\":\"2023-08-15T10:30:00-07:00\",\"local_time_unix\":1692122400,\"longitude\":-118.2437,\"state\":\"California\",\"timezone\":\"America/Los_Angeles\",\"zip\":\"90001\"},\"rir\":\"ARIN\"}}},\"schema\":{\"properties\":{\"asn\":{\"description\":\"Information about the autonomous system that routes the IP address\",\"properties\":{\"abuse\":{\"description\":\"Abuse contact email\",\"type\":\"string\"},\"active\":{\"description\":\"Whether the ASN is currently active\",\"type\":\"boolean\"},\"asn\":{\"description\":\"Autonomous System Number\",\"type\":\"integer\"},\"country\":{\"description\":\"Country code of the ASN\",\"type\":\"string\"},\"created\":{\"description\":\"Date when the ASN was created\",\"format\":\"date\",\"type\":\"string\"},\"descr\":{\"description\":\"Description of the ASN\",\"type\":\"string\"},\"domain\":{\"description\":\"Domain of the organization\",\"type\":\"string\"},\"org\":{\"description\":\"Organization name associated with the ASN\",\"type\":\"string\"},\"rir\":{\"description\":\"Regional Internet Registry\",\"type\":\"string\"},\"route\":{\"description\":\"Route or prefix in CIDR notation\",\"type\":\"string\"},\"type\":{\"description\":\"Type of ASN\",\"enum\":[\"isp\",\"hosting\",\"business\",\"education\",\"government\"],\"type\":\"string\"},\"updated\":{\"description\":\"Date when the ASN was last updated\",\"format\":\"date\",\"type\":\"string\"},\"whois\":{\"description\":\"URL to ASN WHOIS information\",\"type\":\"string\"}},\"type\":\"object\"},\"company\":{\"description\":\"Information about the organization that owns the IP address (from WHOIS data)\",\"properties\":{\"abuser_score\":{\"description\":\"Abuse score for the organization\",\"type\":\"string\"},\"domain\":{\"description\":\"Domain name of the organization\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the organization owning the IP\",\"type\":\"string\"},\"network\":{\"description\":\"Network range in CIDR notation\",\"type\":\"string\"},\"type\":{\"description\":\"Type of organization\",\"enum\":[\"isp\",\"hosting\",\"business\",\"education\",\"government\"],\"type\":\"string\"},\"whois\":{\"description\":\"URL to WHOIS information\",\"type\":\"string\"}},\"type\":\"object\"},\"elapsed_ms\":{\"description\":\"API processing time in milliseconds\",\"type\":\"number\"},\"ip\":{\"description\":\"The queried IP address\",\"type\":\"string\"},\"is_abuser\":{\"description\":\"Whether the IP has been involved in malicious activities\",\"type\":\"boolean\"},\"is_bogon\":{\"description\":\"Whether the IP is a bogon (reserved/private IP)\",\"type\":\"boolean\"},\"is_crawler\":{\"description\":\"Whether the IP is from a known web crawler\",\"type\":\"boolean\"},\"is_datacenter\":{\"description\":\"Whether the IP is from a datacenter or hosting provider\",\"type\":\"boolean\"},\"is_mobile\":{\"description\":\"Whether the IP is from a mobile network\",\"type\":\"boolean\"},\"is_proxy\":{\"description\":\"Whether the IP is a known proxy\",\"type\":\"boolean\"},\"is_tor\":{\"description\":\"Whether the IP is a Tor exit node\",\"type\":\"boolean\"},\"is_vpn\":{\"description\":\"Whether the IP is from a VPN service\",\"type\":\"boolean\"},\"location\":{\"description\":\"Geographic location information for the IP address\",\"properties\":{\"city\":{\"description\":\"City name\",\"type\":\"string\"},\"continent\":{\"description\":\"Continent code (e.g., NA, EU, AS)\",\"type\":\"string\"},\"country\":{\"description\":\"ISO 3166-1 alpha-2 country code\",\"type\":\"string\"},\"country_name\":{\"description\":\"Full country name\",\"type\":\"string\"},\"is_dst\":{\"description\":\"Whether daylight saving time is active\",\"type\":\"boolean\"},\"latitude\":{\"description\":\"Latitude coordinate\",\"format\":\"double\",\"type\":\"number\"},\"local_time\":{\"description\":\"Local time in ISO 8601 format\",\"format\":\"date-time\",\"type\":\"string\"},\"local_time_unix\":{\"description\":\"Local time as Unix timestamp\",\"type\":\"integer\"},\"longitude\":{\"description\":\"Longitude coordinate\",\"format\":\"double\",\"type\":\"number\"},\"state\":{\"description\":\"State or region name\",\"type\":\"string\"},\"timezone\":{\"description\":\"IANA timezone identifier\",\"type\":\"string\"},\"zip\":{\"description\":\"Postal/ZIP code\",\"type\":\"string\"}},\"type\":\"object\"},\"rir\":{\"description\":\"Regional Internet Registry (ARIN, APNIC, RIPE, AFRINIC, LACNIC)\",\"enum\":[\"ARIN\",\"APNIC\",\"RIPE\",\"AFRINIC\",\"LACNIC\"],\"type\":\"string\"}},\"type\":\"object\"}},\"text/csv\":{\"schema\":{\"type\":\"string\"}},\"text/html\":{\"schema\":{\"type\":\"string\"}},\"text/plain\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Successful response with IP address information\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid IP address or parameters\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Unauthorized - invalid or missing API key\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"security\":[{\"ApiKeyAuth\":[]},{}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication. Free tier provides 1,000 requests per day. Sign up at https://ipapi.is/ to get your API key.\",\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/","segments":[],"select":{"exist":["format","q"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_ip_info","name__orig":"get_ip_info","Name":"GetIpInfo","name_":"get_ip_info","name-":"get-ip-info","NAME":"GET_IP_INFO","index$":0}, {"active":true,"entity":"get_ip_info","key$":"BasicGetIpInfoFlow","kind":"basic","name":"BasicGetIpInfoFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"get_ip_info_ref01","srcdatavar":"get_ip_info_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_ip_info_ref01"}}],"index$":0}]}, 'GetIpInfo')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_ip_info_ref01_data = Object.values(setup.data.existing.get_ip_info)[0] as any

    // LOAD
    const get_ip_info_ref01_ent = client.GetIpInfo()
    const get_ip_info_ref01_match_dt0: any = {}
    const get_ip_info_ref01_data_dt0 = (await get_ip_info_ref01_ent.load(get_ip_info_ref01_match_dt0)).data()
    assert(null != get_ip_info_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_ip_info/GetIpInfoTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = IpDataSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_ip_info01','get_ip_info02','get_ip_info03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_DATA_TEST_GET_IP_INFO_ENTID': idmap,
    'IP_DATA_TEST_LIVE': 'FALSE',
    'IP_DATA_TEST_EXPLAIN': 'FALSE',
    'IP_DATA_APIKEY': '',
  })

  idmap = env['IP_DATA_TEST_GET_IP_INFO_ENTID']

  const live = 'TRUE' === env.IP_DATA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_DATA_TEST_GET_IP_INFO_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new IpDataSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.IP_DATA_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.IP_DATA_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
