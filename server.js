var url = require('url');
var fs = require('fs');

function renderHTML(path, response){
		fs.readFile(path, null, function (err, data) {
   		if (err) {
      		response.write(404);
      		response.write('File not found');
   		}	else	{
   			response.write(data);
   			
   		}
   		response.head();
	});
}

module.exports = {
	handleRequest: function(request, response){
		request.writeHead(200, {'Content-Type': 'text/html'});

		var path = url.parse(request.url).pathname;

		switch(path){
			case "/":
				renderHTML('./index.html', response);
				break;
			case '/login':
				renderHTML('./login.html', response);
				break;
			default:
				response.writeHead(404);
				response.write('<h1>Route not defined</h1>');
				response.end();
		}
	}
};