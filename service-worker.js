const staticCacheName = 'mymws-cache';

self.addEventListener('install', function(event) {
// Lakukan beberapa pekerjaan
	
	event.waitUntil(
		caches.open(staticCacheName).then(function(cache) {
			return cache.addAll([
				'/',
				'/index.html',
				'/manifest.json',
				'/images/home.svg',
				'/images/calculator.svg',
				'/images/maps.svg',
				'/images/fetch_api.jpg',
				'/project1/add2numbers.html',
				'/project1/app/add2numbers.js',
				'/project2/index.html',
				'/project2/css/mystyle.css'
				'/project3/index.html',
				'/project3/css/peta.css',
				'/project3/js/peta.js',
				'/project3/data/peta.json',
				'/project3/images/ikan_bakar.jpg',
				'/project3/images/seafood.jpg',
				'/project3/images/spanish_resto.jpg',
				'/project3/images/steak.jpg',
				'/project3/images/warkop.jpg',
				'https://unpkg.com/leaflet@1.3.4/dist/leaflet.css'
				'https://unpkg.com/leaflet@1.3.4/dist/leaflet.js'
			]);
		})
	);
});

self.addEventListener('activate', function(event) {
 	 event.waitUntil(
    // TODO: remove the old cache
    	caches.keys().then(function(cacheNames){
    		return Promise.all(
	    		cacheNames.filter(function(cacheName){
	    			return cacheName.startsWith('mymws-') && cacheName != staticCacheName;
	    		}).map(function(cacheName){
	    			return cache.delete(cacheName);
	    		})
			);
    	})
  	);
});

self.addEventListener('fetch', function(event) {
  	// Leave this blank for now.
  	// We'll get to this in the next task.
  	event.respondWith(
  		caches.match(event.request).then(function(response){
  			if (response) {
  				return response;
  			}else{
	  			return fetch(event.request)
  			}
  		})
	);
});

