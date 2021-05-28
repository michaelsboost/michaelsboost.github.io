// ticker chart
new TradingView.widget({
  "width": "100%",
  "height": window.innerHeight,
  "symbol": "BINANCE:LTCUSDT",
  "interval": "1",
  "timezone": "Etc/UTC",
  "theme": "dark",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "hide_side_toolbar": false,
  "allow_symbol_change": true,
  "hotlist": true,
  "calendar": true,
  "details": true,
  "studies": [
    "BB@tv-basicstudies",
    "Volume@tv-basicstudies",
    "VWAP@tv-basicstudies"
  ],
  "news": [
    "headlines"
  ],
  "container_id": "tradingview_0b60e"
})