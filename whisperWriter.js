(function(){
	window.whisp = {};
	var d = 10;
	
	function fillInTriangle(startCoords, lengthOfSide){
		var coords = randomizeStartCoords(startCoords);
		ctx.moveTo(coords[0][0],coords[0][1]);
		ctx.lineTo(coords[1][0],coords[1][1]);
		ctx.lineTo(coords[2][0],coords[2][1]);
		ctx.lineTo(coords[3][0],coords[3][1]);	

		for(var i =0; i < lengthOfSide; i++){
			var coordsLength = coords.length;
			var last = coords[coordsLength-1];
			var twoLast = coords[coordsLength-2];
			var threeLast = coords[coordsLength-3]; 

			var vector = [threeLast[0] - twoLast[0], threeLast[1] - twoLast[1]]; //threeLast to twoLast 

			var divisor = Math.sqrt(vector[0]*vector[0] + vector[1]*vector[1]);
			var u = [vector[0]/divisor, vector[1]/divisor];

			var du = [u[0]*d, u[1]*d];

			var point = [threeLast[0] - du[0], threeLast[1] - du[1]]


			coords.push(point)
			ctx.lineTo(point[0], point[1])
		}
		ctx.stroke();
	}

	function fillInTriangle2(startCoords, lengthOfSide){
		var coords = randomizeStartCoords(startCoords);
		ctx.moveTo(coords[0][0],coords[0][1]);
		ctx.lineTo(coords[1][0],coords[1][1]);
		ctx.lineTo(coords[2][0],coords[2][1]);
		ctx.lineTo(coords[3][0],coords[3][1]);	
		ctx.lineTo(coords[4][0],coords[4][1]);	

		for(var i =0; i < lengthOfSide; i++){
			var coordsLength = coords.length;
			var last = coords[coordsLength-1];
			var twoLast = coords[coordsLength-2];
			var threeLast = coords[coordsLength-3]; 
			var fourLast = coords[coordsLength-4]; 

			var vector = [fourLast[0] - threeLast[0], fourLast[1] - threeLast[1]]; //fourLast to threeLast 

			var divisor = Math.sqrt(vector[0]*vector[0] + vector[1]*vector[1]);
			var u = [vector[0]/divisor, vector[1]/divisor];

			var du = [u[0]*d, u[1]*d];

			var point = [fourLast[0] - du[0], fourLast[1] - du[1]]


			coords.push(point)
			ctx.lineTo(point[0], point[1])
		}
		ctx.stroke();
	}

	function randomizeStartCoords(startCoords){
		var numberOfPoints = startCoords.length -1;
		var slimmed = startCoords.slice(0,numberOfPoints);

		var random = Math.round(Math.random() * numberOfPoints);
		var shuffled = shuffle(slimmed, random);

		shuffled.push(shuffled[0]);

		return shuffled;

	}

	function shuffle(array, numberOfShifts) {
	  var currentIndex = array.length, temporaryValue, randomIndex;
	  var x = array[0]
	  // While there remain elements to shuffle...
	  for(var i = 0; i < numberOfShifts; i++){
	  	var shifted = array.shift();
	  	array.push(shifted);
	  }

	  var random = Math.round(Math.random() * 1);
	  if(random){
	  	array.reverse();
	  }

	  return array;
	}

	whisp.buildMap = function(canvasSize, triSize){
		for(var x = 0; x<canvasSize/triSize; x++){
			for(var y = 0; y<canvasSize/triSize; y++){
				var coords = [
						[x*triSize,y*triSize],
						[(x+1)*triSize,(y+1)*triSize],
						[x*triSize,(y+1)*triSize],
						[x*triSize,y*triSize]
					]
				var coords2 = [
						[(x+1)*triSize,y*triSize],
						[(x+1)*triSize,(y+1)*triSize],
						[x*triSize,y*triSize],
						[(x+1)*triSize,y*triSize]
					]

				fillInTriangle(coords, triSize);
				fillInTriangle(coords2, triSize);

			}
		}
	}

	whisp.buildMap2 = function(canvasSize, triSize){
		for(var x = 0; x<canvasSize/triSize; x++){
			for(var y = 0; y<canvasSize/triSize; y++){
				var coords1 = [
					[x*triSize,y*triSize],
					[(x+1)*triSize,(y+1)*triSize],
					[x*triSize,(y+1)*triSize],
					[x*triSize,y*triSize]
				]
				var coords2 = [
					[(x+1)*triSize,y*triSize],
					[(x+1)*triSize,(y+1)*triSize],
					[x*triSize,y*triSize],
					[(x+1)*triSize,y*triSize]
				]
				var coords3 = [
					[x*triSize,y*triSize],
					[(x+1)*triSize,y*triSize],
					[(x+1)*triSize,(y+1)*triSize],
					[x*triSize,(y+1)*triSize],
					[x*triSize,y*triSize]
				]

				var random = Math.round(Math.random())
				if(random == 1) {
					fillInTriangle2(coords3, triSize)
				} else {
					fillInTriangle(coords1, triSize);
					fillInTriangle(coords2, triSize);
				}
			}
		}
	}
	return whisp;
})()



