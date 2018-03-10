$(document).ready(function() {
    var articleContainer = $("#container-article");
    // Add event listener to generate Scrape New Article button
    $(document).on("click", "#scrape-new")

})

//*********FUNCTIONS********************

initPage();

//*********FUNCTIONS********************

function initPage() {
    console.log("initPage function is working!");
}

function renderArticles(articles) {
    // Pass article JSON object to the createPanel function which returns a bootstrap
    // panel with our article data inside

    // Then once we have all of the HTML for the articles stored in our articlePanels array,
    // append them to the articlePanels container
    console.log("renderArticles function is working!");
}

function createPanel(article) {
    // This takes single JSON object for an article & constructs a jQuery element 
    // containing all of the formatted HTML for the article panel
    console.log("createPanel function is working!");
}



function renderEmpty() {
    // Render HTML advising that there are no articles to view
    // Append data to page
    console.log("renderEmpty function is working!");
}