//your code here
   const parentElement = document.getElementById('parent');
    const imageElements = Array.from(document.getElementsByClassName('image'));

    let draggingElement = null;

    // Add event listeners for drag and drop events
    imageElements.forEach((element) => {
      element.addEventListener('dragstart', handleDragStart);
      element.addEventListener('dragover', handleDragOver);
      element.addEventListener('dragenter', handleDragEnter);
      element.addEventListener('dragleave', handleDragLeave);
      element.addEventListener('drop', handleDrop);
      element.addEventListener('dragend', handleDragEnd);
    });

    // Drag start event handler
    function handleDragStart(event) {
      draggingElement = this;
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/html', this.innerHTML);
      this.classList.add('selected');
    }

    // Drag over event handler
    function handleDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      return false;
    }

    // Drag enter event handler
    function handleDragEnter(event) {
      this.classList.add('selected');
    }

    // Drag leave event handler
    function handleDragLeave(event) {
      this.classList.remove('selected');
    }

    // Drop event handler
    function handleDrop(event) {
      if (draggingElement !== this) {
        draggingElement.innerHTML = this.innerHTML;
        this.innerHTML = event.dataTransfer.getData('text/html');
      }
      return false;
    }

    // Drag end event handler
    function handleDragEnd(event) {
      imageElements.forEach((element) => {
        element.classList.remove('selected');
      });
    }