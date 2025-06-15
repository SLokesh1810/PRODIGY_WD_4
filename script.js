let typed = false;

function typeWriterText() {
    const txt = `Passionate about Data science, Machine Learning, Web & Native app Development and Design. A tech enthusiast with strong problem-solving skills, eager to learn and innovate. Recognized as a good listener, observer and motivator. Actively seeking internships and workshops to enhance skills and stay updated with industry trends.`;
    const textCon = document.getElementById('aboutMeText');
    if (!textCon) return;

    let i = 0;
    const speed = 4;

    function writeTxt() {
        if (i < txt.length) {
            textCon.textContent += txt.charAt(i);
            i++;
            setTimeout(writeTxt, speed);
        }
    }

    writeTxt();
}

window.addEventListener('scroll', function () {
    const aboutSection = document.getElementById('aboutMeText');
    if (!aboutSection || typed) return;

    const sectionTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
        typeWriterText();
        typed = true;
    }
});
typeWriterText();

window.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.getElementById('aboutMeText');
    if (!aboutSection) return;

    const sectionTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100 && !typed) {
        typeWriterText();
        typed = true;
    }
});

const scrollObserverSkills = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skills = entry.target.querySelectorAll('.skills');
            skills.forEach(skill => {
                skill.style.animationPlayState = 'running';
            });

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

const skillsSection = document.querySelector('.skillsImgs');
if (skillsSection) {
    scrollObserverSkills.observe(skillsSection);
}

const projectContainers = document.querySelectorAll('.projectContainer');

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const container = entry.target;

            const img = container.querySelector('.projectImgs');
            const desc = container.querySelector('.projectDesc');

            if (img) {
                img.style.animationPlayState = 'running';
                img.style.opacity = 1;
            }
            if (desc) {
                desc.style.animationPlayState = 'running';
                desc.style.opacity = 1;
            }

            observer.unobserve(container);
        }
    });
}, {
    threshold: 0.2
});

projectContainers.forEach(container => {
    scrollObserver.observe(container);
});

function openSite(link){
    window.open(link);
}
