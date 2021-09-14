const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },

];
const TIME = 1000;

const toggleUserState = (allUsers, userName) => {
  const users = allUsers.map(user => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.name === userName) {
        resolve({ ...user, active: !user.active });
        };
       resolve(user); }, TIME);
      });
    })
    return Promise.all(users);
  }

const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);

