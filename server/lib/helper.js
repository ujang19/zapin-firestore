const _0x7b5647 = _0x6e28;
(function (_0x4f7fce, _0x56a9c0) {
  const _0x4a53c6 = _0x6e28,
    _0xc72081 = _0x4f7fce();
  while (!![]) {
    try {
      const _0x27f6f2 =
        (-parseInt(_0x4a53c6(0xaa)) / 0x1) * (parseInt(_0x4a53c6(0xb6)) / 0x2) +
        parseInt(_0x4a53c6(0xa4)) / 0x3 +
        (parseInt(_0x4a53c6(0xcb)) / 0x4) * (parseInt(_0x4a53c6(0xc9)) / 0x5) +
        -parseInt(_0x4a53c6(0xca)) / 0x6 +
        parseInt(_0x4a53c6(0xbe)) / 0x7 +
        parseInt(_0x4a53c6(0x9d)) / 0x8 +
        (parseInt(_0x4a53c6(0x9f)) / 0x9) * (-parseInt(_0x4a53c6(0xc5)) / 0xa);
      if (_0x27f6f2 === _0x56a9c0) break;
      else _0xc72081["push"](_0xc72081["shift"]());
    } catch (_0xa80254) {
      _0xc72081["push"](_0xc72081["shift"]());
    }
  }
})(_0x150c, 0xedeab);
const {
    default: makeWASocket,
    downloadContentFromMessage,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    delay: delayin,
  } = require("@whiskeysockets/baileys"),
  mime = require("mime-types"),
  fs = require("fs"),
  { join } = require(_0x7b5647(0x9c)),
  { default: axios } = require(_0x7b5647(0xb9));
