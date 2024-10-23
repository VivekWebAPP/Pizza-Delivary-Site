import webpack from 'webpack';
import path from 'path';

module.exports = function overrides(config, env) {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        assert: require.resolve('assert'),
        buffer: require.resolve('buffer'),
        process: require.resolve('process/browser'),
        zlib: require.resolve('browserify-zlib'),
        util: require.resolve('util'),
        url:require.resolve('url'),
        path: require.resolve("path-browserify")
    };
    config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js", ".jsx"];
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: "process/browser",
        }),
    ];

    return config
}
