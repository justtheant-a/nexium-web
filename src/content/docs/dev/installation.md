---
title: Compilation/Installation
description: Structure API.
order: 9
---
:::caution[Attention]
Important : la version de Tauri utilisée est la V2
:::
### Dépendances

-   Installer NodeJS (Version LTS): voir https://nodejs.org/
-   Installer les dépendances Tauri : voir https://v2.tauri.app/fr/start/prerequisites/
-   Installer tauri-cli pour cargo: `cargo install tauri-cli --version "2.0.0" --locked`

### Compilation
---
En fonction de ce que vous souhaitez, il ne reste plus qu'a éxecuter une de ces commandes.
#### Application client
---
##### Pour MacOS

`cargo tauri bundle --bundles app`

##### Pour Linux (AppImage) et Windows

`cargo tauri buid`

#### Créer un serveur
---
`cargo build --bin nexium-server`

