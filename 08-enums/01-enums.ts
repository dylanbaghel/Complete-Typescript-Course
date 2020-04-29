/**
 * Enums:
 *
 */

enum Role {
    ADMIN,
    AUTHOR,
    READER,
}

const user = {
    name: 'some name',
    role: Role.AUTHOR,
};

if (user.role === Role.ADMIN) {
    console.log('Admin Here');
} else if (user.role === Role.AUTHOR) {
    console.log('Author Here');
} else if (user.role === Role.READER) {
    console.log('Reader Here');
}
