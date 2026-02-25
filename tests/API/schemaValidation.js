const{test, expect, request} = require('@playwright/test');
import Ajv from 'ajv';
import patientData from '../fixtures/patientData.json';

test('patient schema validation ', ()=>{

    const ajv = new Ajv();
    const validate  = ajv.compile(patientData);
    const valid = validate(patientData);
    console.log(valid)
    expect(valid).toBe(true);

})