interface AppUserData {
    key?: string;
    name: string;
    email: string;
    role: string;
    theme: string;
}

export class AppUser implements AppUserData {
    key = null;
    name = '';
    email = '';
    role = 'user';
    theme = '-LVdBangNq0NFiPl3AMi';
    constructor() {}
}
