const user = { id:1 };

user.name = 'Nicolas';
user.guardar = function() {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

//const user1 = Object.freeze({ id: 1}); // No se puede modificar el objeto
const user1 = Object.seal({ id: 1}); // Solo puede modificar el valor de la propiedad que ya existe
user1.name = 'Nico';
user1.id = 2;
console.log(user1);