# ProjectName SDK exists test

import pytest
from ipdata_sdk import IpDataSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = IpDataSDK.test(None, None)
        assert testsdk is not None
