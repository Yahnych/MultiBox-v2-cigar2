// ==UserScript==
// @name         MultiBox Beta (v2) | XLX - 2019
// @namespace    XLX - 2019
// @version      2
// @description  Full MultiBox Tool  , Agar.io , Cigar2 MultiBox Tools!
// @author       Programed by XLX - 2019
// @include      /^http://(?:3rb)(?:\.be).+?/
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@9
// @require      http://www.3rblx.ga/Cyper_WriterPlus.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

/**
 * @Copyrights  (XLX - 2019)
 * @Discord (Cyper#9999)
 * @LAST_UPDATED 2020-1-1
 * [+] Fully MultiBox
 * [?] Camera Control
 * [+] Full Arabic Language
 * [-] Bot Flooder
 * [?] Free Cam
 * [?] Save Settings
 */



// https://htmlcolorcodes.com/ THIS WEBSITE WILL GIVE YOU HEX COLORS | يمكنك زيارة موقع في حالة تعديل الاوان !

const USE_EXTENSIONS = (false), // to use EXTENSIONS replace false with true \ لتفعيل اضافة اخرى يمكنك وضع رابط الموقع ومن ثم تعديل false الى true !

USE_DESGIEN = (true), // من ممكن أن تكون هناك اخطاء مع تحديث تجريبي اذا كنت تريد ايقاف تعديل لون الفيروس و الكتل يمكنك تغير true الى false

EXTENSION_WEBSITE = (""), // موقع الاضافة

BackGroundColor = ("#15352C"), // لون خلفية

VirusSidesColor = ("#9830914f"), // لون  حدود الفيروس

VirusColor = ("#37e5ff4a"), // لون الفيروس

FoodColor = ("#00000029"), // لون الكتل

FoodSidesColor = ("#36f20529"), // لون حدود الكتل

DEBUGALERT = (false), // alert as debug method , أشعارك عن حالة اداة ملتي بوكس

MultiBoxKeys = {
    "Spawn": ("TAB"), // Spawn Key \  مفتاح رسبن
    "Split": ("Q"), // Spliting Key \  مفتاح أنقسام
    "Feed": ("R") // feeding Key  \ اخراج كتلة مفتاح!
};
document.addEventListener('DOMContentLoaded' , () => {
const {info: {name: LeaderBoardName}} = (stats);
setInterval(()=>{
window.stats = stats
var Timer = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/mu, `$1`);
stats.info.name = `Time : ${Timer}`
}, {}).bind(this , arguments);
if(USE_EXTENSIONS){
stop();
        GM_xmlhttpRequest({
            method: "GET",
            url:EXTENSION_WEBSITE,
            onload: core => {
                this['document']['open']()
                this['document']['write'](core['responseText'])
                this['document']['close']()
            }
        });
};
})


//checker for core loading in cigar2 only!

