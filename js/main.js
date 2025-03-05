// plan on how i will solve this problem
//bug fix #1: Prevent Multiple Pieces in One Drop Zone
// something like by using loop if else maybe.
// - Tweak the `handleDrop` function to check if the drop zone already contains a piece.
// - If it does, prevent the new puzzle piece from being dropped. 

//bug fix #2: Reset the puzzle to original place after Changing the Background Image.
// create a function which will reset the puzzle to its original place after changing the background image.
// call this function inside changeBGImage to reset the puzzle to its original place after changing the background image.



let theButtons = document.querySelectorAll('#buttonHolder img'),
    puzzleBoard = document.querySelector('.puzzle-board'),
    puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
    dropZones = document.querySelectorAll('.drop-zone'),
    draggedPiece;


    function changeBGImage() {
        puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
        resetPuzzlePieces(); //bug fix #2: Reset the puzzle to original place after Changing the Background Image.
        
    }
// function to reset the puzzle to its original place after changing the background image.
    function resetPuzzlePieces() {
        puzzlePieces.forEach(piece => {
            document.querySelector('.puzzle-pieces').appendChild(piece); // moves each piece back to the puzzle board
    });
    }

    function handlesStartDrag() {
        console.log('Started Dragging this piece: ', this);
        draggedPiece = this;
    }

    function handleDragOver(e) {
        e.preventDefault();
        console.log('Dragged Over')
    }

    function handleDrop(e) {
        console.log('dropped')
        e.preventDefault(); // bug fix #1: Prevent Multiple Pieces in One Drop Zone
        
         if (this.children.length === 0) { // check wether the drop zone is empty 
            this.appendChild(draggedPiece); // if it is empty then put the dragged piece to the drop zone
         } else {
             console.log('This drop zone already contains a piece'); // if it is not empty then show this message
         }

        
    }

    theButtons.forEach(button => button.addEventListener('click', changeBGImage));

    puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handlesStartDrag));

    dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));

    dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));