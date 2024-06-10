<template>
    <section id="contact" class="section contact-section fade-in">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-three-quarters-tablet is-half-desktop">
                    <div>
                        <h2 class="title has-text-white mt-2 mb-3">Kontakt</h2>
                    </div>
                    
                    <form method="POST" action="https://herotofu.com/0eaeaab0-2711-11ef-af42-79d7585798b6" class="box p-4">
                        <div class="field">
                            <label class="label has-text-white">Przedstaw się</label>
                            <div class="control">
                                <input
                                    name="name"
                                    type="text"
                                    class="input"
                                    placeholder="Imię i nazwisko"
                                />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label has-text-white">Adres Email</label>
                            <div class="control">
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    class="input"
                                    placeholder="Twój adres email"
                                />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label has-text-white">Wiadomość</label>
                            <div class="control">
                                <textarea
                                    name="message"
                                    class="textarea"
                                    rows="3"
                                    placeholder="Napisz i wyślij"
                                ></textarea>
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <button type="submit" class="button is-link is-fullwidth-mobile">Wyślij wiadomość</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContactSection'
}
</script>

<style scoped>
.fade-in {
    opacity: 0;
    animation: fadeInAnimation 1s ease-in-out forwards;
}

@keyframes fadeInAnimation {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.contact-section {
    padding: 3rem 0;
}

.contact-section .box {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.contact-section .button.is-link {
    background-color: #3273dc;
}

.contact-section .button.is-link:hover {
    background-color: #276cda;
}

.contact-section .field:not(:last-child) {
    margin-bottom: 1.5rem;
}

@media screen and (max-width: 768px) {
    .contact-section .box {
        padding: 15px;
    }
}
</style>
