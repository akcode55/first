document.addEventListener('DOMContentLoaded', () => {
    const detailsBtns = document.querySelectorAll('.details-btn');
    
    detailsBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.card-content');
            const title = card.querySelector('h2').textContent;
            alert(`سيتم عرض المزيد من التفاصيل عن ${title} قريباً`);
        });
    });
});