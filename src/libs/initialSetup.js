import Role from "../models/Role"

export const createRoles = async ()=>{
    try {
        const count = await Role.estimatedDocumentCount();
        if (count > 0) return;
        const values = Promise.all([
            new Role({name: "ADMIN"}).save(),
            new Role({name: "GUEST"}).save(),
            new Role({name: "USER"}).save()
        ]);
        console.log(values);
        
    } catch (error) {
        console.log(error)
    };
}