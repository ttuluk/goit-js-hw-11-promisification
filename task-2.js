const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    const users = allUsers.map(user => {
    return new Promise(resolve => {
    const time = 2000;

    setTimeout(() => {
        resolve({ name, active });
    }, time);
//     const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );
});
})
}

const logger = updatedUsers => console.table(updatedUsers);
toggleUserState(users, 'Mango').then(logger);
/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
