document.addEventListener('DOMContentLoaded', function() {
    // إضافة تأثيرات للروابط
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff6f61';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#fff';
        });
    });

    // إضافة تأثيرات للأزرار
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
