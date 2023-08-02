
function selectEpisode() {
    // Get all the category elements
    const categoryElements = document.querySelectorAll(".category");
  
    // Get all the episode elements
    const episodeElements = document.querySelectorAll(".episode-no");
  
    // Store the initial display style of each episode element
    const episodeStyles = Array.from(episodeElements).map((episode) => episode.style.display);
  
    // Add a click event listener to each category element
    categoryElements.forEach((category) => {
      category.addEventListener("click", () => {
        // Get the selected category value from the data-category attribute
        const selectedCategory = category.getAttribute("data-category");
  
        // Toggle the "selected" class on the clicked category and remove from others
        categoryElements.forEach((cat) => {
          cat.classList.toggle("selected", cat === category);
        });
  
        // Show or hide episodes based on the selected category
        episodeElements.forEach((episode, index) => {
          const episodeNumber = parseInt(episode.textContent, 10);
          const episodeVisible = (episodeNumber >= parseInt(selectedCategory.split('-')[0], 10) &&
            episodeNumber <= parseInt(selectedCategory.split('-')[1], 10));
          episode.style.display = episodeVisible ? episodeStyles[index] : "none";
        });
      });
    });
  
    // Add a click event listener to each episode element
    episodeElements.forEach((episode) => {
      episode.addEventListener("click", () => {
        // Remove the "selected" class from all episodes
        episodeElements.forEach((ep) => {
          ep.classList.remove("selected");
        });
  
        // Add the "selected" class to the clicked episode
        episode.classList.add("selected");
      });
    });
  }