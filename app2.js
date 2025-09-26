<!DOCTYPE html>
<html>
<head>
  <title>Reverse String</title>
</head>
<body>
  <h2>Reverse a String</h2>
  <input type="text" id="textInput" placeholder="Enter text">
  <button onclick="reverseString()">Reverse</button>
  <p id="output"></p>

  <script>
    function reverseString() {
      let str = document.getElementById("textInput").value;
      let reversed = str.split("").reverse().join("");
      document.getElementById("output").innerText = "Reversed: " + reversed;
    }
  </script>
</body>
</html>
