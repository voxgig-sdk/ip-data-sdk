# IpData SDK feature factory

from ipdata_sdk.feature.base_feature import IpDataBaseFeature
from ipdata_sdk.feature.ratelimit_feature import IpDataRatelimitFeature
from ipdata_sdk.feature.retry_feature import IpDataRetryFeature
from ipdata_sdk.feature.test_feature import IpDataTestFeature
from ipdata_sdk.feature.timeout_feature import IpDataTimeoutFeature


_FEATURES = {
    "base": lambda: IpDataBaseFeature(),
    "ratelimit": lambda: IpDataRatelimitFeature(),
    "retry": lambda: IpDataRetryFeature(),
    "test": lambda: IpDataTestFeature(),
    "timeout": lambda: IpDataTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
