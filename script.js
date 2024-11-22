<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lab 5 Example</title>
  <style>
    .box {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      cursor: pointer;
    }
    .hidden {
      display: none;
    }
  </style>
</head>
<body>
  <div class="box" id="colorBox">Hover over me!</div>
  <p id="text" class="hidden">You clicked the box!</p>
  <script>
    const box = document.getElementById('colorBox');
    const text = document.getElementById('text');

    // Зміна кольору при кліку
    box.addEventListener('click', () => {
      box.style.backgroundColor = box.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
      text.classList.toggle('hidden'); // Показати або сховати текст
    });

    // Зміна тексту при наведенні
    box.addEventListener('mouseover', () => {
      box.textContent = "Click me!";
    });

    box.addEventListener('mouseout', () => {
      box.textContent = "Hover over me!";
    });
  </script>
</body>
</html>
