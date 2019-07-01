interface CastingData {
    key?: string;
    bimod: number;
    bottom: number;
    description: String;
    name: string;
    legitmod: number;
    cumod: number;
    light: number;
    dark: number;
    neutral: number;
    random: number;
    exotic: number;
    table: string;
    top: number;
    solmod: number;
    linktable: Array<string>;
    linkmultiple: Array<number>;
    linkmod: Array<number>;
    linkroll: Array<number>;
    multiplemod: Array<number>;
    multiplernd: boolean;
    landholdings: string;
    landtitles: string;
    size: string;
    timod: string;
}

export class Casting implements CastingData {
    key = null;
    bottom = 1;
    bimod = 0;
    description = '';
    name = '';
    cumod = 0;
    light = 0;
    dark = 0;
    legitmod = 0;
    neutral = 0;
    random = 0;
    exotic = 0;
    table = '';
    top = 20;
    solmod = 0;
    linktable = [];
    linkmultiple = [];
    linkmod = [];
    linkroll = [];
    multiplemod = [];
    multiplernd = false;
    landholdings = '';
    landtitles = '';
    size = '';
    timod = '';
    constructor() {}
}
