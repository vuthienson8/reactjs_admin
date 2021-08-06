import AddUser from "./views/components/users/AddUser"
import ListUser from "./views/components/users/ListUser"

const routers = [
    {
        name: "Overview",
        path: "/overview",
        component: <h3>Overview</h3>
    },
    {
        name: "Users",
        path:"/users",
        children: [
            {
                name: "Add user",
                path: "/users/add",
                component: <AddUser />
            },
            {
                name: "List user",
                path: "/users/list",
                component: <ListUser />
            }
        ]
    }
]

export default routers