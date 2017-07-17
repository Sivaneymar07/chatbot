var chatBot = angular.module('chatBot',['ngAnimate']);

chatBot.controller('chatBotCtrl', function($scope,$location) {
	console.log("HELLO FROM THE OTHER SIDE");
	$scope.messages = {}
	var message_data = {
		greeting : "Hello.What can I do for you?",
		 start : "../index.html",
		// specifications : {
		// 	header_width : "What's the width of the header?",
		// 	header_height : "What's the height of the header?",
		// 	body_width : "What's the width of the body?",
		// 	body_height : "What's the height of the body?",
		// 	footer_width : "What's the width of the footer?",
		// 	footer_height : "What's the height of the footer?"
		// }
	}
	var i = -1;
	$scope.func = function()
	{	
		i++
		$scope.messages[i]=$scope.sent_message;
		document.getElementById('chatmsg').value="";
		if($scope.messages[i]=="Hi"|| $scope.messages[i]=="hi"||$scope.messages[i]=="Hello"||$scope.messages[i]=="hello")
		{
			i++
			$scope.messages[i]=message_data.greeting;
		}
		else if($scope.messages[i]=="I want to see food website"||$scope.messages[i]=="i need a banner")
		{
		  

        window.location='../../website-master/FreeWebsite-Template-master/index.html';
        console.log("hi")
               

		
		 }
		 else if($scope.messages[i]=="I want to see kbc website"){
		 	 window.location='../../kbc-meanstack--master/index.html';
        console.log("hi")
		 }
		console.log($scope.messages)
	}
	$scope.func1= function(){
		$scope.chatbox=true;
		$scope.banner=false;
		console.log("Adadadasd")
	}
});