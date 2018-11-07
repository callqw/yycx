const IS_DEV = process.env.NODE_ENV === 'development'
exports.API_HOST = IS_DEV ? 'localhost' : 'localhost'
exports.API_PORT = IS_DEV ? '8000' : '3000'

// exports.STATIC_PATH = 'https://static.jkchao.cn'
