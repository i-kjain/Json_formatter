const btnFormat = document.querySelector(".button--format");
const btnClear = document.querySelector(".button--clear");
const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const btnMinify = document.querySelector(".button--minify");
const btnMagniy = document.querySelector(".button--magnify");
const btnCopy = document.querySelector(".button--copy");

btnFormat.addEventListener("click", () => {
    const str = inputArea.value;
    function isJSON(text) {
        if (0 == text.trim().length) return swal("error Sorry, Input is Empty.", "");
        try {
          const e=JSON.stringify(JSON.parse(inputArea.value), null, 4);
            outputArea.value = e;
            outputArea.style.color = "#21d621";
        }
        catch (e) {
            console.log(e);
            outputArea.style.color = "red";
            return outputArea.value = (e.message)
        }
    }
    isJSON(str);
});


btnMinify.addEventListener("click", () => {
    const outputText = outputArea.value;
    if (outputText.trim().length === 0) {
      // If there is no text in the output area, show an alert
      swal("No JSON to Minify!", "");
      return;
    }
  const minified = JSON.stringify(JSON.parse(inputArea.value));
  outputArea.value = minified;
});

btnMagniy.addEventListener("click", () => {
    const outputText = outputArea.value;
    if (outputText.trim().length === 0) {
      // If there is no text in the output area, show an alert
      swal("No JSON to Magniy!", "");
      return;
    }
  const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);
  outputArea.value = formatted;
});

btnClear.addEventListener("click", () => {
      outputArea.value = "";
      inputArea.value="";
});

// Copy to clipboard functionality
btnCopy.addEventListener("click", () => {
    const outputText = outputArea.value;
    if (outputText.trim().length === 0) {
      // If there is no text in the output area, show an alert
    //   swal("No JSON to copy!");
      swal("No JSON to copy!", "");
      return;
    }
    outputArea.select(); // Select the text in the output area
    document.execCommand("copy"); // Copy the selected text to the clipboard
  
    // Visual feedback for successful copy
    btnCopy.textContent = "Copied!";
    setTimeout(() => {
      btnCopy.textContent = "Copy to Clipboard";
    }, 2000);
  });



  //Input Value of file
const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target.result;
      inputArea.value = fileContent;
    };

    reader.readAsText(file);
  }
});
