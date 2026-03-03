import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

console.log('[v0] Cleaning up node_modules and lock files...');

try {
  // Remove node_modules
  const nodeModulesPath = path.join(projectRoot, 'node_modules');
  if (fs.existsSync(nodeModulesPath)) {
    console.log('[v0] Removing node_modules...');
    fs.rmSync(nodeModulesPath, { recursive: true, force: true });
  }

  // Remove lock files
  const lockFiles = ['package-lock.json', 'yarn.lock', 'pnpm-lock.yaml'];
  lockFiles.forEach(file => {
    const filePath = path.join(projectRoot, file);
    if (fs.existsSync(filePath)) {
      console.log(`[v0] Removing ${file}...`);
      fs.unlinkSync(filePath);
    }
  });

  console.log('[v0] Running npm install...');
  execSync('npm install', { stdio: 'inherit', cwd: projectRoot });

  console.log('[v0] Clean install completed!');
} catch (error) {
  console.error('[v0] Error during cleanup:', error.message);
  process.exit(1);
}
