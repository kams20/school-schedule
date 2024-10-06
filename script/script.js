
document.querySelectorAll('td').forEach(function(cell) {
    cell.addEventListener('click', function() {
        this.classList.toggle('highlight');
    });
});


const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('change', function() {
    document.body.classList.toggle('light-theme', this.checked);
});
