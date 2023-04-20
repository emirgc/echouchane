---
author: Emir Chouchane
pubDatetime: 2023-04-19
title: 003 - WebP, pour un web plus léger
postSlug: webp-pour-un-web-plus-leger
featured: true
draft: false
tags:
  - WebP
  - Optimisation
ogImage: ""
description: ""
---

- Avec l'augmentation de la vitesse de connexion, [le poids du web ne cesse de croître](https://almanac.httparchive.org/en/2021/page-weight).

- Le Web doit être accessible afin de [fournir un accès et des opportunités égales aux personnes ayant des capacités diverses](https://www.w3.org/standards/webdesign/accessibility). L'accessibilité du Web concerne également les utilisateurs confrontés à diverses contraintes lors de l'accès au contenu en ligne, comme des appareils peu performants, une connexion Internet à faible débit et une bande passante limitée.

- Les images représentent le principal élément alourdissant les pages web. C'est là qu'intervient le format WebP, une alternative aux formats JPEG et PNG. Il propose une compression plus importante pour une qualité quasi équivalente et une taille réduite. WebP réduit en moyenne la taille des fichiers de 25 à 34 %, tout en maintenant une qualité d'image proche.

- Le format WebP offre des avantages tels que la prise en charge de la transparence, comme le PNG, et des animations, comme le format GIF.

- WebP utilise deux méthodes de compression : la compression sans perte (lossless) pour les images avec transparence et la compression avec perte (lossy) pour les images sans transparence.

- Le format WebP est [compatible avec les navigateurs populaires](https://caniuse.com/webp).

- L'utilisation de WebP améliore l'expérience utilisateur en proposant un site plus rapide, ce qui optimise également le référencement. De plus, en réduisant la bande passante nécessaire, moins d'énergie est gaspillée.

- Le format WebP contribue à améliorer la métrique Largest Contentful Paint (LCP), qui est un indicateur clé de la performance d'une page web. LCP mesure le temps nécessaire pour afficher le plus grand élément visible à l'écran (généralement une image ou un bloc de texte) lors du chargement initial de la page. Une valeur LCP inférieure indique que les utilisateurs voient le contenu essentiel plus rapidement, ce qui améliore l'expérience utilisateur globale.

- L'économie d'espace de stockage est un autre avantage. Ce point peut être négligé pour un site comportant quelques pages, mais il est clairement à prendre en compte pour des structures plus importantes avec des milliers de pages.

- WebP est conçu par Google et est un projet open-source (https://www.webmproject.org/license/additional/). Au moment de la rédaction de cette note, le projet est activement maintenu (https://chromium.googlesource.com/webm/libwebp/).

- WebP est un format principalement conçu pour le web.

## Comment convertir en WebP

### Solution en ligne de commande avec cwebp
#### Sur Windows
1. Rendez-vous sur [le site officiel du projet WebP](https://developers.google.com/speed/webp/download).
2. Téléchargez le fichier "libwebp-xxx-windows-x64.zip" (remplacez "xxx" par la version actuelle).
3. Extrayez le fichier ZIP dans un dossier de votre choix.
4. Ajoutez le chemin du dossier extrait à la variable d'environnement "Path" de votre système.

#### Sur macOS (en utilisant Homebrew)
1. Si vous n'avez pas Homebrew installé, vous pouvez le faire en suivant les instructions sur le site officiel (https://brew.sh).
2. Ouvrez le terminal et tapez la commande suivante :
```bash
brew install webp
```

#### Sur Linux (Debian/Ubuntu)
Ouvrez le terminal et tapez la commande suivante :
```bash
sudo apt-get install webp
```
### Utilisation de l'outil
La syntaxe de base pour utiliser cwebp est la suivante :

```bash
cwebp [options] input_image -o output_image.webp
```
**input_image** : le fichier image d'origine (JPEG, PNG, etc.).
**output_image.webp** : le nom du fichier WebP de sortie.
**[options]** : les options de conversion, telles que la qualité, la méthode de compression, etc.

Pour convertir une image JPEG en WebP avec une qualité de 80% :
```bash
cwebp -q 80 input_image.jpg -o output_image.webp
```

et tout les fichiers dans le dossier images :
```bash
for file in images/*; do cwebp -q 80 "$file" -o "${file%.*}.webp"; done
```

Voici quelques options courantes pour personnaliser la conversion :

**-q** : définit la qualité de l'image WebP (0 à 100). Une valeur plus élevée donne une qualité d'image plus élevée et une taille de fichier plus importante. Par exemple, -q 80 définit une qualité de 80%.

**-m** : sélectionne la méthode de compression (0 à 6). Une valeur plus élevée offre une meilleure compression, mais nécessite plus de temps pour la conversion. Par exemple, -m 6 utilise la méthode de compression la plus lente et la plus efficace.

**-lossless** : convertit l'image en mode sans perte. Utilisez cette option pour conserver la qualité d'image d'origine.

**-z** : active le mode "sans pertes" avec une compression optimale. Cela prendra plus de temps pour la conversion, mais réduira davantage la taille du fichier.

**-resize** : redimensionne l'image avant la conversion. Par exemple, -resize 800 600 redimensionne l'image à 800x600 pixels.

Pour plus d'options et de détails, consultez [la documentation officielle de cwebp](https://developers.google.com/speed/webp/docs/cwebp).

### Solution via des plugins pour les CMS
- TYPO3 : https://extensions.typo3.org/extension/webp
- WordPress : https://wordpress.org/plugins/webp-converter-for-media/

### Solution pour les SSG
- Astro : https://docs.astro.build/en/guides/images/
- Hugo : https://gohugo.io/content-management/image-processing/#target-format
- Eleventy : https://www.11ty.dev/docs/plugins/image/ https://www.aleksandrhovhannisyan.com/blog/eleventy-image-plugin/

### Solution logicielle
Compatible avec Photoshop 23.2 (depuis début 2022)

### Futurs développements
Les formats [AVIF](https://web.dev/learn/images/avif/) et [JPEG XL](https://jpegxl.info/) sont en développement, ainsi que [WebP 2](https://chromium.googlesource.com/codecs/libwebp2/).