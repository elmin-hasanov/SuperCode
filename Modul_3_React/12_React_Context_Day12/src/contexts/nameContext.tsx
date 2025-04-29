import { createContext } from 'react';

// * argument an createContext ist ein Defaultwert, der nur gelesen wird, falls kein Provider
// * verfuegbar ist
export const nameContext = createContext('Schleiereule');
