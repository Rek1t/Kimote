app.factory('Logger', function($http) {
	var logger = {};

	var connected = false;
	var errCon = false;
	var bouton = "Connecter";

	logger.logout = function () {
		window.base_url = "";
		connected = false;
		errCon = false;
		bouton = "Connecter";
		alert("Déconnecté");
	};

	logger.login = function (username, password, ip, port) {
		window.base_url = 'http://' + username + ':' + password + '@' + ip + ':' + port;
		ping_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"JSONRPC.Ping"}&callback=JSON_CALLBACK';

		$http.jsonp(window.base_url+ping_url)
			.success(function(data, status){
				connected = true;
				errCon = false;
				bouton = "Déconnecter";
				window.location = "#/remote";
			})
			.error(function(data, status){
				connected = false;
				errCon = true;
				bouton = "Connecter";
				alert("Error"+status);
			});
	};

	logger.getConn = function () {
		return connected;
	};

	logger.getErr = function () {
		return errCon;
	};

	logger.getBouton = function () {
		return bouton;
	};

	return logger;
});

app.factory('Sounder', function($http) {
	var sounder = {};

	var muted = false;
	var errMute = false;
	var errUnmute = false;


	sounder.SetMute = function () {
		ping_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"Application.SetMute", "params":{"mute":true}}&callback=JSON_CALLBACK';

		$http.jsonp(window.base_url+ping_url)
			.success(function(data, status){
				muted = true;
				window.location = "#/settings";
				window.location = "#/remote";
			})
			.error(function(data, status){
				errMute = true;
			});
	};
	
	sounder.SetUnMute = function () {
		ping_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"Application.SetMute", "params":{"mute":false}}&callback=JSON_CALLBACK';

		$http.jsonp(window.base_url+ping_url)
			.success(function(data, status){
				muted = false;
				window.location = "#/settings";
				window.location = "#/remote";
			})
			.error(function(data, status){
				errUnMute = true;
			});
	};	

	sounder.getMuted = function () {
		return muted;
	};


	return sounder;
});