# IpData SDK utility: make_context

from projectname_sdk.core.context import IpDataContext


def make_context_util(ctxmap, basectx):
    return IpDataContext(ctxmap, basectx)
