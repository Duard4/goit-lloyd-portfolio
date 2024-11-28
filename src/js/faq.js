document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const header = item.querySelector(".faq-header");
        const button = item.querySelector(".faq-btn");
        const content = item.querySelector(".faq-content");
        const openIcon = button.querySelector(".faq-btn-close");
        const closeIcon = button.querySelector(".faq-btn-open");

        // Встановлення початкового стану
        if (!item.classList.contains("active")) {
            content.style.maxHeight = "0";
            content.style.opacity = "0";
            content.style.overflow = "hidden";
            openIcon.style.display = "block";
            closeIcon.style.display = "none";
        }

        header.addEventListener("click", () => {
            // Закриття всіх інших елементів
            faqItems.forEach((otherItem) => {
                if (otherItem !== item && otherItem.classList.contains("active")) {
                    otherItem.classList.remove("active");
                    const otherContent = otherItem.querySelector(".faq-content");
                    const otherButton = otherItem.querySelector(".faq-btn");
                    const otherOpenIcon = otherButton.querySelector(".faq-btn-open");
                    const otherCloseIcon = otherButton.querySelector(".faq-btn-close");

                    otherContent.style.maxHeight = "0";
                    otherContent.style.opacity = "0";
                    otherContent.style.overflow = "hidden";
                    otherOpenIcon.style.display = "none";
                    otherCloseIcon.style.display = "block";
                }
            });

            // Перемикання поточного елемента
            const isActive = item.classList.contains("active");

            if (isActive) {
                item.classList.remove("active");
                content.style.maxHeight = "0";
                content.style.opacity = "0";
                content.style.overflow = "hidden";
                openIcon.style.display = "block";
                closeIcon.style.display = "none";
            } else {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.opacity = "1";
                openIcon.style.display = "none";
                closeIcon.style.display = "block";
            }
        });
    });

    // Відкриття першого елемента за замовчуванням
    const firstItem = faqItems[0];
    if (firstItem) {
        const firstContent = firstItem.querySelector(".faq-content");
        const firstButton = firstItem.querySelector(".faq-btn");
        const firstOpenIcon = firstButton.querySelector(".faq-btn-open");
        const firstCloseIcon = firstButton.querySelector(".faq-btn-close");

        firstItem.classList.add("active");
        firstContent.style.maxHeight = firstContent.scrollHeight + "px";
        firstContent.style.opacity = "1";
        firstOpenIcon.style.display = "block";
        firstCloseIcon.style.display = "none";
    }
});
