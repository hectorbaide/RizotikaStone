//Flashcard
var flashcards = [];





//Definition of GameObject

function newGameObject (objectType, objectElement, objectName) {
	// body...
	this.objectType = objectType;
	this.objectElement = objectElement;
	this.objectName = objectName;
}

//Function of adding to array

newGameObject.prototype.addToArray = function() {
	// body...
	flashcards.push(this);
};


Sora = newGameObject("interactive","character","Sora");