function formatReceipt(_0x5b0295) {
  const _0x534b60 = _0x7b5647;
  try {
    if (_0x5b0295[_0x534b60(0x8f)](_0x534b60(0xd0))) return _0x5b0295;
    let _0x2fca64 = _0x5b0295[_0x534b60(0x98)](/\D/g, "");
    if (_0x2fca64 === "") return _0x2fca64;
    else {
      if (_0x2fca64[_0x534b60(0xcd)](0x0, 0x2) == "08")
        _0x2fca64 = _0x2fca64[_0x534b60(0x98)](/08/, _0x534b60(0xbd));
      else {
        if (_0x2fca64[_0x534b60(0xcd)](0x0, 0x4) == _0x534b60(0xc2))
          _0x2fca64 = _0x2fca64[_0x534b60(0x98)](/6208/, "628");
        else {
          if (
            _0x2fca64[_0x534b60(0xcd)](0x0, 0x1) == "3" &&
            (_0x2fca64[_0x534b60(0xae)] === 0x9 ||
              _0x2fca64[_0x534b60(0xae)] === 0xa)
          )
            _0x2fca64 = "39" + _0x2fca64;
          else {
            if (_0x2fca64["substr"](0x0, 0x4) == "2340")
              _0x2fca64 = _0x2fca64["replace"](/2340/, "234");
            else {
              if (
                _0x2fca64[_0x534b60(0xcd)](0x0, 0x2) == "52" &&
                _0x2fca64[_0x534b60(0xcd)](0x2, 0x1) != "1"
              )
                _0x2fca64 = _0x2fca64[_0x534b60(0x98)](/52/, _0x534b60(0xc3));
              else {
                if (
                  _0x2fca64[_0x534b60(0xcd)](0x0, 0x2) == "54" &&
                  _0x2fca64[_0x534b60(0xcd)](0x2, 0x1) != "9"
                )
                  _0x2fca64 = _0x2fca64[_0x534b60(0x98)](/54/, _0x534b60(0xa6));
                else {
                  if (
                    _0x2fca64[_0x534b60(0xcd)](0x0, 0x2) == "55" &&
                    _0x2fca64[_0x534b60(0xae)] == 0xd
                  ) {
                    let _0x3ed269 = parseInt(_0x2fca64["substr"](0x2, 0x2));
                    _0x3ed269 > 0x1e &&
                      (_0x2fca64 =
                        "55" + _0x3ed269 + _0x2fca64[_0x534b60(0xcd)](-0x8));
                  }
                }
              }
            }
          }
        }
      }
    }
    return (
      !_0x2fca64["endsWith"]("@c.us") && (_0x2fca64 += _0x534b60(0xd3)),
      _0x2fca64
    );
  } catch (_0x4416df) {
    return _0x5b0295;
  }
}
async function asyncForEach(_0x2d6bbe, _0x1cf625) {
  const _0x3797dd = _0x7b5647;
  for (
    let _0x3e9f43 = 0x0;
    _0x3e9f43 < _0x2d6bbe[_0x3797dd(0xae)];
    _0x3e9f43++
  ) {
    await _0x1cf625(_0x2d6bbe[_0x3e9f43], _0x3e9f43, _0x2d6bbe);
  }
}
function _0x150c() {
  const _0x4aa62e = [
    "115CwYaPe",
    "10123110dNgovK",
    "77104SdRmWi",
    "listResponseMessage",
    "substr",
    "image",
    "mimetype",
    "@g.us",
    "toString",
    "Nomor\x20telepon\x20tidak\x20ditemukan.",
    "@c.us",
    "hydratedContentText",
    "message",
    "mediatype",
    "buttonsResponseMessage",
    "exec",
    "endsWith",
    "videoMessage",
    "lookup",
    "keys",
    "includes",
    "error\x20prepare",
    "user",
    "conversation",
    "log",
    "replace",
    "test",
    "@s.whatsapp.net",
    "caption",
    "path",
    "10522776FumMIo",
    "exports",
    "261ZjKaeD",
    "messageContextInfo",
    "waUploadToServer",
    "toLowerCase",
    "video-cover.png",
    "5479551WQrZzP",
    "presenceSubscribe",
    "549",
    "head",
    "gifPlayback",
    "fileName",
    "685LHHYIy",
    "substring",
    "concat",
    "selectedDisplayText",
    "length",
    "application/cdr",
    "Message",
    "hydratedTemplate",
    "jpegThumbnail",
    "extendedTextMessage",
    "key",
    "document",
    "3752WgTExf",
    "from",
    "headers",
    "axios",
    "images",
    "split",
    "media",
    "628",
    "8768361tByPFu",
    "remoteJid",
    "imageMessage",
    ".cdr",
    "6208",
    "521",
    "content-type",
    "307270spoEbG",
    "title",
    "parseInt",
    "text",
  ];
  _0x150c = function () {
    return _0x4aa62e;
  };
  return _0x150c();
}
async function removeForbiddenCharacters(_0x24fb06) {
  const _0x2707f3 = _0x7b5647;
  return _0x24fb06[_0x2707f3(0x98)](/[\x00-\x1F\x7F-\x9F'\\"]/g, "");
}
async function parseIncomingMessage(_0x2ee679) {
  const _0x373226 = _0x7b5647,
    _0x4e75fc = Object[_0x373226(0x92)](_0x2ee679[_0x373226(0xd5)] || {})[0x0],
    _0x384b7c =
      _0x4e75fc === _0x373226(0x96) &&
      _0x2ee679[_0x373226(0xd5)][_0x373226(0x96)]
        ? _0x2ee679[_0x373226(0xd5)][_0x373226(0x96)]
        : _0x4e75fc == _0x373226(0xc0) &&
          _0x2ee679[_0x373226(0xd5)][_0x373226(0xc0)]["caption"]
        ? _0x2ee679[_0x373226(0xd5)][_0x373226(0xc0)][_0x373226(0x9b)]
        : _0x4e75fc == _0x373226(0x90) &&
          _0x2ee679[_0x373226(0xd5)][_0x373226(0x90)][_0x373226(0x9b)]
        ? _0x2ee679["message"][_0x373226(0x90)][_0x373226(0x9b)]
        : _0x4e75fc == _0x373226(0xb3) &&
          _0x2ee679[_0x373226(0xd5)][_0x373226(0xb3)][_0x373226(0xc8)]
        ? _0x2ee679[_0x373226(0xd5)][_0x373226(0xb3)][_0x373226(0xc8)]
        : _0x4e75fc == "messageContextInfo" &&
          _0x2ee679[_0x373226(0xd5)][_0x373226(0xcc)]?.[_0x373226(0xc6)]
        ? _0x2ee679["message"][_0x373226(0xcc)][_0x373226(0xc6)]
        : _0x4e75fc == _0x373226(0xa0)
        ? _0x2ee679[_0x373226(0xd5)][_0x373226(0xd7)][_0x373226(0xad)]
        : _0x4e75fc == "templateMessage" &&
          _0x2ee679[_0x373226(0xd5)]["templateMessage"][_0x373226(0xb1)][
            _0x373226(0xd4)
          ]
        ? _0x2ee679[_0x373226(0xd5)]["templateMessage"][_0x373226(0xb1)][
            "hydratedContentText"
          ]
        : "",
    _0xfaf91c = _0x384b7c[_0x373226(0xa2)](),
    _0xae3ab7 = await removeForbiddenCharacters(_0xfaf91c),
    _0x4eb43a = _0x2ee679?.["pushName"] || "",
    _0x4944bd =
      _0x2ee679[_0x373226(0xb4)][_0x373226(0xbf)][_0x373226(0xbb)]("@")[0x0];
  let _0xdf02b7;
  if (_0x4e75fc === "imageMessage") {
    const _0x4895cd = await downloadContentFromMessage(
      _0x2ee679["message"][_0x373226(0xc0)],
      _0x373226(0xce)
    );
    let _0x1fb642 = Buffer[_0x373226(0xb7)]([]);
    for await (const _0x48a485 of _0x4895cd) {
      _0x1fb642 = Buffer[_0x373226(0xac)]([_0x1fb642, _0x48a485]);
    }
    _0xdf02b7 = _0x1fb642[_0x373226(0xd1)]("base64");
  } else urlImage = null;
  return { command: _0xae3ab7, bufferImage: _0xdf02b7, from: _0x4944bd };
}
function getSavedPhoneNumber(_0x4cf11c) {
  return new Promise((_0x57f949, _0x5caf96) => {
    const _0x3d15bb = _0x6e28,
      _0x35efd1 = _0x4cf11c;
    _0x35efd1
      ? setTimeout(() => {
          _0x57f949(_0x35efd1);
        }, 0x7d0)
      : _0x5caf96(new Error(_0x3d15bb(0xd2)));
  });
}
const prepareMediaMessage = async (_0x22a3c5, _0x473427) => {
    const _0xb9ba99 = _0x7b5647;
    try {
      const _0x35b740 = await prepareWAMessageMedia(
          { [_0x473427[_0xb9ba99(0xd6)]]: { url: _0x473427[_0xb9ba99(0xbc)] } },
          { upload: _0x22a3c5[_0xb9ba99(0xa1)] }
        ),
        _0x2bd4d6 = _0x473427[_0xb9ba99(0xd6)] + _0xb9ba99(0xb0);
      if (
        _0x473427[_0xb9ba99(0xd6)] === _0xb9ba99(0xb5) &&
        !_0x473427[_0xb9ba99(0xa9)]
      ) {
        const _0x494517 = new RegExp(/.*\/(.+?)\./),
          _0x53aa8d = _0x494517[_0xb9ba99(0x8e)](_0x473427[_0xb9ba99(0xbc)]);
        _0x473427[_0xb9ba99(0xa9)] = _0x53aa8d[0x1];
      }
      mimetype = mime[_0xb9ba99(0x91)](_0x473427[_0xb9ba99(0xbc)]);
      if (!mimetype) {
        const _0x308527 = await axios[_0xb9ba99(0xa7)](
          _0x473427[_0xb9ba99(0xbc)]
        );
        mimetype = _0x308527[_0xb9ba99(0xb8)][_0xb9ba99(0xc4)];
      }
      _0x473427[_0xb9ba99(0xbc)]["includes"](_0xb9ba99(0xc1)) &&
        (mimetype = _0xb9ba99(0xaf));
      (_0x35b740[_0x2bd4d6]["caption"] = _0x473427?.[_0xb9ba99(0x9b)]),
        (_0x35b740[_0x2bd4d6][_0xb9ba99(0xcf)] = mimetype),
        (_0x35b740[_0x2bd4d6][_0xb9ba99(0xa9)] = _0x473427["fileName"]);
      _0x473427[_0xb9ba99(0xd6)] === "video" &&
        ((_0x35b740[_0x2bd4d6][_0xb9ba99(0xb2)] = Uint8Array[_0xb9ba99(0xb7)](
          fs["readFileSync"](
            join(process["cwd"](), "public", _0xb9ba99(0xba), _0xb9ba99(0xa3))
          )
        )),
        (_0x35b740[_0x2bd4d6][_0xb9ba99(0xa8)] = ![]));
      let _0x1c81d7 = _0x22a3c5[_0xb9ba99(0x95)]["id"][_0xb9ba99(0x98)](
        /:\d+/,
        ""
      );
      return await generateWAMessageFromContent(
        "",
        { [_0x2bd4d6]: { ..._0x35b740[_0x2bd4d6] } },
        { userJid: _0x1c81d7 }
      );
    } catch (_0xc588b8) {
      return console[_0xb9ba99(0x97)](_0xb9ba99(0x94), _0xc588b8), ![];
    }
  },
  formatMXOrARNumber = (_0x20b6f8) => {
    const _0x321623 = _0x7b5647,
      _0x3c8911 = new RegExp(/^(\d{2})(\d{2})\d{1}(\d{8})$/);
    if (_0x3c8911[_0x321623(0x99)](_0x20b6f8)) {
      const _0x6e5ece = _0x3c8911["exec"](_0x20b6f8);
      if (_0x6e5ece && (_0x6e5ece[0x1] === "52" || _0x6e5ece[0x1] === "54")) {
        const _0x1b240e = Number[_0x321623(0xc7)](_0x6e5ece[0x3][0x0]),
          _0x18e307 = Number[_0x321623(0xc7)](_0x6e5ece[0x2]);
        if (_0x1b240e < 0x7 || _0x18e307 < 0xb) return _0x6e5ece[0x0];
        return _0x6e5ece[0x1] === "52"
          ? "52" + _0x6e5ece[0x3]
          : "54" + _0x6e5ece[0x3];
      }
    }
    return _0x20b6f8;
  },
  formatIDNumber = (_0x12d847) => {
    const _0x14b6a3 = _0x7b5647;
    return _0x12d847["startsWith"]("0")
      ? "62" + _0x12d847[_0x14b6a3(0xab)](0x1)
      : _0x12d847;
  },
  createJid = (_0x420fae) => {
    const _0x293b34 = _0x7b5647;
    if (
      _0x420fae["includes"](_0x293b34(0xd0)) ||
      _0x420fae[_0x293b34(0x93)](_0x293b34(0x9a))
    )
      return _0x420fae;
    const _0x183bf5 = formatIDNumber(_0x420fae);
    if (_0x183bf5 !== _0x420fae) return _0x183bf5 + _0x293b34(0x9a);
    const _0x5933dd = formatMXOrARNumber(_0x420fae);
    if (_0x5933dd !== _0x420fae) return _0x5933dd + "@s.whatsapp.net";
    if (_0x420fae["includes"]("-")) return _0x420fae + "@g.us";
    return _0x420fae + _0x293b34(0x9a);
  };
function _0x6e28(_0xfaf7bf, _0x1a5fec) {
  const _0x150c7d = _0x150c();
  return (
    (_0x6e28 = function (_0x6e2897, _0x5171aa) {
      _0x6e2897 = _0x6e2897 - 0x8e;
      let _0x5bc720 = _0x150c7d[_0x6e2897];
      return _0x5bc720;
    }),
    _0x6e28(_0xfaf7bf, _0x1a5fec)
  );
}
async function delayMsg(_0x37f06d, _0x51d902, _0x15f429) {
  const _0x357242 = _0x7b5647,
    _0x28e5c4 = createJid(_0x15f429);
  await _0x51d902[_0x357242(0xa5)](_0x15f429), await delayin(_0x37f06d);
}
module[_0x7b5647(0x9e)] = {
  formatReceipt: formatReceipt,
  asyncForEach: asyncForEach,
  removeForbiddenCharacters: removeForbiddenCharacters,
  parseIncomingMessage: parseIncomingMessage,
  getSavedPhoneNumber: getSavedPhoneNumber,
  prepareMediaMessage: prepareMediaMessage,
  createJid: createJid,
  delayMsg: delayMsg,
};
