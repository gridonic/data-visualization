const { path } = require('@vuepress/utils')

module.exports = {
    bundler: '@vuepress/bundler-webpack',
    alias: {
        '@Base': path.resolve(__dirname, './components/base/Base.vue'),
    },
    lang: 'en-US',
    title: 'd3vue-cookbook',
    description: 'This is my first VuePress site',
    plugins: [
        [
            '@vuepress/register-components',
            {
                components: {
                    // Base
                    Base: path.resolve(__dirname, './components/base/Base.vue'),
                    BaseExample: path.resolve(__dirname, './components/base/BaseExample.vue'),

                    // generators
                    Line: path.resolve(__dirname, './components/guide/generators/Line.vue'),
                    Area: path.resolve(__dirname, './components/guide/generators/Area.vue'),
                    Bar: path.resolve(__dirname, './components/guide/generators/Bar.vue'),

                    // scaling
                    Linear: path.resolve(__dirname, './components/guide/scaling/Linear.vue'),

                    // customize
                    Type: path.resolve(__dirname, './components/guide/curve/Type.vue'),
                    Datapoints: path.resolve(__dirname, './components/guide/datapoints/Datapoints.vue'),

                    // axis
                    AxisDefault: path.resolve(__dirname, './components/guide/axes/AxisDefault.vue'),
                    AxisCustomStyles: path.resolve(__dirname, './components/guide/axes/AxisCustomStyles.vue'),
                    AxisTicks: path.resolve(__dirname, './components/guide/axes/AxisTicks.vue'),
                    AxisFormat: path.resolve(__dirname, './components/guide/axes/AxisFormat.vue'),
                    AxisGrid: path.resolve(__dirname, './components/guide/axes/AxisGrid.vue'),
                    AxisReactivity: path.resolve(__dirname, './components/guide/axes/AxisReactivity.vue'),

                    // interactions
                    ToolTips: path.resolve(__dirname, './components/guide/interactions/ToolTips.vue'),
                    ToolBox: path.resolve(__dirname, './components/guide/interactions/ToolBox.vue'),

                    // animations
                    DrawingEffect: path.resolve(__dirname, './components/guide/animations/DrawingEffect.vue'),
                    TweenUp: path.resolve(__dirname, './components/guide/animations/TweenUp.vue'),
                    TweenOnChange: path.resolve(__dirname, './components/guide/animations/TweenOnChange.vue'),
                },
            },
        ],
    ],
    themeConfig: {
        componentsRepoPath: 'https://github.com/gridonic/boilerplate-offering/docs/components',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        navbar: [
            { text: 'Guide', link: '/guide/generators' },
            { text: 'Base', link: '/base/base' },
            // { text: 'Examples', link: '/examples/line' }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: 'Guide',
                    children: [
                        { text: 'D3 + Vue', link: '/guide/d3+vue' },
                        { text: 'Getting Started', link: '/guide/getting-started' },
                        { text: 'Scaling', link: '/guide/scaling' },
                        { text: 'Generators', link: '/guide/generators' },
                        { text: 'Curve', link: '/guide/curve' },
                        { text: 'Datapoints', link: '/guide/datapoints' },
                        { text: 'Axes', link: '/guide/axes' },
                        { text: 'Interactions', link: '/guide/interactions' },
                        { text: 'Animations', link: '/guide/animations' },
                        { text: 'Basics', link: '/guide/basics' },
                    ],
                },
            ],
            '/base/': [{
                text: 'Base',
                children: [
                    { text: 'Idea', link: '/base/idea' },
                ],
            }],
            // '/examples/': [
            //     {
            //         text: 'Examples',
            //         collapsable: false,
            //         children: [
            //             { text: 'Line', link: '/examples/line' },
            //             { text: 'Bar', link: '/examples/bar' },
            //             { text: 'Doughnut', link: '/examples/doughnut' },
            //             { text: 'Area', link: '/examples/area' },
            //         ],
            //     },
            // ]
        },
    },
}
