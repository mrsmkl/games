const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const src=fs.readFileSync(fs.existsSync(__dirname+'/dist/game.js')?__dirname+'/dist/game.js':__dirname+'/game.js','utf8');
const data=src.slice(src.indexOf('const cast='),src.indexOf('let state='));
const restore=src.slice(src.indexOf('function restore()'),src.indexOf('function track('));
let raw;const context=vm.createContext({localStorage:{getItem:()=>raw}});
vm.runInContext("const KEY='test';"+data+restore,context);
const valid={mode:'cross',stage:3,statement:0,hp:5,found:['mic','alibi','photo','log'],dialogue:[],history:[]};
function run(x){raw=JSON.stringify(x);return vm.runInContext('restore()',context)}
assert.equal(run(valid).stage,3);
assert.equal(run({...valid,hp:0}).hp,5);
assert.equal(run({...valid,hp:-2}).hp,5);
assert.equal(run({...valid,statement:99}).statement,0);
assert.equal(run({...valid,found:['mic','mic','bad']}).found.join(','),'mic');
assert.equal(run({...valid,mode:'dialogue',cursor:99,after:'cross'}),null);
assert.equal(run({...valid,stage:99}),null);
raw='{broken';assert.equal(vm.runInContext('restore()',context),null);
assert.equal(vm.runInContext('trials[3].proof',context),'report');
console.log('Passed: save recovery, invalid state rejection, final evidence consistency.');
