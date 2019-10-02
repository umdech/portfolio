import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Work } from './work';

export class FakeDbService implements InMemoryDbService {
    createDb(): any {
        return {
            'work': Work.works
        }
    }
}