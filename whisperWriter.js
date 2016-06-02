(function(){
	window.whisp = {};
	var d = 7;
	
	function fillInShape(startCoords, lengthOfSide){
		var coords = randomizeStartCoords(startCoords);
		var shapeSides = startCoords.length;
		var shapeSidesNeg1 = startCoords.length - 1;
		var shapeSidesNeg2 = startCoords.length - 2;

		for(var coordNum = 0; coordNum < coords.length; coordNum++){
			var coord1 = coords[coordNum][0];
			var coord2 = coords[coordNum][1];
			if(coordNum === 0){
				ctx.moveTo(coord1,coord2);
			} else {
				ctx.lineTo(coord1,coord2);
			}
		}

		for(var i =0; i < lengthOfSide; i++){
			var coordsLength = coords.length;
			var twoAhead = coords[coordsLength-shapeSidesNeg2];
			var oneAhead = coords[coordsLength-shapeSidesNeg1]; 

			var vector = [oneAhead[0] - twoAhead[0], oneAhead[1] - twoAhead[1]]; //oneAhead to twoAhead 

			var divisor = Math.sqrt(vector[0]*vector[0] + vector[1]*vector[1]);
			var u = [vector[0]/divisor, vector[1]/divisor];

			var du = [u[0]*d, u[1]*d];

			var point = [oneAhead[0] - du[0], oneAhead[1] - du[1]]


			coords.push(point)
			ctx.lineTo(point[0], point[1])
		}
		ctx.stroke();
	}

	function randomizeStartCoords(startCoords){
		console.log(startCoords.length)
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

	whisp.buildMapOnlyShapes = function(canvasSize, triSize){
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

				fillInShape(coords, triSize);
				fillInShape(coords2, triSize);

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
					fillInShape(coords3, triSize)
				} else {
					fillInShape(coords1, triSize);
					fillInShape(coords2, triSize);
				}
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
					fillInShape(coords3, triSize)
				} else {
					fillInShape(coords1, triSize);
					fillInShape(coords2, triSize);
				}
			}
		}
	}
	return whisp;
})()



