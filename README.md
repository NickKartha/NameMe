# NameMe
![](https://support.99designs.com/hc/article_attachments/202090585/40748420150407-3-lcibt5)  
A utility to help nameless mascots and designs get a proper name.

## What is the code doing?
Currently, it is generating indices from a byte pattern. The number of unique possible names here is a 32bit number (`Uint32`)
Ideally, you don't want names to overlap, so using random isn't the best of ideas, its better to try and encode the problem as some predictable thing. 

## What is left to do?
Ideally, we want to add some random sequencing over this linear sequence. We don't want to be holding on keys for every possible 32bit number. One thing we want to do is use math functions `(id % N, Math.floor(id / N))` to generate the string like so:
https://github.com/dexo568/gfycat-style-urls/blob/master/index.js

## Why TypeScript?
TS is pretty good at managing large JS codebases, its good at validating that a change in one part of the codebase hasn't broken some other part (due to the type system) and a lot of the tooling around it is really good (global name refactoring and such)

## How to Run?

The dependencies are as typical for any typescript project.

### Pre-requisite Setup
Well, you obviously need the [node package manager](https://www.npmjs.com/).
```
sudo apt-get install npm
```
Then fetch [ts-node](https://github.com/TypeStrong/ts-node) and [typescript](https://www.typescriptlang.org/):
```
# Locally in your project.
npm install -D ts-node
npm install -D typescript

# Or globally with TypeScript.
npm install -g ts-node
npm install -g typescript
```
### Running the script
```
# Execute a script as `node` + `tsc`.
ts-node script.ts
```
