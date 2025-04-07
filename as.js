function showChapter(day) {
    // الحصول على كل الفصول وإخفائها
    let allChapters = document.querySelectorAll('.chapter');
    allChapters.forEach(chapter => {
        if (chapter.id !== day) {
            chapter.style.display = 'none';
        }
    });

    // عرض أو إخفاء الفصل المطلوب عند الضغط عليه
    let chapter = document.getElementById(day);
    if (chapter.style.display === 'block') {
        chapter.style.display = 'none';
    } else {
        chapter.style.display = 'block';
    }
}