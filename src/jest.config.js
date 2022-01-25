const esModules = ['quasar', 'quasar/lang', 'lodash-es'].join('|');

module.exports = {
    collectCoverageFrom: ['src/**/*.{vue,js,ts}', '!src/*.{js,ts}', '!src/typings/*'],

    moduleFileExtensions: [
        'vue',
        'js',
        'ts',
        'json',
        'jsx',
        'tsx',
    ],

    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.vue$': 'vue-jest',
    },

    transformIgnorePatterns: [`node_modules/(?!(${esModules}))`],

    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
        '^quasar$': 'quasar/dist/quasar.cjs.prod.js',
        'lodash-es': 'lodash',
    },

    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tests/tsconfig.json',
            isolatedModules: true,
        },
    },
};
