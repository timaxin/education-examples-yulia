const form = document.getElementById('todoForm');
    const taskInput = document.getElementById('taskInput');
    const imgInput = document.getElementById('imgInput');
    const todoList = document.getElementById('todoList');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const taskText = taskInput.value.trim();
      const imgUrl = imgInput.value.trim();

      if (!taskText) return;

      const li = document.createElement('li');

      if (imgUrl) {
        const img = document.createElement('img');
        img.src = imgUrl;
        img.alt = 'Task image';
        li.appendChild(img);
      }

      const text = document.createElement('span');
      text.textContent = taskText;
      li.appendChild(text);

      todoList.appendChild(li);

      form.reset();
    });