# nodeProject

> file and code to initialize a new project

## npm i 
> npm i express, dotenv, sequelize, pg, node, cors, bunyan, joi, jsonwebtoken, sanitizer, xss, uuid

## npm i -D
> npm i -D jest, supertest
## sqitch

> sqitch init mistyclic --engine=pg --top-dir=./migrations

> sqitch target add target__name db:pg://user:password@server:ports/database_name

> sqitch add createdb -n "create database"

## eslint
npm i -g eslint
eslint --init

````
module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',          
        'quotes': [2, 'single', { 'avoidEscape': true }],
        'indent' : ['warn', 4],
        'semi' :['warn','always'],    
        'no-var': 'error',
        'camelcase' :'off',
        'no-trailing-spaces': ['off', { 'skipBlankLines': true , 'ignoreComments': false}],
        'space-before-function-paren': ['error', 'never'],
        'space-before-blocks': ['off', 'always'],
        'spaced-comment' :'off',
        'keyword-spacing':[2, {'overrides': {
            'if': {'after': false},
            'for': {'after': false},
            'while': {'after': false}
        }}],
        'padded-blocks': ['error', 'never'],
        'no-unused-vars':'off',
        'arrow-spacing':'off',
        'object-curly-spacing':'off',
        'eol-last':['off', 'always'],
        'one-var':'off',
        'comma-dangle':'off',
        'no-useless-catch' : 'Off'
    }
};

````
