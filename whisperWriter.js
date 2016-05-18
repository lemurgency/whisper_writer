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

function randomizeStartCoords(startCoords){
	var slimmed = startCoords.slice(0,3);

	var shuffled = shuffle(slimmed);

	shuffled.push(shuffled[0]);

	return shuffled;

}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function buildMap(canvasSize, triSize){
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