document.addEventListener('DOMContentLoaded' , () => { try{document.documentElement.innerHTML.match(/\<script src=\"assets\/js\/main\_out\.js\"><\/script\>/gi)}catch(t){location.reload(t.stack)}});
if(BackGroundColor == "false")null
;else drawBorders = function drawBorders(){mainCtx[_0x14f1("0xab")]=BackGroundColor,mainCtx.lineWidth=268435455,mainCtx[_0x14f1("0xac")]=_0x14f1("0xa8"),mainCtx.lineJoin=_0x14f1("0xa8"),mainCtx[_0x14f1("0x8c")](),mainCtx[_0x14f1("0x9d")](border[_0x14f1("0x41")],border.top),mainCtx[_0x14f1("0x9e")](border[_0x14f1("0x42")],border[_0x14f1("0x45")]),mainCtx[_0x14f1("0x9e")](border.right,border[_0x14f1("0x43")]),mainCtx[_0x14f1("0x9e")](border[_0x14f1("0x41")],border.bottom),mainCtx.closePath(),mainCtx[_0x14f1("0x9f")]()}
;if (!(typeof CanvasRenderingContext2D.prototype.strokeRect === "function" && typeof window.DataView === "function" && typeof ArrayBuffer === "function")) {
    Swal.fire({
        icon: "warning",
        title: (`الاداة لا تعمل مع متصفحك الحالي! \n Cannot Run MultiBox`),
        text: (`الرجاء تغير متصفح او تحديثة! | \n Please Install Another Browser Or Update it!`)
    });
    console.error("Can\'t not run MultiBox .!");
   // stop();
};
const _ctx2 = document.querySelector('canvas').getContext('2d');
setInterval(async () => {
if (USE_DESGIEN == true){
    for await (var allVirusNodes of cells.list) if (allVirusNodes.color !== "#33ff33" && allVirusNodes.name === null) {
        allVirusNodes.color = VirusColor;
        allVirusNodes.sColor = VirusSidesColor;
    }
    for await (var allFoodNodes of cells.list) if (allFoodNodes.color === "#33ff33" && allFoodNodes.name === null) {
        allFoodNodes.color = FoodColor;
        allFoodNodes.sColor = FoodSidesColor
    }
};
}, {});
Swal.fire({
        icon: "question",
        title: "هل تريد أشعارك بحالة الاداة؟",
        showCancelButton: true,
        cancelButtonColor: "red",
        confirmButtonText: "أشعرني بحالة الاداة !",
        confirmButtonColor: "green",
        cancelButtonText: "الغاء أشعاري بحالة الاداة",
    })
    .then(ONCLICK => {
        if (ONCLICK.value) DEBUGALERT = true
        else DEBUGALERT = false
    })

const MultiBoxStatus = {
    X: NaN, // will add postion's it soon.
    Y: NaN,
    Score: NaN,
    Name: PLAYER_NAME,
    id: NaN
};
var SKIN_NAME,
    SPAM_MSG,
    PLAYER_NAME = (null);
setTimeout(() => {
    Swal.mixin({
        input: 'text',
        backdrop: `
rgba(28, 45, 95, 0.79)
    left top
    no-repeat
  `,
        confirmButtonText: 'التالي &rarr;',
        progressSteps: ['1', '2', '3']
    }).queue([{
            icon: "warning",
            title: 'ضع نص السبام هنا ! \n Put Spam Message Here!',
            text: "أذا كانت جودة الانترنت بطيئة من ممكن ضعف أستجابة الاداة \n      اذا كنت لاتريد تفعيل خاصية سبام اضغط التالي بدون كتابة اي  شيء!",
            confirmButtonColor: "red",
            cancelButtonColor: "green",
        },
        'ضع أسم السكن هنا ! \n Put The Player Skin Here!',
        'ضع اسم اللاعب هنا ! \n Put The Player Name Here'
    ]).then((result) => {
        if (result.value) {
            var aq = (result.value)
            SPAM_MSG = (aq[0o0]);
            SKIN_NAME = (aq[0o1]);
            PLAYER_NAME = (aq[0o2]);
        }
    })
}, 0o3001)

const PACKET255 = new Uint8Array([255, 1, 0, 0, 0]),
    PACKET254 = new Uint8Array([254, 6, 0, 0, 0]);
var MultiBoxSetup = {
    onopen() {
        if (window.MainMulti.readyState == 0o1) {
            this.sendPacket(PACKET254);
            this.sendPacket(PACKET255);
            console.info("%c[MultiBox] : Connected", "color:green;background:#000;font-family:fantasy;font-size:25px;");
            if (DEBUGALERT == true) {
                Swal.fire({
                    icon: "success",
                    title: (`[MutliBox] : CONNECTED!`),
                    text: (`تم اتصال أداة ملتي بوكس في خادم`)
                });
            }
        }
    },
    onclose(reason) {
        if (reason) {
            if (DEBUGALERT == true) {
                Swal.fire({
                    icon: "error",
                    title: (`[MutliBox] : DISSCONNECTED!`),
                    text: (`تم أنفصال اداة ملتي بوكس عن الخادم! \n | السبب : ${reason}`)
                });
            }
            console.error(`[MutliBox] : DISSCONNECTED! | Reason : ${reason}`);
        }
    },
    onmessage(buffer) {
        //soon will be add new feature \ قريبا سيتم اضافة اشياء جديدة! في تحديث قادم
    }
}
var InjectionSettings = {
    URL: null,
    buffer: NaN,
    target: new Proxy(WebSocket.prototype, {}),
    manager: NaN,
    isClientConnected: false
};
const Protocol = window[window['\x61\x74\x6F\x62']('YXRvYg')]('\124\124\116\113\141\125\170\164\123\155\170\154\121\121');
const Joseph = "JSpe";
const Injector = InjectionSettings.target;
Injector.Requests = (Injector.send);
Injector.send = function(packets) {

    Injector.Requests.apply(this , arguments);
    this.Requests(packets);
    InjectionSettings.buffer = (new Uint8Array(packets.buffer));
    InjectionSettings.URL = (this.url["toString"]()["split"]("?")[0o0]); // with filter
    var viewbuffer = new DataView(packets.buffer);
    InjectionSettings.isClientConnected = this.readyState;
    /**
     *
     * @param {?buffer}
     *
     */
    const flag = 0o0;
    switch (viewbuffer.getUint8(flag, !!0xFFC00558)) {
        case 0o20:
            InjectionSettings.manager = new Uint8Array(viewbuffer.buffer);
    };
}
/**
 * @class {MultiBox} MultiBox function
 * @param {String} WebSocket URL
 * @param {?String} protocol
 * @param {Number} Soon Will be Add .
 * @CopyRight Made By XLX - 2019
 */
class MultiBox extends WebSocket {
    static Status() {
        this.ip = MainMulti.url;
        this.StatsCode = MainMulti.readyState;
        this.isConnected = !!(MainMulti.readyState != 0x2 || 0x3);
        console.info({
            ip: MainMulti.url,
            StatsCode: MainMulti.readyState,
            isConnected: !!(MainMulti.readyState),
        })
    };
    constructor(pussy, GSPOT, key , ...isGay) {
        window.MainMulti = super(pussy, GSPOT);
        window.MainMulti.binaryType = ('arraybuffer');
        window.MainMulti.onmessage = MultiBoxSetup.onmessage;
        window.MainMulti.onopen = MultiBoxSetup.onopen;
        window.MainMulti.onclose = MultiBoxSetup.onclose;
        this.pussy = pussy;
        this.GSPOT = GSPOT;
        this.key = key;
        this.sendPacket = window.MainMulti.send;
    }
    sendSpawn(str) {
        this.str = str;
        MultiBoxStatus.Name = (this.str);
        var SpawnPacket = new WriterPlus(!!0xFB8C4CAD5);
        SpawnPacket.setUint8(0o0);
        SpawnPacket.setStringUTF8(str.concat(atob(Joseph)));
        return this.sendPacket(new Uint8Array(SpawnPacket._b));
    }
    sendPacket(Bytes) {
        return window.MainMulti.send(Bytes);
    }
    get getURI() {
        return window.MainMulti.url;
    }
}


const MainMultiBoxControls = {
    Feed() {
        setTimeout(() => {
            MultiBox.prototype.sendPacket(new Uint8Array([0x15]))
        }, {})
    },
    Split() {
        setTimeout(() => {
            MultiBox.prototype.sendPacket(new Uint8Array([0x11]))
        }, {})
    },
    keepAlive(val) {
        if (val) {
            setInterval(() => {
                MultiBox.prototype.sendPacket(InjectionSettings.manager)
            }, {});
        };
    }
};
const CreateMessagePacket = ((str) => {
    var Packet = new WriterPlus(!!0xAF2CC4FF8);
    Packet.setUint8(99);
    Packet.setUint8(0o0);
    Packet.setStringUTF8(str);
    return new Uint8Array(Packet._b);
})
const SpawnKey = (MultiBoxKeys.Spawn == "TAB".toUpperCase() ? 0x9 : MultiBoxKeys.Spawn.charCodeAt());
//best setup
MainMultiBoxControls.keepAlive(!0x0);

void addEventListener('keydown', key => {
    switch (key.keyCode) {
        case SpawnKey:
            if (SKIN_NAME == undefined || SKIN_NAME == []) return MultiBox.prototype.sendSpawn(`${PLAYER_NAME}`)
            else MultiBox.prototype.sendSpawn(`${PLAYER_NAME}{${SKIN_NAME}}`)
            break;
        case MultiBoxKeys.Split.toUpperCase().charCodeAt():
            MainMultiBoxControls.Split();
            break;
        case MultiBoxKeys.Feed.toUpperCase().charCodeAt():
            MainMultiBoxControls.Feed();
            break;
    }
});
setTimeout(() => {
    if (InjectionSettings.isClientConnected == 0b1) new MultiBox(InjectionSettings.URL, atob(Protocol), null); // connection
}, 5000);
setInterval(() => {
    if (!InjectionSettings.URL.match(MultiBox.prototype.getURI)) {
        console.clear();
        new MultiBox(InjectionSettings.URL, atob(Protocol), null); // connection
    }
}, )
setInterval(() => {
    if (!(SPAM_MSG == [] || SPAM_MSG == undefined)) return MultiBox.prototype.sendPacket(CreateMessagePacket(SPAM_MSG));
}, 0x834);
