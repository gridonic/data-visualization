const { path } = require('@vuepress/utils')
module.exports = {
    bundler: '@vuepress/bundler-webpack',
    base: '/data-visualization/',
    alias: {
        '@Base': path.resolve(__dirname, './components/base/Base.vue'),
    },
    lang: 'en-US',
    title: 'Data Visualizations',
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
                    Column: path.resolve(__dirname, './components/guide/generators/Column.vue'),
                    Bar: path.resolve(__dirname, './components/guide/generators/Bar.vue'),
                    Donut: path.resolve(__dirname, './components/guide/generators/Donut.vue'),
                    Pie: path.resolve(__dirname, './components/guide/generators/Pie.vue'),

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
            { text: 'Guide', link: '/guide/guide/introduction' },
            { text: 'Base', link: '/base/base' },
        ],
        sidebar: {
            '/guide/': [
                {
                    text: 'Guide',
                    link: '/guide/guide/introduction.md',
                    collapsible: true,
                    children: [
                        { text: 'Introduction', link: '/guide/guide/introduction.md'},
                        { text: 'Getting Started', link: '/guide/guide/getting-started.md'},
                    ]
                },
                {
                    text: 'Basics',
                    link: '/guide/basics/scaling.md',
                    collapsible: true,
                    children: [
                        { text: 'Scaling', link: '/guide/basics/scaling.md'},
                        { text: 'Generators', link: '/guide/basics/generators.md'},
                        { text: 'Basics', link: '/guide/basics/basics.md'},
                        // if you want to have child in subnav:
                        // '/guide/basics/basics.md'
                    ],
                },
                {
                    text: 'Generators',
                    link: '/guide/generators/line.md',
                    collapsible: true,
                    children: [
                        '/guide/generators/line.md',
                        '/guide/generators/area.md',
                        '/guide/generators/stacked-area.md',
                        '/guide/generators/pie.md',
                        '/guide/generators/donut.md',
                        '/guide/generators/bar.md',
                        '/guide/generators/column.md',
                    ],
                },
                {
                    text: 'Customizations',
                    link: '/guide/customizations/datapoints.md',
                    collapsible: true,
                    children: [
                        '/guide/customizations/datapoints.md',
                        '/guide/customizations/curve.md',
                    ],
                },
                {
                    text: 'Interactions',
                    link: '/guide/interactions/grid.md',
                    collapsible: true,
                    children: [
                        '/guide/interactions/grid.md',
                        '/guide/interactions/highlight.md',
                        '/guide/interactions/panning.md',
                        '/guide/interactions/toolbox.md',
                        '/guide/interactions/tooltip.md',
                        '/guide/interactions/zoom.md',
                    ],
                },
                {
                    text: 'Animations',
                    link: '/guide/animations/drawing-effect.md',
                    collapsible: true,
                    children: [
                        '/guide/animations/drawing-effect.md',
                        '/guide/animations/tween-up.md',
                        '/guide/animations/tween-on-change.md',
                    ],
                },
                {
                    text: 'Axes',
                    link: '/guide/axes/default.md',
                    collapsible: true,
                    children: [
                        '/guide/axes/default.md',
                        '/guide/axes/format.md',
                        '/guide/axes/grid.md',
                        '/guide/axes/custom-styles.md',
                        '/guide/axes/ticks.md',
                        '/guide/axes/reactivity.md',
                    ],
                },
            ],
        }
    },
}
