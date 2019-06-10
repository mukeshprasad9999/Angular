import { Injectable } from '@angular/core';

@Injectable()
export class GlobalConfig {
    apiAddress : string;
    constructor()
    {
        this.apiAddress = 'http://localhost:57102';
    }
}