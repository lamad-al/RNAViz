function StandardPhp()
{
	return function(data, status) 
	{
		console.log("Data from ajax: " + data);
		console.log("Status from ajax: " + status);
    };	
}

function StandardPhpCallback(callback)
{
	return function(data, status) 
	{
		console.log("Data from ajax: " + data);
		console.log("Status from ajax: " + status);

		callback();
    };	
}

function StandardLoad(location)
{
	return function(data, status) 
	{
		console.log("Location: " + location);
		console.log("Data from ajax: " + data);
		console.log("Status from ajax: " + status);
		
		var division = document.getElementById(location);
		division.innerHTML = data;
    };	
}

function StandardLoadCallback(location, callback)
{
	return function(data, status) 
	{
		console.log("Location: " + location);
		console.log("Data from ajax: " + data);
		console.log("Status from ajax: " + status);
		
		var division = document.getElementById(location);
		division.innerHTML = data;
		
		callback();
    };	
}

function StandardError()
{
	return function(data, status, error) 
	{
		console.log("Error: " + error);
		console.log("Data: " + data);
		console.log("Status: " + status);
    };
}