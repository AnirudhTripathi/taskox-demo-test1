'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".firebase/hosting.cHVibGlj.cache": "da4684659ff22308f21ea0e5498dff8c",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "3f6816cb787e4206748260d69f8ebbc6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1bf70a76a8c1e9bbe89059df817fe9dc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "500607f2d14d66971f601d9ba19d20c4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ab6d45ded698a8da3ddaa5f01d5730dc",
".git/logs/refs/heads/main": "e108f2069a0b28fad46407e830cf5f54",
".git/logs/refs/remotes/origin/main": "4294fbedf8c125633f68b531a3d5be45",
".git/objects/04/a183f4c259a36a76b3e366edde6c16bc52c41f": "0af7e5d855604356f9f2a8cd0e7d31f6",
".git/objects/30/f07c40d5c5f191ee2c8b0eda316f5f6dc759ea": "f83d0dc363c106a7c9020bd526640369",
".git/objects/34/e4667bafd17d8a3731e6954737a38d9c3c425d": "8b8d58b3bc2d5a47456f54ede9e16f07",
".git/objects/3b/fb42397dada1840c59fe99ef74252f767f34bf": "9529aa33e5d52006005ec2e7650ed410",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/93/fb369aff39f707e15c09542de480df00be53ee": "a89028270bd2d6a2b0bd6a57abfb460a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/4d36dee2f5720d812cbdfea493394918ee97ae": "357a9fce9130097c7c270771d92eba5e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/b58ffbfa3c0d813911938b50b946c8eac0c9e4": "b51b7dc588315ca3de6735899fdb79f3",
".git/objects/e3/2fedb1269fabc40a77b663572b9e5bce411fbc": "3f8dc1834d9e64ca0dfd2f5b09c21884",
".git/objects/e3/cc1337f6568f46c800b31457ebd05566776eee": "3ebc8e342af131941cac00122d9b7043",
".git/objects/eb/548c4c98ccdb0948551425ee3e6e6cd69c71da": "3fc4376087a2acef809b70f3fffc2925",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fe/42f3751bb960af1bef2c66da7a292c6e019422": "dfb1e5de2a8483d5be1277193818da60",
".git/refs/heads/main": "1c0ad3234bb235b873745a6226f2a4be",
".git/refs/remotes/origin/main": "1c0ad3234bb235b873745a6226f2a4be",
"assets/AssetManifest.bin": "fbf09e620c67c0233446aeeb434c5c38",
"assets/AssetManifest.bin.json": "58dbe76624191593a13bf613a397b537",
"assets/AssetManifest.json": "0251a5a6b19ef5911d555d9eb926effa",
"assets/assets/fonts/Cabin-Bold.ttf": "bbd44d52dace612e07fe4e4a28fd8def",
"assets/assets/fonts/Cabin-Medium.ttf": "326c11d42e7d2d32a0c568e8348b294f",
"assets/assets/fonts/Cabin-Regular.ttf": "a1d77c9c8493112f933aaf70c017f817",
"assets/assets/fonts/Cabin-SemiBold.ttf": "aff0ce7dd1504ade3d0b9a4e585314cb",
"assets/assets/icon/1.jpg": "a47994a86a361fc6060a09544846b093",
"assets/assets/icon/2.jpg": "364a2820f73ac8a98eab2470cafcb9f9",
"assets/assets/icon/3.jpg": "c502d09ed1bfd958b6d36e0b36a0ae64",
"assets/assets/icon/taskox_icon.png": "e4c2e7415736603c9ece3cfb2bd624d0",
"assets/assets/svgs/dashboard.svg": "0434975cd743493f929dcab5661c5ca8",
"assets/assets/svgs/login_illustration.svg": "9e584500c2efd4ba98f668ce308907f1",
"assets/assets/svgs/masterdata.svg": "0bdb3362ae6b994d0c071143046cc3f1",
"assets/assets/svgs/payment.svg": "2d4104d1bdc0ea362af1ad79f85e7b36",
"assets/assets/svgs/report.svg": "e9820916f906ee63da79a374184f586d",
"assets/assets/svgs/signout.svg": "06816a6c94c2b206bc1491fab29e968c",
"assets/FontManifest.json": "902f3de7f1f90f3de24c45bce7287ec6",
"assets/fonts/MaterialIcons-Regular.otf": "b6bd6a63cf396fc2436c022596fc0f59",
"assets/NOTICES": "920f83020951c9eaabebebe7449a8ef3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "72248ce09ba3eec79e956786f48bd892",
"firebase.json": "ceb3227e948a2fffb08892a8749cf74e",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7f6db20b6cdc23c4636800804aec122d",
"/": "7f6db20b6cdc23c4636800804aec122d",
"main.dart.js": "9fbdafef2b53c2ea969ae2bc7089fa93",
"manifest.json": "e3b08cd9fa33a0fb80e30c8fab364654",
"public/index.html": "2c9e186a9bb70a1026ddb88a0670afc0",
"version.json": "8cbcc7a5126cd573d56ad272813d55b4",
"yes/404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"yes/index.html": "2c9e186a9bb70a1026ddb88a0670afc0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
