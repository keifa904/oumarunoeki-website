document.addEventListener("DOMContentLoaded", function() {
    showSection('home'); // 最初にホームだけ表示
});

function showSection(sectionId) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.classList.add("hidden"); // すべてのセクションを非表示
    });

    document.getElementById(sectionId).classList.remove("hidden"); // 選択されたセクションだけ表示
}