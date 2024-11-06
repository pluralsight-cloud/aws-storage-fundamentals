// Function to generate a random string of a specified length
function generateRandomString(length = 8) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Add event listener to the button when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generate-string-button");
  const output = document.getElementById("random-string");

  button.addEventListener("click", () => {
    const randomString = generateRandomString();
    output.textContent = `Random String: ${randomString}`;
  });
});
