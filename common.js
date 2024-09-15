function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    
    elements.forEach(element => {
        const file = element.getAttribute('data-include');
        if (file) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    element.innerHTML = data;
                })
                .catch(error => console.error('Error loading include file:', error));
        }
    });
}

// 페이지가 로드된 후 includeHTML 실행
window.onload = includeHTML;