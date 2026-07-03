/**
 * Search functionality
 */
const searchData = [
    { text: 'Apply for a passport', category: 'Services' },
    { text: 'Pay taxes online', category: 'Services' },
    { text: 'Register a business', category: 'Business' },
    { text: 'Apply for visa', category: 'Services' },
    { text: 'National ID card', category: 'Services' },
    { text: 'Health services near me', category: 'Services' },
    { text: 'Scholarship applications', category: 'Education' },
    { text: 'Government tenders', category: 'Business' },
    { text: 'The President of Malawi', category: 'Government' },
    { text: 'Ministry of Health', category: 'Government' },
    { text: 'Ministry of Justice', category: 'Government' },
    { text: 'Parliament proceedings', category: 'Government' },
    { text: 'Constitution of Malawi', category: 'Government' },
    { text: 'Tourism and national parks', category: 'About' },
    { text: 'Trade and export', category: 'Business' },
    { text: 'Press releases', category: 'News' },
    { text: 'Social welfare programs', category: 'Services' },
    { text: 'Driver\'s license renewal', category: 'Services' },
    { text: 'Birth certificate', category: 'Services' },
    { text: 'Pension benefits', category: 'Services' },
    { text: 'Investment opportunities', category: 'Business' },
    { text: 'Open data portal', category: 'Business' },
    { text: 'Contact government', category: 'Support' },
    { text: 'Report a problem', category: 'Support' },
];

function handleSearch(value) {
    const suggestions = document.getElementById('searchSuggestions');
    if (value.length < 2) {
        suggestions.classList.remove('active');
        return;
    }
    const filtered = searchData.filter(item =>
        item.text.toLowerCase().includes(value.toLowerCase())
    ).slice(0, 6);

    if (filtered.length === 0) {
        suggestions.classList.remove('active');
        return;
    }

    suggestions.innerHTML = filtered.map(item =>
        `<div class="search-suggestion-item" onclick="selectSuggestion('${item.text}')">
            <span class="suggestion-icon">&#128269;</span>
            <span>${item.text}</span>
            <span style="margin-left:auto; font-size:12px; color:var(--gray-500);">${item.category}</span>
        </div>`
    ).join('');
    suggestions.classList.add('active');
}

function selectSuggestion(text) {
    document.getElementById('searchInput').value = text;
    document.getElementById('searchSuggestions').classList.remove('active');
    performSearch();
}

function performSearch() {
    const val = document.getElementById('searchInput').value;
    if (val.trim()) {
        alert('Search functionality: Searching for "' + val + '"\n\nIn production, this would navigate to search results.');
    }
    document.getElementById('searchSuggestions').classList.remove('active');
}

// Close suggestions on outside click
document.addEventListener('click', function(e) {
    if (!e.target.closest('.header-search')) {
        document.getElementById('searchSuggestions').classList.remove('active');
    }
});
