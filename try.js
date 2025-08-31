import bcrypt from 'bcrypt'


const hash = bcrypt.hashSync('password',10);

const result = bcrypt.compareSync('password','$2b$10$vuRAJQYijKN8gjOffxyiOejFADcHdgkC1OdU287l0xbUk3/QPHVhi')

