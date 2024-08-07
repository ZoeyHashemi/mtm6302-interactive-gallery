const images = document.querySelectorAll(".images img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImage"); // Corrected variable name
const modalText = document.querySelector(".modalText"); // Corrected variable name
const close = document.querySelector(".close");

images.forEach(Image => {
    Image.addEventListener("click", () => {
        modal.classList.add("appear");
        modalImg.src = Image.src; // Corrected variable name
        modalText.innerHTML = Image.alt; // Corrected variable name

        close.addEventListener("click", () => {
            modal.classList.remove("appear");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const downloadIcons = document.querySelectorAll(".fa-download");

    downloadIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const imageSource = this.closest("div").previousElementSibling.src;


            const downloadLink = document.createElement("a");


            downloadLink.href = imageSource;
            downloadLink.download = "downloaded_image.jpg";


            document.body.appendChild(downloadLink);


            downloadLink.click();


            document.body.removeChild(downloadLink);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const expandIcons = document.querySelectorAll(".fa-expand-arrows-alt");

    expandIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            // Find the parent container of the clicked icon
            const imageContainer = this.closest("div");

            // Toggle a class to enlarge or shrink the image
            imageContainer.classList.toggle("enlarged");
        });
    });

    const downloadIcons = document.querySelectorAll(".fa-download");

    downloadIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const imageSource = this.closest("div").previousElementSibling.src;

            // Create a link element
            const downloadLink = document.createElement("a");

            // Set the href and download attributes
            downloadLink.href = imageSource;
            downloadLink.download = "downloaded_image.jpg"; // Customize the downloaded filename here

            // Append the link to the body
            document.body.appendChild(downloadLink);

            // Trigger a click on the link
            downloadLink.click();

            // Remove the link from the body
            document.body.removeChild(downloadLink);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const expandIcons = document.querySelectorAll(".fa-expand-arrows-alt");
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modalImage");
    const close = document.querySelector(".close");

    expandIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const imageSource = this.closest("div").previousElementSibling.src;

            // Set the modal image source
            modalImg.src = imageSource;

            // Show the modal
            modal.classList.add("appear");

            // Close modal event
            close.addEventListener("click", function () {
                modal.classList.remove("appear");
            });
        });
    });
});


