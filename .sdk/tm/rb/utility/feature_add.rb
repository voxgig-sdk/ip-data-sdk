# IpData SDK utility: feature_add
module IpDataUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
