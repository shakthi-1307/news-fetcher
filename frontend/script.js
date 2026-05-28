async function getNews(topic) {

    const response =
    await fetch(
        `https://news-fetcher-mymo.onrender.com/news?topic=${topic}`
    );

    const data = await response.json();

    console.log(data);

    if (data.articles) {
        displayNews(data.articles);
    }
}


function displayNews(articles) {

    const newsContainer =
    document.getElementById("newsContainer");

    newsContainer.innerHTML = "";

    articles.forEach(article => {

        const newsCard = `
        <div class="card">

            <img src="${article.urlToImage || ''}">

            <h2>${article.title}</h2>

            <p>
                ${article.description || 'No description'}
            </p>

            <a
                href="${article.url}"
                target="_blank"
            >
                Read More
            </a>

        </div>
        `;

        newsContainer.innerHTML += newsCard;
    });
}


function searchNews() {

    const topic =
    document.getElementById("searchInput").value;

    getNews(topic);
}