interface CharacterData {
    key?: string;
    bimod: number;
    description: String;
    name: string;
    sex: string;
    race: string;
    legitmod: number;
    cumod: number;
    light: number;
    dark: number;
    neutral: number;
    random: number;
    exotic: number;
    solmod: number;
    landholdings: string;
    landtitles: string;
    size: string;
    timod: number;
}

export class Character implements CharacterData {
    key = null;
    bimod = 0;
    description = '';
    name = '';
    race = '';
    sex = '';
    cumod = 0;
    light = 0;
    dark = 0;
    legitmod = 0;
    neutral = 0;
    random = 0;
    exotic = 0;
    solmod = 0;
    landholdings = '';
    landtitles = '';
    size = '';
    timod = 0;
    constructor() {}
}
