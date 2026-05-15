package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetIpInfoEntityFunc func(client *IpDataSDK, entopts map[string]any) IpDataEntity

