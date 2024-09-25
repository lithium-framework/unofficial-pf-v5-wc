const fs = require('fs');
const path = require('path');

const docsDir = path.join(process.cwd ? process.cwd() : process.env.PWD, 'docs'); // Chemin vers le dossier où sont générés les fichiers .md

// Fonction pour supprimer les 4 premières lignes de chaque fichier
function removeFirstFourLines(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Découper le contenu en lignes
  const fileLines = fileContent.split('\n');
  
  // Garder seulement les lignes à partir de la 5ème
  const newContent = fileLines.slice(4).join('\n');

  // Écrire le nouveau contenu sans les 4 premières lignes
  fs.writeFileSync(filePath, newContent, 'utf8');

  console.log(`Les 4 premières lignes ont été supprimées de ${filePath}`);
}

// Itérer à travers tous les fichiers .md dans le dossier
function processMarkdownFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      processMarkdownFiles(filePath); // Si c'est un dossier, récursive
    } else if (filePath.endsWith('.md')) {
      removeFirstFourLines(filePath); // Supprimer les 4 premières lignes des fichiers .md
    }
  });
}

// Appel à la fonction principale
processMarkdownFiles(docsDir);
