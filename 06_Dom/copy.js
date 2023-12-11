function copyToClipboard(button) {
  const codeBlock = button.previousElementSibling;
  const textArea = document.createElement("textarea");

  // Set the value of the textarea to the text content of the code block
  textArea.value = codeBlock.textContent;

  // Append the textarea to the document
  document.body.appendChild(textArea);

  // Select the text inside the textarea
  textArea.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the textarea from the document
  document.body.removeChild(textArea);

  // Show the tooltip
  const tooltip = button.nextElementSibling;
  tooltip.style.opacity = 1;

  // Hide the tooltip after 2 seconds
  setTimeout(() => {
    tooltip.style.opacity = 0;
  }, 2000);
}
