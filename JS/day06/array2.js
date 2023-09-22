const menus = [
    {
        title: "Item list",
        isToggled: false
    },
    {
        title: "Customer list",
        isToggled: true,
    },
    {
        title: "Payment",
        isToggled: false,
    }
]

const everyToggledMenus = menus.every((menu) => menu.isToggled)
console.log(everyToggledMenus) // false

const someToggledMenus = menus.some((menu) => menu.isToggled)
console.log(someToggledMenus) // true