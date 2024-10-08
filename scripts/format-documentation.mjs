import fs from 'fs';
import path from 'path';

const processDir = process.cwd ? process.cwd() : process.env.PWD;
const docsDir = path.join( processDir , 'docs'); // Chemin vers le dossier où sont générés les fichiers .md

// Fonction pour transformer le lien selon ta logique
function transformLink(link) {

  console.log({ link })

  // Extraire la partie du lien après le dernier '/'
  let fileRelativePathSplit = String(link).split('/').pop().split('.');
  
  // Récupérer la partie relative du fichier sans l'extension
  let fileRelativePath = fileRelativePathSplit.slice(1, fileRelativePathSplit.length - 2);
  
  // Récupérer le nom du fichier (sans extension)
  let fileBasename = fileRelativePathSplit.slice(fileRelativePathSplit.length - 2, fileRelativePathSplit.length - 1);
  
  // Recomposer le nouveau lien
  let newLink = path.join( ...fileBasename);
  
  return String(`./${newLink}`).toLowerCase();
}

// Fonction principale pour remplacer les liens dans le fichier
function replaceLinksInMarkdown(filePath) {
  // Lire le contenu du fichier
  let markdownContent = fs.readFileSync(filePath, 'utf8');

  // Regex pour capturer les liens Markdown : ![alt text](link) ou [link](link)
  const linkRegex = /\[.*?\]\((.*?)\)/g;

  // Remplacer tous les liens dans le fichier
  const updatedContent = markdownContent.replace(linkRegex, (match, p1) => {
      let newLink = transformLink(p1);
      console.log(`change link ${p1} to ${newLink}`);
      return match.replace(p1, newLink);
  });

  // Écrire le contenu modifié dans le même fichier ou un nouveau fichier
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log('Liens remplacés avec succès !');
}

// Fonction pour supprimer les 4 premières lignes de chaque fichier
function removeFirstFourLines(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Découper le contenu en lignes
  const fileLines = fileContent.split('\n');
  
  // Garder seulement les lignes à partir de la 5ème
  const newContent = fileLines.slice(4).join('\n');

  // Écrire le nouveau contenu sans les 4 premières lignes
  fs.writeFileSync(filePath, newContent, 'utf8');
}

// Itérer à travers tous les fichiers .md dans le dossier
function cleanMarkdownFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      cleanMarkdownFiles(filePath); // Si c'est un dossier, récursive
    } else if (filePath.endsWith('.md')) {
      removeFirstFourLines(filePath); // Supprimer les 4 premières lignes des fichiers .md
    }
  });
}

function reformFilePlace( filePath ){

  function recursiveFolderCreation( paths ){

    let dirPath = '';
    paths.forEach(( p ) => {
      dirPath = path.join( dirPath , p );
      if(!fs.existsSync( dirPath ))fs.mkdirSync( dirPath );
    });

  }

  let dirPaths = filePath.replace( processDir , '' ).split('/').filter( x => x );
  let fullFileRelativePath = dirPaths.pop();
  let fileRelativePathSplit = fullFileRelativePath.split('.');
  let fileRelativePath = fileRelativePathSplit.slice( 0 , fileRelativePathSplit.length - 2 );

  let fileName = fileRelativePathSplit.slice( fileRelativePathSplit.length - 2 , fileRelativePathSplit.length ).join('.');

  let [fileParenFolder] = fileRelativePath.slice( fileRelativePath.length -1 , fileRelativePath.length  )
  let [fileBaseName] = fileRelativePathSplit.slice( fileRelativePathSplit.length - 2 , fileRelativePathSplit.length - 1 );

  recursiveFolderCreation( [ ...dirPaths , ...fileRelativePath  ] );

  replaceLinksInMarkdown( filePath );

  if( fs.existsSync( path.join( processDir , ...dirPaths , ...fileRelativePath , fileBaseName ) ) ){
    let oldPath = filePath;
    let newPath = path.join( processDir , ...dirPaths , ...fileRelativePath , fileBaseName , fileName );
    fs.renameSync( oldPath , newPath );
  }
  else fs.renameSync( filePath , path.join( processDir , ...dirPaths , ...fileRelativePath , fileName ) );
  

}

function reformHierarchy( dir ){

  let files = fs.readdirSync(dir);

  files.forEach(( file ) => {
    reformFilePlace( path.join( dir , file ) )
  })

}

(async function main(){

  // Appel à la fonction principale
  cleanMarkdownFiles(docsDir);
  reformHierarchy( docsDir );

})()
