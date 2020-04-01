import { Observable } from 'rxjs';
import { ReturnJsonArrayService } from '../return-json-array.service';
import { Data } from '../data';
export declare class LoadPortletsComponent {
    private service;
    data: Observable<Data>;
    configFile: String;
    constructor(service: ReturnJsonArrayService);
    loadScript(url: any): void;
    ngOnInit(): void;
    loadJQuery(): void;
    loadFile(configFile: any): void;
}
