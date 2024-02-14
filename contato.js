const contactForm = document.getElementById(`contact-form`);
const contactMessage = document.getElementById(`contact__message`);

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gy4fiu8', 'template_cnyieea', '#contact-form', 'PxA_BTBd2fAEEQ8q_')
        .then(() => {
            contactMessage.textContent = 'Mensagem enviada com sucesso ✅';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            contactForm.reset();
        })
        .catch(() => {
            contactMessage.textContent = 'Mensagem não enviada ❌';
        });
};

contactForm.addEventListener('submit', sendEmail);
