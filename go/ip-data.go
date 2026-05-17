package voxgigipdatasdk

import (
	"github.com/voxgig-sdk/ip-data-sdk/go/core"
	"github.com/voxgig-sdk/ip-data-sdk/go/entity"
	"github.com/voxgig-sdk/ip-data-sdk/go/feature"
	_ "github.com/voxgig-sdk/ip-data-sdk/go/utility"
)

// Type aliases preserve external API.
type IpDataSDK = core.IpDataSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type IpDataEntity = core.IpDataEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type IpDataError = core.IpDataError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetIpInfoEntityFunc = func(client *core.IpDataSDK, entopts map[string]any) core.IpDataEntity {
		return entity.NewGetIpInfoEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewIpDataSDK = core.NewIpDataSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
