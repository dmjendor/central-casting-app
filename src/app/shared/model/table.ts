interface TableData {
    key?: string;
    name: string;
    top: number;
    mod: string;
}

export class Table implements TableData {
    key = null;
    name = '';
    top = 10;
    mod = '';
    constructor() {}
}
