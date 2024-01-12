const notifier = document.querySelector('#notifier');

(async () => {
    const result = await Notification.requestPermission()

    console.log(result)
})()

notifier.addEventListener('click', event => {

    const notification = new Notification('minha notificacao', {
        body: 'Aqui é o body da minha notificacao',
        icon: 'images/icon_notification.png',
        image: 'images/icon_notification.png',
        tag: 'notification tag'
    })
    console.log('click', notification)

})
