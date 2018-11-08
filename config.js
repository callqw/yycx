const IS_DEV = process.env.NODE_ENV === 'development'
exports.API_HOST = IS_DEV ? '127.0.0.1' : '127.0.0.1'
exports.API_PORT = IS_DEV ? '8000' : '3000'

// exports.STATIC_PATH = 'https://static.jkchao.cn'
