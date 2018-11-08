module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './nuxtServer/index.js'
    return config
  }
}
