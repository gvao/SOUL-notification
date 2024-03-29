class Notifier {
    icon
    image
    notifications = []
    
    constructor() {
        this.icon = 'images/icon_notification.png'
        this.image = 'images/icon_notification.png'
        this.getPermissions()
    }
    
    async getPermissions(){
        this.permission = await Notification.requestPermission()
            .finally(() => console.log(`required permissions`))
    }

    notify(title, body) {
        console.log('notify', title, body)
        if(!this.permission) return
        const icon = this.icon
        const image = this.image

        const notification = new Notification(title, { body, icon, image })
        this.notifications.push(notification)
    }
}

export { Notifier }