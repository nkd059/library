<script>
    function changeStyle(style) {
      const stylesheet = document.getElementById("stylesheet");
      if (stylesheet) {
        console.log("Switching to:", style); // debug
        stylesheet.href = style;
      } else {
        console.error("Stylesheet link not found");
      }
    }
  </script>
