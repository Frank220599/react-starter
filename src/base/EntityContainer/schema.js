import {schema} from 'normalizr';

const EntitySchema = (entityName, idAttribute = 'id') => {
    return new schema.Entity(entityName,undefined,{idAttribute});
};

export default EntitySchema
