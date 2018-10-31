if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js')
	.then(registration => console.log('Service Worker terdaftar (registered) with scope',registration.scope))
	.catch( error => {
	console.log('Error: Gagal melakukan registrasi service workder:', error);
	});
}