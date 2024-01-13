import { Notifier } from "./Notifier.js";

const notifier = document.querySelector('#notifier');

const notificationContent = [
    { title: 'Runa Forjada', body: 'Sua runa comun foi criada' },
    { title: 'Expedição gold concluída', body: 'Expedição finalizada! pegue seus prêmios' },
]

const Not = new Notifier()

notifier.addEventListener('click', () => {
    let delay = 0
    for (const { body, title } of notificationContent) {

        setTimeout(() => Not.notify(title, body), 5000 * delay++)
    }

})
