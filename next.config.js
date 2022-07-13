const path = require('path');

const nextConfig = {
    reactStrictMode: true,

    async headers() {
        return [
            {
                source: '/',
                headers: [
                    {
                        key: "Cache-Control",
                        value: "s-maxage=1, stale-while-revalidate=59",
                    },
                    {
                        key: "Accept-Encoding",
                        value: "gzip",
                    },
                ],
            },
        ];
    },

    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },

    // Custom Webpack config
    webpack(config) {
        config.module.rules.push(
            // SVGR config
            {
                test: /\.svg$/,
                issuer: {
                    and: [/\.(js|ts)x?$/],
                },
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            svgProps: {
                                className: 'w-auto h-full fill-current',
                            },

                            // SVG Optimisation
                            svgo: false,
                            svgoConfig: {
                                cleanupAttrs: true,
                                inlineStyles: false,
                                plugins: [
                                    {
                                        removeAttrs: { attrs: '(class)' },
                                        removeStyleElement: true,
                                    },
                                ],
                            },
                        },
                    },
                ],
            }
        )

        return config
    },
}

module.exports = nextConfig
