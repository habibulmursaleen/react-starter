#!/usr/bin/env node
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { execSync } from "child_process";

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" }); // Fix the execSync call and stdio option
    return true;
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/habibulmursaleen/vite-react-ts-starter ${repoName}`; // Fixed template string
const installDepsCommand = `cd ${repoName} && npm install`; // Fixed template string

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) {
  process.exit(-1); // Use -1 as an exit code
}

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);

if (!installedDeps) {
  process.exit(-1); // Use -1 as an exit code
}

console.log(
  "Congratulations! You are ready. Follow the following commands to start",
);
console.log(`cd ${repoName} && npm run dev`);
