function helpful() {
    console.log('This is helpful');
}

function sort() {
    console.log('All sorted!');
}

function sing() {
    console.log('Singing in the rain!');
}

// Want to leave off '()' as that will exe the func vs exporting it
// 'export default' means when this whole file is required, the default thing that will be exported is the func 'helpful()' 
/* export default helpful; */

// In another file in 'src', use the below syntax to import 'helpful()'
/* import anyName from './ModulesDemo'; */


// When you want to export multiple items, use the below syntax
/* export { helpful, sort, sing }; */

// In another file in 'src', use the below syntax to import
// The name now matters as CRA can't find it otherwise
/* import { helpful, sort, sing } from './ModulesDemo'; */

// Can combine both 'export default' & 'export' like below
export default helpful;
export { sort, sing };

// In another file in 'src', use the below syntax to import
/* import anyName, { sort, sing } from './ModulesDemo'; */