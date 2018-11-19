export default async function (ctx, inject) {
  const moduleOptions = {"accessibleIcons":true,"iconProperty":"$icon","icons":{"64":"\u002F_nuxt\u002Ficons\u002Ficon_64.dO3ufQ07QR0.png","120":"\u002F_nuxt\u002Ficons\u002Ficon_120.dO3ufQ07QR0.png","144":"\u002F_nuxt\u002Ficons\u002Ficon_144.dO3ufQ07QR0.png","152":"\u002F_nuxt\u002Ficons\u002Ficon_152.dO3ufQ07QR0.png","192":"\u002F_nuxt\u002Ficons\u002Ficon_192.dO3ufQ07QR0.png","384":"\u002F_nuxt\u002Ficons\u002Ficon_384.dO3ufQ07QR0.png","512":"\u002F_nuxt\u002Ficons\u002Ficon_512.dO3ufQ07QR0.png"}}
  inject(moduleOptions.iconProperty.replace('$', ''), retrieveIcons(moduleOptions.icons))
}

const retrieveIcons = icons => size => icons[size] || ''
