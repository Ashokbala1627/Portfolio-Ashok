function downloadResume() {
  // Specify the path to your resume file
  var resumeUrl = "./assets/imgs/Ashok March Final 2024 - Copy.pdf"; // Update this with your actual resume path

  // Create a temporary anchor element
  var anchorElement = document.createElement("a");
  anchorElement.href = resumeUrl;

  // Specify the filename for the downloaded file
  anchorElement.download = "Ashok Resume"; // Update this with your desired filename

  // Programmatically trigger the download
  anchorElement.click();
}
function viewResume() {
  // Specify the path to your resume file
  var resumeUrl = "./assets/imgs/Ashok March Final 2024 - Copy.pdf"; // Update this with your actual resume path

  // Open the resume in a new tab or window
  window.open(resumeUrl, "_blank");
}
function toggleReadMore(introTextId, moreContentId, readMoreLinkId) {
  var moreContent = document.getElementById(moreContentId);
  var readMoreLink = document.getElementById(readMoreLinkId);

  if (
    moreContent.style.display === "none" ||
    moreContent.style.display === ""
  ) {
    moreContent.style.display = "inline";
    readMoreLink.textContent = "Read Less";
  } else {
    moreContent.style.display = "none";
    readMoreLink.textContent = "Read More";
  }
}
