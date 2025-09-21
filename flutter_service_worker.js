'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "6cf862b17b5691aa590c59a025874b1d",
"version.json": "7a0379ad665aea3e80412e73cb1044c5",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"index.html": "b8a46bf197d253a29ddc21a19641745e",
"/": "b8a46bf197d253a29ddc21a19641745e",
"resize.js": "a3426701154cfe1465d99be29301ac91",
"icons/Icon-192.png": "88144573daa993b24baa7d0e75fdefd8",
"icons/Icon-maskable-512.png": "7a923cf8ed11b6f289b25d2367fb7920",
"icons/Icon-512.png": "7a923cf8ed11b6f289b25d2367fb7920",
"icons/Icon-maskable-192.png": "88144573daa993b24baa7d0e75fdefd8",
"favicon.png": "505341657a50a742aa044828b6ff2c0d",
"main.dart.js": "e12ddfe3eb656e8e447a13f0baa0ffbf",
"assets/AssetManifest.bin.json": "a9204c2871a709b4156d4cabc147bc54",
"assets/AssetManifest.bin": "0a74fd915c59afaf2f13cf06eeeff203",
"assets/NOTICES": "d3a7a387ada674f18bafff3382809e75",
"assets/FontManifest.json": "d9f5ed664070fa04520446be0b982f99",
"assets/packages/judolib/assets/flags-ioc/BAN.png": "670b502c019fcb54b9ec0c1cd3ad4d3a",
"assets/packages/judolib/assets/flags-ioc/CHN.png": "4e272b4cf298ccd70ed4b031b4560e98",
"assets/packages/judolib/assets/flags-ioc/SOM.png": "f65e9ae4d1aa4cbc2e0a9156a47e2530",
"assets/packages/judolib/assets/flags-ioc/ALG.png": "4a2dccfee87a4da04b6e928e2bac719d",
"assets/packages/judolib/assets/flags-ioc/POL.png": "ea7249bef8962b3de04c4674fd7954f2",
"assets/packages/judolib/assets/flags-ioc/ESP.png": "5e740d8836117ab2fce6a58c50cc4d28",
"assets/packages/judolib/assets/flags-ioc/PRK.png": "e9d673f97e197d9c42fd0403bec4aed8",
"assets/packages/judolib/assets/flags-ioc/ECU.png": "f69046eca24fe0bd41c581464b85898d",
"assets/packages/judolib/assets/flags-ioc/COL.png": "bccd85ed59629d2e61c386389095ce8c",
"assets/packages/judolib/assets/flags-ioc/INA.png": "505e532dd64c72b29fa48195414442c5",
"assets/packages/judolib/assets/flags-ioc/USA.png": "6ad18dbae71d3b7649ddfa9f27a28283",
"assets/packages/judolib/assets/flags-ioc/MEX.png": "4d5e74dcf17f1e06cd1ce69286feec98",
"assets/packages/judolib/assets/flags-ioc/CAN.png": "b1d5f9c7b4178054191d5c4ce8630e00",
"assets/packages/judolib/assets/flags-ioc/UZB.png": "7d116a9edae011931f56bc713e727c77",
"assets/packages/judolib/assets/flags-ioc/TUN.png": "820b78ce790861c9f1dd817fdb2235c1",
"assets/packages/judolib/assets/flags-ioc/NIG.png": "f47e0e2a3cdb5db03dceee116ca9c3a6",
"assets/packages/judolib/assets/flags-ioc/MLI.png": "29664b034905b3659aeecedfbd5c1e96",
"assets/packages/judolib/assets/flags-ioc/AHO.png": "d1f67b87930afc8b911176f7b72705d5",
"assets/packages/judolib/assets/flags-ioc/URU.png": "5843614d014ef9a4d3cdf5c77b72ece6",
"assets/packages/judolib/assets/flags-ioc/TUR.png": "de20bc702edcd6383d23d7451a8e3c6d",
"assets/packages/judolib/assets/flags-ioc/BLR.png": "bf0118d2585f6336c855a01171e1ebe2",
"assets/packages/judolib/assets/flags-ioc/BAR.png": "b84a6722c391c05ffa5152f10b348950",
"assets/packages/judolib/assets/flags-ioc/CIV.png": "057940737b49609a1bf210b878d0f857",
"assets/packages/judolib/assets/flags-ioc/BRA.png": "96462178178ede1e9cc35debd11e2c9e",
"assets/packages/judolib/assets/flags-ioc/MAC.png": "7b09ff7ff593054670f259dadeb9c49e",
"assets/packages/judolib/assets/flags-ioc/SIN.png": "f02215702e74a439b6e6955078a6e0dd",
"assets/packages/judolib/assets/flags-ioc/KAZ.png": "5fc16e95249b3569b15141d254748779",
"assets/packages/judolib/assets/flags-ioc/BEL.png": "4cee9f9c192e2bd8f719f13b0bf84aa3",
"assets/packages/judolib/assets/flags-ioc/ITA.png": "a8748d92458732d41c4df7c590afccab",
"assets/packages/judolib/assets/flags-ioc/RUS.png": "a90a141b60d0008619c79799c60be98d",
"assets/packages/judolib/assets/flags-ioc/ISL.png": "73534c765721af9039d473cabf2e29b9",
"assets/packages/judolib/assets/flags-ioc/ROM.png": "028293c418a23226fca23520d8429103",
"assets/packages/judolib/assets/flags-ioc/AUT.png": "21e2e4c8fcfd810a30698f37095c6f3a",
"assets/packages/judolib/assets/flags-ioc/CYP.png": "a7d39a083e9b473e02ba9bb7e9568503",
"assets/packages/judolib/assets/flags-ioc/AZE.png": "59c71b3abe1e0bd56ab4b3c20e349964",
"assets/packages/judolib/assets/flags-ioc/TJK.png": "69774d987c2726ca814c32a8eca4bd29",
"assets/packages/judolib/assets/flags-ioc/GEO.png": "7e62afef89c485120b637395c4cf2573",
"assets/packages/judolib/assets/flags-ioc/HKG.png": "67b221278d731228a63f4083c24840d6",
"assets/packages/judolib/assets/flags-ioc/COD.png": "2463b0ef0b7dfc7a14a5459234e8d7e3",
"assets/packages/judolib/assets/flags-ioc/SLO.png": "655f1e1af75634fcd30f5977cc1e0ca4",
"assets/packages/judolib/assets/flags-ioc/NCA.png": "cd415f37f4110937f0669b118f408769",
"assets/packages/judolib/assets/flags-ioc/DOM.png": "c2d5f191a8a8db9383a00262724c1aeb",
"assets/packages/judolib/assets/flags-ioc/EGY.png": "f31b72a64aecb0c870a4954dda9bf9a7",
"assets/packages/judolib/assets/flags-ioc/MGL.png": "21188d0c367752472fda959cfd0ed588",
"assets/packages/judolib/assets/flags-ioc/BRN.png": "3baa337e5bcc27a73ee67dead5cb757c",
"assets/packages/judolib/assets/flags-ioc/SUI.png": "bdc6896a269db8f210135bf49ec8d79a",
"assets/packages/judolib/assets/flags-ioc/EST.png": "c05312933bc6a2dd27ab68b85e0d2b65",
"assets/packages/judolib/assets/flags-ioc/BOT.png": "63d6e8933007af08c18c24f4d0eeb699",
"assets/packages/judolib/assets/flags-ioc/GUA.png": "1618d022aa4fd23bb89cc3d830d3505d",
"assets/packages/judolib/assets/flags-ioc/MLT.png": "0401a4e7cf3cedc39cda8fefc2e53b60",
"assets/packages/judolib/assets/flags-ioc/AFG.png": "6b4a1c8062263e356b220484e15e3f88",
"assets/packages/judolib/assets/flags-ioc/NGR.png": "30ba1c0d9254b628433126ca9a735b9b",
"assets/packages/judolib/assets/flags-ioc/QUE.png": "48b6b9dba2175f8e999674e209acf335",
"assets/packages/judolib/assets/flags-ioc/TKM.png": "e6c3e3c289ca54741505649b8fbd565a",
"assets/packages/judolib/assets/flags-ioc/NED.png": "b0d003abf7b077608ebda4abdc76b105",
"assets/packages/judolib/assets/flags-ioc/CAM.png": "4a43ec8a2300ead09af57c9d7bcd4438",
"assets/packages/judolib/assets/flags-ioc/MAR.png": "e09e44e8396532dadeda662e390b8c02",
"assets/packages/judolib/assets/flags-ioc/IRL.png": "ba31e76822a97562e5c7456d3e68da75",
"assets/packages/judolib/assets/flags-ioc/MON.png": "a45b1accbd1730469c3c0abdcbc49dad",
"assets/packages/judolib/assets/flags-ioc/KOR.png": "032c541f0382eefc6c9ec3a14a357358",
"assets/packages/judolib/assets/flags-ioc/GBR.png": "6695a24851166911d4dc5d935a479300",
"assets/packages/judolib/assets/flags-ioc/CRC.png": "3c78d41b51c66d6b0a105e28bc9014f4",
"assets/packages/judolib/assets/flags-ioc/JOR.png": "a7e718943c73fa245137ee7a1572bd54",
"assets/packages/judolib/assets/flags-ioc/CZE.png": "d2676bbc067da4c17d15daf3bb70e62f",
"assets/packages/judolib/assets/flags-ioc/LTU.png": "cf67b1ea4e6cc081cecca023f9603498",
"assets/packages/judolib/assets/flags-ioc/FRA.png": "2c128e895dc3457a484fc109120d363f",
"assets/packages/judolib/assets/flags-ioc/KSA.png": "700959cdf619175bdb082f14ca64e454",
"assets/packages/judolib/assets/flags-ioc/CHI.png": "795a09607777caaa963a8ed2abd6b996",
"assets/packages/judolib/assets/flags-ioc/KUW.png": "aa08d338f53cfe0c76a09f39d9cc8e3f",
"assets/packages/judolib/assets/flags-ioc/GER.png": "031d3179eddc1b8b8d004b440bd04220",
"assets/packages/judolib/assets/flags-ioc/DEN.png": "ebcdcfc8a8f69a1de80c7f7cf365f222",
"assets/packages/judolib/assets/flags-ioc/LUX.png": "918eeaea1e43f6128e5bca4ece7332f5",
"assets/packages/judolib/assets/flags-ioc/IRI.png": "c387b19a1e265277fd9279ef15542fea",
"assets/packages/judolib/assets/flags-ioc/SVK.png": "1e7243f2e0ae7d1ecb2e115b8d6fa256",
"assets/packages/judolib/assets/flags-ioc/CGO.png": "5ba1b54c97f5cd7bd6234e66cf11d4ac",
"assets/packages/judolib/assets/flags-ioc/IRQ.png": "04c89d1648ba650137aba39540167bfc",
"assets/packages/judolib/assets/flags-ioc/KGZ.png": "acf34dce733fc6a06f52b67e3ac4891a",
"assets/packages/judolib/assets/flags-ioc/NZL.png": "901f28528c1800007b19b0c9d4a91c4b",
"assets/packages/judolib/assets/flags-ioc/AUS.png": "7ef97cfce6121aa6f876a321a92e24c2",
"assets/packages/judolib/assets/flags-ioc/NOR.png": "fbd597fdd761d37e0e8262c9da6a64d9",
"assets/packages/judolib/assets/flags-ioc/FIN.png": "298ea06c460e82de8a9ab4bfa79645c3",
"assets/packages/judolib/assets/flags-ioc/JPN.png": "b19ca6dcf2379b3514f67672b72132d6",
"assets/packages/judolib/assets/flags-ioc/PER.png": "fd67cb9af98b64c941dabb77c4a298e8",
"assets/packages/judolib/assets/flags-ioc/SYR.png": "5044b3fdab63d3188cfd76f6589844c0",
"assets/packages/judolib/assets/flags-ioc/CRO.png": "18b2d970953a01804b16d21b58110e4e",
"assets/packages/judolib/assets/flags-ioc/MTN.png": "727b608d06b042fbd570b9802b739aff",
"assets/packages/judolib/assets/flags-ioc/IND.png": "6d998512d3befbd3c2e69d4ee1feea36",
"assets/packages/judolib/assets/flags-ioc/TPE.png": "2d204241afec2040609cc2a258bd079c",
"assets/packages/judolib/assets/flags-ioc/HUN.png": "93e266050baa1fab783bc6228f80d57b",
"assets/packages/judolib/assets/flags-ioc/BOL.png": "b07f3af7e18b3fb6595ac860f55f03f5",
"assets/packages/judolib/assets/flags-ioc/GRE.png": "81d80ede0f351288976df57cac632769",
"assets/packages/judolib/assets/flags-ioc/MYA.png": "3f4f8faca165dca27f0eda831f0bde7d",
"assets/packages/judolib/assets/flags-ioc/QAT.png": "c1a5738034305ac59deb004b0dc971d2",
"assets/packages/judolib/assets/flags-ioc/BRU.png": "b39e39744fafda9eb70ebd8e927d3fe7",
"assets/packages/judolib/assets/flags-ioc/LAT.png": "a9c3a2f10feea38b0cfab6a551eb8802",
"assets/packages/judolib/assets/flags-ioc/YEM.png": "ee2044661bc25a77ac29989798f855ee",
"assets/packages/judolib/assets/flags-ioc/CUB.png": "c0993349c4febc452ef9489610989fd2",
"assets/packages/judolib/assets/flags-ioc/SWE.png": "ccab73ac1bd6fe046abb71e605ec7c16",
"assets/packages/judolib/assets/flags-ioc/BUL.png": "f62788851c4c84772e348b886b55f781",
"assets/packages/judolib/assets/flags-ioc/ROU.png": "028293c418a23226fca23520d8429103",
"assets/packages/judolib/assets/flags-ioc/SLE.png": "2bbab1f8429438a462fdddfaec6be254",
"assets/packages/judolib/assets/flags-ioc/BUR.png": "1eabdd5f36ae1d84ce36df86f1097cee",
"assets/packages/judolib/assets/flags-ioc/AND.png": "c49803c0213213b50653f774bb1068c1",
"assets/packages/judolib/assets/flags-ioc/GUI.png": "cf219555cd75704ca1c1793ceacc2ec6",
"assets/packages/judolib/assets/flags-ioc/SEN.png": "74617b5d188c2445ccd0ae0ef41876fe",
"assets/packages/judolib/assets/flags-ioc/PAN.png": "36f5aa376c51e668a553a251c94aa8c8",
"assets/packages/judolib/assets/flags-ioc/POR.png": "1164bb54ec094dd978724e2a9df73eac",
"assets/packages/judolib/assets/flags-ioc/UAE.png": "1959872a863b720eebbfe57b46fe0998",
"assets/packages/judolib/assets/flags-ioc/PAR.png": "4de995b850f26aeb350c850509b9685e",
"assets/packages/judolib/assets/flags-ioc/MKD.png": "98314e6551531f09ec27fd4a21590c5a",
"assets/packages/judolib/assets/flags-ioc/MAS.png": "24459cd67f6bf4c03e77a8ee4c782796",
"assets/packages/judolib/assets/flags-ioc/ARU.png": "3a6b1d95c33e2e1986fd27b8cb7d5462",
"assets/packages/judolib/assets/flags-ioc/ARM.png": "2a9fb44df905f6d930727785609e7de4",
"assets/packages/judolib/assets/flags-ioc/RSA.png": "b99cba2649e7b60a0462c88a18633ab8",
"assets/packages/judolib/assets/flags-ioc/LIB.png": "8f50c4f498830fde3a9c4e65b1a4f11d",
"assets/packages/judolib/assets/flags-ioc/VEN.png": "b2fc47585dd337a127fc2cc567c430a1",
"assets/packages/judolib/assets/flags-ioc/HON.png": "9dcf94b9e5f324f1283ce33b28980f39",
"assets/packages/judolib/assets/flags-ioc/NAM.png": "30564e71150168b680adce05f7443475",
"assets/packages/judolib/assets/flags-ioc/ISR.png": "1cde177760f13546dea33e7eb242a109",
"assets/packages/judolib/assets/flags-ioc/FAR.png": "23410c84517d6a4ac4525738a6150c27",
"assets/packages/judolib/assets/flags-ioc/SRB.png": "ce0866a2dcf0114a1c58e1f95d40cdd2",
"assets/packages/judolib/assets/flags-ioc/MDA.png": "1fec164f488a88780f6146a88026127b",
"assets/packages/judolib/assets/flags-ioc/PUR.png": "3c719ad3af2f87bfdc01589f555b3755",
"assets/packages/judolib/assets/flags-ioc/PHI.png": "3187ae63d0ac5a154347ea1ddc5a4eda",
"assets/packages/judolib/assets/flags-ioc/THA.png": "47d5572be78ab0b5353915b74125b34d",
"assets/packages/judolib/assets/flags-ioc/UKR.png": "1371a837d921173b831acc9d49df801c",
"assets/packages/judolib/assets/flags-ioc/VIE.png": "9166288ae66359c744812493826f0224",
"assets/packages/judolib/assets/flags-ioc/SMR.png": "c9ad854984055dd09c440bf07386b192",
"assets/packages/judolib/assets/flags-ioc/ISV.png": "ce54a3f62c9f971db20dcdd31f00e694",
"assets/packages/judolib/assets/flags-ioc/PLE.png": "73a595f973a7ad227c0b85fee4ecd211",
"assets/packages/judolib/assets/flags-ioc/ARG.png": "0da8c96c29bb0c81877aa77e1a090653",
"assets/packages/flutter_multi_formatter/flags/png/vi.png": "bfe5691810c27983346bf52eb5149bb4",
"assets/packages/flutter_multi_formatter/flags/png/cn.png": "9d1e0784dcefa3513fb60071df2e04b8",
"assets/packages/flutter_multi_formatter/flags/png/pa.png": "0c91186f67333cece25b7b6f114aebce",
"assets/packages/flutter_multi_formatter/flags/png/np.png": "761c731a0b63ab006273b4a1910ccf86",
"assets/packages/flutter_multi_formatter/flags/png/lt.png": "d79eb564dd857c66ddd65a41f4cdfe4e",
"assets/packages/flutter_multi_formatter/flags/png/qa.png": "db8bdadc6a164ef1e4f1deda1e9fb965",
"assets/packages/flutter_multi_formatter/flags/png/id.png": "20a48e5d6a67edfcae769c22cead8b75",
"assets/packages/flutter_multi_formatter/flags/png/hr.png": "3175463c3e7e42116d5b59bc1da19a3f",
"assets/packages/flutter_multi_formatter/flags/png/bn.png": "1f1c5a29f9a6fd77963f7bb3de5946c2",
"assets/packages/flutter_multi_formatter/flags/png/ch.png": "fe8519b23bed3b2e8669dac779c3cb55",
"assets/packages/flutter_multi_formatter/flags/png/gt.png": "5b45ad96fdb90c56d2cd39abefd394d0",
"assets/packages/flutter_multi_formatter/flags/png/pf.png": "2bcb58685c72a0ea189ed6f24787fcd8",
"assets/packages/flutter_multi_formatter/flags/png/im.png": "df5f4c630542e241989ac64324374e42",
"assets/packages/flutter_multi_formatter/flags/png/sh.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/flutter_multi_formatter/flags/png/xk.png": "df22513149a597035238f0f0c9f06014",
"assets/packages/flutter_multi_formatter/flags/png/bl.png": "072a0baffbf28632650627d339bf9c5b",
"assets/packages/flutter_multi_formatter/flags/png/co.png": "1f1228902d0fd2b6fd23d5ead00860d3",
"assets/packages/flutter_multi_formatter/flags/png/nf.png": "3391aec8dc77dd300f835bae7ffccd17",
"assets/packages/flutter_multi_formatter/flags/png/hk.png": "3be1f46b75533ab2d423fe274cc398f0",
"assets/packages/flutter_multi_formatter/flags/png/lu.png": "31349218e6c2a6e900a3a83baa8f61d2",
"assets/packages/flutter_multi_formatter/flags/png/fr.png": "4d9d99a113066b97f91654f17d671dac",
"assets/packages/flutter_multi_formatter/flags/png/si.png": "9fa57dc95640bcd67051d7ff63caa828",
"assets/packages/flutter_multi_formatter/flags/png/ao.png": "91660ff95663f3ea8f6ddfc0c97c2ab3",
"assets/packages/flutter_multi_formatter/flags/png/aw.png": "410a04614d4176ea71f886f823fd35b5",
"assets/packages/flutter_multi_formatter/flags/png/km.png": "c631326a464f21c51fbfd767be9bcf39",
"assets/packages/flutter_multi_formatter/flags/png/gg.png": "c9d9c382e727a7a867fa824a0dd74d56",
"assets/packages/flutter_multi_formatter/flags/png/ki.png": "a93bda4f0f004d9c865f93d25c81ce18",
"assets/packages/flutter_multi_formatter/flags/png/bi.png": "2c1d426f4b941b9638303c34145ba672",
"assets/packages/flutter_multi_formatter/flags/png/it.png": "b8242dd6b72444e3a5b6a9b5e4b95407",
"assets/packages/flutter_multi_formatter/flags/png/kr.png": "938f9cb1029a71863e88011f3e79a00d",
"assets/packages/flutter_multi_formatter/flags/png/ml.png": "7378ecc1a8b6c91aa5d9a26c982e4f0a",
"assets/packages/flutter_multi_formatter/flags/png/ag.png": "62c9310edb9dc04193b3a24b4edce8e2",
"assets/packages/flutter_multi_formatter/flags/png/gr.png": "efeed503130172fadbace1481caab4bb",
"assets/packages/flutter_multi_formatter/flags/png/sj.png": "13708df2028ac76d28ec0eb35383ea4f",
"assets/packages/flutter_multi_formatter/flags/png/de.png": "e2227152ece494eabbb6b184dfb9f9a9",
"assets/packages/flutter_multi_formatter/flags/png/ye.png": "026c7294278c64c3b39dc085e8a96f3c",
"assets/packages/flutter_multi_formatter/flags/png/fo.png": "7b2aa7754ea3a43b6372b2c7d93da023",
"assets/packages/flutter_multi_formatter/flags/png/hm.png": "63084e9484c0b6db451a1d68ad5adeb9",
"assets/packages/flutter_multi_formatter/flags/png/na.png": "67421813025b783b38ce65fb66f330ec",
"assets/packages/flutter_multi_formatter/flags/png/gl.png": "c36a016c88239ab5815e8ef2674182fe",
"assets/packages/flutter_multi_formatter/flags/png/gb-nir.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/flutter_multi_formatter/flags/png/as.png": "d3ee7d8aeade5f87a5ab6ea1c53c1181",
"assets/packages/flutter_multi_formatter/flags/png/st.png": "5abecf1202ef9f7b33bdb9d0e3913f80",
"assets/packages/flutter_multi_formatter/flags/png/fm.png": "ad0f179f11aabd724f0f00c3ad26ad25",
"assets/packages/flutter_multi_formatter/flags/png/ht.png": "a49a27479ed8be33d962898febc049f1",
"assets/packages/flutter_multi_formatter/flags/png/bj.png": "6a699b2a3de19ea9cbe7742a7eb742b6",
"assets/packages/flutter_multi_formatter/flags/png/ie.png": "3882cc83555457cd3cdfbf1a285f7d39",
"assets/packages/flutter_multi_formatter/flags/png/sz.png": "491394c84dbb654442e0ad63296f3cd2",
"assets/packages/flutter_multi_formatter/flags/png/md.png": "d579fff3f3b7644d54cdad3fbcdd501e",
"assets/packages/flutter_multi_formatter/flags/png/re.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/cf.png": "0da7e59a85d78ca89a3a45f68f967a92",
"assets/packages/flutter_multi_formatter/flags/png/er.png": "300cbfb7dda5e2eea87e9b03660a6077",
"assets/packages/flutter_multi_formatter/flags/png/ng.png": "eeb857562b3dfcd105aef9ec371a916f",
"assets/packages/flutter_multi_formatter/flags/png/in.png": "6811ad48652c371323b8a540703ddf39",
"assets/packages/flutter_multi_formatter/flags/png/bq.png": "1cf2f5a0a4421b2f0c8597c91c354d80",
"assets/packages/flutter_multi_formatter/flags/png/bs.png": "4a88a47c73294f193cf7ad5fabfcb7ea",
"assets/packages/flutter_multi_formatter/flags/png/sy.png": "3b05b2bf6694eadbdd84f89065cbb7f4",
"assets/packages/flutter_multi_formatter/flags/png/ke.png": "be246664f01fa71c4b8a359305bf6d36",
"assets/packages/flutter_multi_formatter/flags/png/pm.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/mr.png": "c290de341ec04121f81f1d92128f65b3",
"assets/packages/flutter_multi_formatter/flags/png/li.png": "1abb7f4421487e6f40007c97ccf98c3d",
"assets/packages/flutter_multi_formatter/flags/png/mc.png": "6375a336b1fd53d0e918ae945523078c",
"assets/packages/flutter_multi_formatter/flags/png/ve.png": "2e8670420a607b77ebb5df3a6d9ce16a",
"assets/packages/flutter_multi_formatter/flags/png/pr.png": "a55695e2970e758c9b2f468275e548c8",
"assets/packages/flutter_multi_formatter/flags/png/py.png": "4dca66b598604fb3af9dee2fd9622ac4",
"assets/packages/flutter_multi_formatter/flags/png/vg.png": "420edc09fba1878f87336f8ebcdcee66",
"assets/packages/flutter_multi_formatter/flags/png/nu.png": "146c66c2ede3bd38ec680f76ef6525a0",
"assets/packages/flutter_multi_formatter/flags/png/gw.png": "806f63c256bddd4f1680529f054f4043",
"assets/packages/flutter_multi_formatter/flags/png/lv.png": "4370f6f09eecc21db000bd09191f3ff3",
"assets/packages/flutter_multi_formatter/flags/png/be.png": "92d0285f6ed8a74a8fa6ea4b3770daac",
"assets/packages/flutter_multi_formatter/flags/png/ck.png": "882bc3896cdd040757972bcbbf75e4bb",
"assets/packages/flutter_multi_formatter/flags/png/pt.png": "f7c4f806d879f5044fcc700029a20fcb",
"assets/packages/flutter_multi_formatter/flags/png/gy.png": "64f3007da6bdc84a25d8ad6b5d7f3094",
"assets/packages/flutter_multi_formatter/flags/png/bf.png": "54bb2c64b28b60df100b8abfb4b71777",
"assets/packages/flutter_multi_formatter/flags/png/se.png": "d96d54ba355a0427d2dc84e380c56e2c",
"assets/packages/flutter_multi_formatter/flags/png/cm.png": "2f8725d49955a64285d7bbd2bff02e2d",
"assets/packages/flutter_multi_formatter/flags/png/ps.png": "e3e006d28f6b72169c717c1dba49b4d5",
"assets/packages/flutter_multi_formatter/flags/png/ru.png": "7eb6cedfbcc7f6448e54850279ff5baf",
"assets/packages/flutter_multi_formatter/flags/png/tz.png": "466bbbf4023c5cb013d202f74f19e743",
"assets/packages/flutter_multi_formatter/flags/png/bz.png": "820836c383ff34a06d3ac9f4bff68bd4",
"assets/packages/flutter_multi_formatter/flags/png/tc.png": "0faabda1411738e572144aaeed24aadd",
"assets/packages/flutter_multi_formatter/flags/png/gu.png": "99e5df9e745605fbb1f93155535a2964",
"assets/packages/flutter_multi_formatter/flags/png/zm.png": "7d304f13f136589bd6f825c07237676c",
"assets/packages/flutter_multi_formatter/flags/png/tn.png": "e71d23c64e7407651f805fa14262999e",
"assets/packages/flutter_multi_formatter/flags/png/ws.png": "d8e4ad3af401330e3f11db4be39dbf32",
"assets/packages/flutter_multi_formatter/flags/png/za.png": "6cd7101a5f0d4b167af862b92ba8e19e",
"assets/packages/flutter_multi_formatter/flags/png/sc.png": "fce9893562cbe99d2e62a46b03e42007",
"assets/packages/flutter_multi_formatter/flags/png/ga.png": "7a9bd1b751a4c92c4a00897dbb973214",
"assets/packages/flutter_multi_formatter/flags/png/sl.png": "460ba6dfd434d06bfbe2e3bc4944c24c",
"assets/packages/flutter_multi_formatter/flags/png/um.png": "2171e21640cef63bd1296158f01a70cd",
"assets/packages/flutter_multi_formatter/flags/png/ci.png": "ad0d9306aab54c24a6b2146c3a74b954",
"assets/packages/flutter_multi_formatter/flags/png/ms.png": "438b3ae48465543239a679ef915378de",
"assets/packages/flutter_multi_formatter/flags/png/dk.png": "1c6b350f84ce03775de43f8dadb3dd6f",
"assets/packages/flutter_multi_formatter/flags/png/vn.png": "0feb7f0e73d4d3802e45cfb1bb1544c6",
"assets/packages/flutter_multi_formatter/flags/png/fk.png": "f6489fb8240437330e0cec337c67ea3e",
"assets/packages/flutter_multi_formatter/flags/png/ky.png": "bacc27cd23c1e359244533ecb9043de6",
"assets/packages/flutter_multi_formatter/flags/png/tm.png": "153c0223e88169e2d988afa1ba74d0b9",
"assets/packages/flutter_multi_formatter/flags/png/sr.png": "1b7f101242df10cf44ef9b91acd4de97",
"assets/packages/flutter_multi_formatter/flags/png/gm.png": "fc1129765b7fe093c978e83cbb0f9de1",
"assets/packages/flutter_multi_formatter/flags/png/gh.png": "bc7dc85567546d0191df4d4fcc892a8a",
"assets/packages/flutter_multi_formatter/flags/png/ly.png": "fdb3cba16a701d5471dd3bbcc6a31473",
"assets/packages/flutter_multi_formatter/flags/png/lc.png": "32e5433954c7a99cd53c1e67f2ac604a",
"assets/packages/flutter_multi_formatter/flags/png/br.png": "0a7988dc68c66634f9e95ad0d878f7ba",
"assets/packages/flutter_multi_formatter/flags/png/zw.png": "94d25ac1764b0895f20405bc253b3647",
"assets/packages/flutter_multi_formatter/flags/png/ee.png": "d2beb66602072a33aa332ac906241838",
"assets/packages/flutter_multi_formatter/flags/png/iq.png": "9434c17a6d4653df965e3276137764a1",
"assets/packages/flutter_multi_formatter/flags/png/sa.png": "c1bcb7b3a1dbff8f6fffb9929f458ea1",
"assets/packages/flutter_multi_formatter/flags/png/dj.png": "b3887992b38f208e22159d34b7cb36b5",
"assets/packages/flutter_multi_formatter/flags/png/tv.png": "d45cf6c6f6ec53ae9b52f77848dc6bf9",
"assets/packages/flutter_multi_formatter/flags/png/mo.png": "6e18ce749771587d8effc18479e000d2",
"assets/packages/flutter_multi_formatter/flags/png/ls.png": "ca6e2dfcf32adaea9d5e93d5391fb373",
"assets/packages/flutter_multi_formatter/flags/png/wf.png": "8e40a0c5be4080ffea10070744837d43",
"assets/packages/flutter_multi_formatter/flags/png/mq.png": "ae9ad4364a913e81c9787560c3b167fd",
"assets/packages/flutter_multi_formatter/flags/png/pk.png": "e7bb9a64f3581f8f2d5aa93489009a80",
"assets/packages/flutter_multi_formatter/flags/png/mk.png": "644972c75548c32b4b99593b48d32791",
"assets/packages/flutter_multi_formatter/flags/png/lk.png": "b7ab4259e284bb6f4f30cb8ec5e9b1b6",
"assets/packages/flutter_multi_formatter/flags/png/mm.png": "5afdb2c6123f2bec3fdecd638409ab06",
"assets/packages/flutter_multi_formatter/flags/png/by.png": "c5d14943250d54b4a630794c5648c687",
"assets/packages/flutter_multi_formatter/flags/png/gb-wls.png": "eb929cd0fe93fab638ea3f3c4b655593",
"assets/packages/flutter_multi_formatter/flags/png/bm.png": "c348252e17350e0f8ef4f52e0791ca62",
"assets/packages/flutter_multi_formatter/flags/png/tf.png": "5cc7bee04686cd239815544e4c75a254",
"assets/packages/flutter_multi_formatter/flags/png/cc.png": "5d1c266d4620dc7203023882a7b647e5",
"assets/packages/flutter_multi_formatter/flags/png/cw.png": "a0fc17a5c96bc82996fa70d50aa9b339",
"assets/packages/flutter_multi_formatter/flags/png/tw.png": "ec53e0e988f816e4841bd1ab3c27ed04",
"assets/packages/flutter_multi_formatter/flags/png/cr.png": "40dc5bc52eb9391bd6d1bf895b107a65",
"assets/packages/flutter_multi_formatter/flags/png/af.png": "aca8b607d5f7f7de283db4a20ca3f845",
"assets/packages/flutter_multi_formatter/flags/png/sk.png": "12494ad86edebb64916831a7fcdc45e4",
"assets/packages/flutter_multi_formatter/flags/png/eu.png": "2c370e3de950262a37b025374cfaebce",
"assets/packages/flutter_multi_formatter/flags/png/al.png": "3a69913f1180f063cc70c2d09c43a882",
"assets/packages/flutter_multi_formatter/flags/png/ec.png": "9d139a75b21aaa301124ad846b7390f7",
"assets/packages/flutter_multi_formatter/flags/png/bh.png": "7533d290739c20bd2d0250414a74c19d",
"assets/packages/flutter_multi_formatter/flags/png/et.png": "7bc0f7bd7b4c252b375fc5bd94fe6a3f",
"assets/packages/flutter_multi_formatter/flags/png/ar.png": "0836bad77d30f355fc2064f6df069b8c",
"assets/packages/flutter_multi_formatter/flags/png/jm.png": "87dbf861e528586787fdf8b6617e2f61",
"assets/packages/flutter_multi_formatter/flags/png/sg.png": "a90e323283257b28b19372e19bda950d",
"assets/packages/flutter_multi_formatter/flags/png/tj.png": "a9e427318b756c0c03bec3f3ff976fa3",
"assets/packages/flutter_multi_formatter/flags/png/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/packages/flutter_multi_formatter/flags/png/sd.png": "40572a05b7cd8ea53cee59c6be331588",
"assets/packages/flutter_multi_formatter/flags/png/bd.png": "0ca802e7f67045161047607b20c6490e",
"assets/packages/flutter_multi_formatter/flags/png/pn.png": "20a24767371c336d18ad9800c523c45a",
"assets/packages/flutter_multi_formatter/flags/png/tk.png": "fcbceb6da21d71232ad719d05b6bb71b",
"assets/packages/flutter_multi_formatter/flags/png/cv.png": "0be7f55dcf12a903fc49a72a1071b901",
"assets/packages/flutter_multi_formatter/flags/png/sv.png": "753e9326b9b68202b481b88dbb14e2d4",
"assets/packages/flutter_multi_formatter/flags/png/ge.png": "4ef3f738568d8503bde5f647e77cac2e",
"assets/packages/flutter_multi_formatter/flags/png/is.png": "9fce179e688579504fb8210c51aed66d",
"assets/packages/flutter_multi_formatter/flags/png/lb.png": "46b6c0d58c4b99070e190ce95a7250eb",
"assets/packages/flutter_multi_formatter/flags/png/mu.png": "ac855f82fe1038c119a25a07998fbb83",
"assets/packages/flutter_multi_formatter/flags/png/kg.png": "660be92bf4794cf3207e33005212f272",
"assets/packages/flutter_multi_formatter/flags/png/pg.png": "96c8233f13b1f4e7200d6ac4173de697",
"assets/packages/flutter_multi_formatter/flags/png/cy.png": "0a99780a720e253aac2e45e476458ba8",
"assets/packages/flutter_multi_formatter/flags/png/am.png": "55d71092c291a382a8fb4e0dae4b76a0",
"assets/packages/flutter_multi_formatter/flags/png/je.png": "04ae403448836c13eaddd26fa9e64d55",
"assets/packages/flutter_multi_formatter/flags/png/kn.png": "8b078bf876eca8c26e471dbcd74f4058",
"assets/packages/flutter_multi_formatter/flags/png/gf.png": "91f3e592fea6812f87ca5e5994924230",
"assets/packages/flutter_multi_formatter/flags/png/bw.png": "53fede7a11b197c2cf5cc9667544d323",
"assets/packages/flutter_multi_formatter/flags/png/mh.png": "d5ab4a201a322f99454e184699037506",
"assets/packages/flutter_multi_formatter/flags/png/mf.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/vu.png": "043330591a2b97ba1ef46ea08bfbbe24",
"assets/packages/flutter_multi_formatter/flags/png/us.png": "2171e21640cef63bd1296158f01a70cd",
"assets/packages/flutter_multi_formatter/flags/png/cd.png": "f0b60b807ec62ebfc391ff50c79ec30e",
"assets/packages/flutter_multi_formatter/flags/png/cx.png": "d5a6ca51e490d03b06a647d652d3fdb0",
"assets/packages/flutter_multi_formatter/flags/png/rs.png": "b8ef69ae6caf134436c2756f65736433",
"assets/packages/flutter_multi_formatter/flags/png/ne.png": "f29940c4d22aed2105d362d5c7dc735e",
"assets/packages/flutter_multi_formatter/flags/png/th.png": "626cf312c47ded97bf5dbb4339e9f02c",
"assets/packages/flutter_multi_formatter/flags/png/fj.png": "eab0bde840b3aedac9fade235301123c",
"assets/packages/flutter_multi_formatter/flags/png/mw.png": "bbfeb66a5eed87cb6e72ea2686857df1",
"assets/packages/flutter_multi_formatter/flags/png/tt.png": "2633904bd4718afeecfa0503057a7f65",
"assets/packages/flutter_multi_formatter/flags/png/gb.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/flutter_multi_formatter/flags/png/at.png": "8bc220081abdf5fe2139dcf052fb922f",
"assets/packages/flutter_multi_formatter/flags/png/io.png": "d4910e28f0164bc879999c17024d543c",
"assets/packages/flutter_multi_formatter/flags/png/bg.png": "6b473783a5c5b427e668a2048022663e",
"assets/packages/flutter_multi_formatter/flags/png/va.png": "e84a6f9dc08930a11d1e4b9d25b6234f",
"assets/packages/flutter_multi_formatter/flags/png/nr.png": "09c7da9ea9f49dea55d2bdb853cc543c",
"assets/packages/flutter_multi_formatter/flags/png/nz.png": "d22c137d0038c20c1fa98ae2ed3729b0",
"assets/packages/flutter_multi_formatter/flags/png/sn.png": "abaea692165cc3e890df7b736cf37a76",
"assets/packages/flutter_multi_formatter/flags/png/jp.png": "d843ce06dae06e8cf9780b71d6e3d43b",
"assets/packages/flutter_multi_formatter/flags/png/mv.png": "018b26f7521c2b3db9624f40e9e1f563",
"assets/packages/flutter_multi_formatter/flags/png/bv.png": "13708df2028ac76d28ec0eb35383ea4f",
"assets/packages/flutter_multi_formatter/flags/png/cg.png": "e5a127b0915eff11a439a9757f484dd6",
"assets/packages/flutter_multi_formatter/flags/png/td.png": "11d75e01b66659fe74372765f7c82521",
"assets/packages/flutter_multi_formatter/flags/png/mz.png": "6e98a2bf86f2d8d0f4eaffaf8bd591b7",
"assets/packages/flutter_multi_formatter/flags/png/uy.png": "98db711aa764b56a68a37820995a7685",
"assets/packages/flutter_multi_formatter/flags/png/gq.png": "7ee7587ec0dcf50180ddaad9cbb10cac",
"assets/packages/flutter_multi_formatter/flags/png/ni.png": "41e2831687e9997fa4d5f4eb0700cc84",
"assets/packages/flutter_multi_formatter/flags/png/mx.png": "0763a52cbbb6f882d1c7b67097bd35ee",
"assets/packages/flutter_multi_formatter/flags/png/la.png": "8437e3b007e993d0689452dbef8dec5a",
"assets/packages/flutter_multi_formatter/flags/png/hu.png": "ff1d0e2bc549da022f2312c4ac7ca109",
"assets/packages/flutter_multi_formatter/flags/png/ax.png": "7a8b9f688330386f5437b9e4bdf3c3e2",
"assets/packages/flutter_multi_formatter/flags/png/an.png": "cccd19a062794a67af709a59b91a9ae2",
"assets/packages/flutter_multi_formatter/flags/png/gi.png": "987d065705257febe56bdbe05a294749",
"assets/packages/flutter_multi_formatter/flags/png/lr.png": "d64e3e67b0c90e2ef83ed9868f7c29b4",
"assets/packages/flutter_multi_formatter/flags/png/mn.png": "3942d1f8bfa86fd13115a70543c6c188",
"assets/packages/flutter_multi_formatter/flags/png/eh.png": "53c935334ea149b54d38341cacb06a17",
"assets/packages/flutter_multi_formatter/flags/png/bo.png": "509a86a7d4d578c257766b8a06ef716f",
"assets/packages/flutter_multi_formatter/flags/png/sm.png": "48e98ad719be013cadf5139a5f2e2d79",
"assets/packages/flutter_multi_formatter/flags/png/dz.png": "e8359823a7ce2e1b2d1ef79361bdbebc",
"assets/packages/flutter_multi_formatter/flags/png/my.png": "72f82829eb4588404d519b84bfd5ad58",
"assets/packages/flutter_multi_formatter/flags/png/tg.png": "ae49203ef3de781e34c2b1ab072b18bb",
"assets/packages/flutter_multi_formatter/flags/png/vc.png": "9ff42949ac191ee0adcab3815779b748",
"assets/packages/flutter_multi_formatter/flags/png/mg.png": "4e20926e9ba5478d189f28adc813cd15",
"assets/packages/flutter_multi_formatter/flags/png/gn.png": "3aa100d1196e50836442e4e41f56f866",
"assets/packages/flutter_multi_formatter/flags/png/pl.png": "68252741ff7ad66838559050eb9c6b96",
"assets/packages/flutter_multi_formatter/flags/png/yt.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/hn.png": "5a183482f4faea009e4d524c1e470397",
"assets/packages/flutter_multi_formatter/flags/png/kw.png": "ff36685c5fa06a2896307a5074e74914",
"assets/packages/flutter_multi_formatter/flags/png/mp.png": "895e2aea9e8a9fb4a3db09ba75b2ae11",
"assets/packages/flutter_multi_formatter/flags/png/kp.png": "8fcc8f2fc646b484b4a47cdc0ff21cab",
"assets/packages/flutter_multi_formatter/flags/png/bb.png": "bad762779f71fb00e9dbc0f4a971816f",
"assets/packages/flutter_multi_formatter/flags/png/me.png": "451723e36ee8fb7052985302601f0ee7",
"assets/packages/flutter_multi_formatter/flags/png/rw.png": "0bd92f502b566eb99a537e88e0c5294f",
"assets/packages/flutter_multi_formatter/flags/png/ss.png": "bfc79aa44e6d2b026717f7aae4431639",
"assets/packages/flutter_multi_formatter/flags/png/jo.png": "79a73b63a1e0d78a08da882b146a2224",
"assets/packages/flutter_multi_formatter/flags/png/tl.png": "5519f1e7173e1f345d1580bab1b34d51",
"assets/packages/flutter_multi_formatter/flags/png/fi.png": "b267e5dee2f81cd260b74cd6f4a80921",
"assets/packages/flutter_multi_formatter/flags/png/cl.png": "2ed34ecb10a528bffc6908fd65996d2b",
"assets/packages/flutter_multi_formatter/flags/png/ai.png": "7112379111bbf96dae31e0b13a62b926",
"assets/packages/flutter_multi_formatter/flags/png/bt.png": "9857d9fa48b572226e9c4275fb0f3804",
"assets/packages/flutter_multi_formatter/flags/png/so.png": "15ce03e7b634c7c93f922ef4553f19ca",
"assets/packages/flutter_multi_formatter/flags/png/ug.png": "18981ef65248d3bb97deda3fc30b7030",
"assets/packages/flutter_multi_formatter/flags/png/kh.png": "a6ddda12068511bce8e99d2b82c13b49",
"assets/packages/flutter_multi_formatter/flags/png/gb-sct.png": "58267a46e412d0e2e92d76b00f3bddb5",
"assets/packages/flutter_multi_formatter/flags/png/ma.png": "f60e4b79249dd35e15514d0148182e23",
"assets/packages/flutter_multi_formatter/flags/png/nc.png": "b94385d139bf8b82b5b3f20559feece5",
"assets/packages/flutter_multi_formatter/flags/png/ad.png": "77ce19646f93c63a2387f2840bc9686e",
"assets/packages/flutter_multi_formatter/flags/png/il.png": "5497e2fc32b1174d37f9bbbeacd6265b",
"assets/packages/flutter_multi_formatter/flags/png/om.png": "b16ebc34417eb7a6ad7ed0e3c79a71c0",
"assets/packages/flutter_multi_formatter/flags/png/ir.png": "a84a156345dadcab5aeda5db9462447c",
"assets/packages/flutter_multi_formatter/flags/png/tr.png": "ea664a8b19fa4bd81145900d57e53fda",
"assets/packages/flutter_multi_formatter/flags/png/nl.png": "1cf2f5a0a4421b2f0c8597c91c354d80",
"assets/packages/flutter_multi_formatter/flags/png/uz.png": "475189379e4a67b29e9ab9a1d71f3cdd",
"assets/packages/flutter_multi_formatter/flags/png/cz.png": "bbafde1489e7a263006c9c6dbf878743",
"assets/packages/flutter_multi_formatter/flags/png/ph.png": "158bd50b6f2d18f398e8600f6663b488",
"assets/packages/flutter_multi_formatter/flags/png/gp.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/es.png": "28c7e07bba944889c1870dfc88a4c6a8",
"assets/packages/flutter_multi_formatter/flags/png/to.png": "4229da15117671214ec83c6365dce0b5",
"assets/packages/flutter_multi_formatter/flags/png/ba.png": "4b5ad282e533a2e75d8b6ce8cff43db0",
"assets/packages/flutter_multi_formatter/flags/png/au.png": "63084e9484c0b6db451a1d68ad5adeb9",
"assets/packages/flutter_multi_formatter/flags/png/aq.png": "d18febf275fd13385c1915ab0165af86",
"assets/packages/flutter_multi_formatter/flags/png/dm.png": "abcbefc6234d640787ef0f0cbfd78c32",
"assets/packages/flutter_multi_formatter/flags/png/kz.png": "caba66830ed539d3f86431ddf4006e72",
"assets/packages/flutter_multi_formatter/flags/png/ro.png": "4fcdf6021d56e82f0067a13e6cbd78a2",
"assets/packages/flutter_multi_formatter/flags/png/do.png": "a877d29919ed6e1814b07835d7806f61",
"assets/packages/flutter_multi_formatter/flags/png/az.png": "98833fec449ef8d633ef934e63080891",
"assets/packages/flutter_multi_formatter/flags/png/mt.png": "5eecdcd5c105f26d27903fbb2a1d8b36",
"assets/packages/flutter_multi_formatter/flags/png/pw.png": "191c97390c0c0407c99b9d5fb9d98f34",
"assets/packages/flutter_multi_formatter/flags/png/pe.png": "0291aca80c2a0f52d66177d16e0da63c",
"assets/packages/flutter_multi_formatter/flags/png/gd.png": "7d4b72f73674133acb00c0ea3959e16b",
"assets/packages/flutter_multi_formatter/flags/png/sx.png": "195a32986e11f1d0411a5fc20abd0c5e",
"assets/packages/flutter_multi_formatter/flags/png/no.png": "13708df2028ac76d28ec0eb35383ea4f",
"assets/packages/flutter_multi_formatter/flags/png/eg.png": "f15be21bf64894f0c0db33336558fd64",
"assets/packages/flutter_multi_formatter/flags/png/ua.png": "2dc383ba79588bd5a15a519a26ef204a",
"assets/packages/flutter_multi_formatter/flags/png/sb.png": "12cccb421defca5c7a4d19661f98f06f",
"assets/packages/flutter_multi_formatter/flags/png/cu.png": "82ec98ab8b9832e6a182367a5dd16f93",
"assets/packages/flutter_multi_formatter/flags/png/gs.png": "42f0c6f9ed997ae6902823a8418ed3b3",
"assets/packages/flutter_multi_formatter/flags/png/ca.png": "e20a51380b2da69353e3755edead340d",
"assets/packages/flutter_multi_formatter/flags/png/ae.png": "1439ab85e1ef23242fe7885da8a19091",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.json": "a6c5aeedab4e0bba7f370ea2410ff03f",
"assets/fonts/RobotoMono-Regular.ttf": "a48ac41620cd818c5020d0f4302489ff",
"assets/fonts/RobotoMono-Bold.ttf": "7c13b04382bb3c4a6a50211300a1b072",
"assets/fonts/MaterialIcons-Regular.otf": "12eddb729d15a2b07ea85cbdd94611bd",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
