# IpData SDK feature factory

from ipdata_sdk.feature.base_feature import IpDataBaseFeature
from ipdata_sdk.feature.test_feature import IpDataTestFeature


def _make_feature(name):
    features = {
        "base": lambda: IpDataBaseFeature(),
        "test": lambda: IpDataTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
