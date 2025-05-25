---
title: Header
description: Structure API.
order: 5
---

Toutes les réponses sont sous  forme de JSON intégralement chiffré
-   `réponse = chiffrement(json(données))`
-   Le Json est chiffré par le serveur avec la clé publique associée au login du client, contenu dans le header.
-   **N.B:** Le login est au format `prénom.nom`
-   Tout le contenu du **lobby** des requêtes **POST** est chiffré par le client avec la clé publique du serveur.

## Header
---
Toutes les requêtes doivent utiliser la structure suivante pour leur Header :
>```plaintext
>Login: <login>
>Sig-Sample: <sigsample>
>Content-Type: text/plain
>```
-   `Sig-Sample`, pour (_Signature Sample_), est la signature de l'utilisateur de la chaîne de caractère `"NEXIUMREQ"`.
-   `Sig-Sample = sig("NEXIUMREQ")`
-   Ce `Sig-Sample` permet au serveur d'identifier quelle clé l'utilisateur utilise, dans le cas où il en aurait plusieurs sur son compte GitLab. Le serveur vérifie la signature de la chaîne "NEXIUMREQ" avec chaque clé publique associée au compte GitLab du login, jusqu'à trouver la bonne clé.
-   `Sig-Sample` permet aussi de limiter les requêtes de type _spam_. La validité implique l'authentification de l'utilisateur. Ainsi, le serveur rejette une requête à signature non valide avant même de la traiter.

