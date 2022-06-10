module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                'infra': './src/infra',
                'core': './src/core',
                'test': './test'
            }
        }]
    ],
    ignore: [
        '**/*.test.ts'
    ]
}