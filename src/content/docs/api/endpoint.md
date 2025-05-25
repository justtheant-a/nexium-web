---
title: Endpoint
description: Structure API.
order: 6
---


## nexium
---
-   Permet de vérifier que le serveur concerné est bien un serveur Nexium, et de récupérer les informations de ce serveur.
-   Type:**Get**
-   Endpoint:`/nexium`
-   **Réponse:**
    -  ```json
       {
       "login": <login>,
       "sigSample": <sigsample>
       }
       ```
-   Ici, le `login` est celui de l'utilisateur à qui appartient le serveur.
-   `sigSample` a la même utilité que celui du Header: il permet au client d'identifier quelle clé publique est utilisée par le serveur.

## balance
---
-   Renvoie le solde actuel à un utilisateur.
-   Type: **GET**
-   Endpoint: `/balance/<login>`
- **Réponse:**
    - ```json
      {
      "balance": <balance>,
      "noise": <noise>
      }
      ```
-   `noise` est une **chaîne de caractères de longueur 8, générée aléatoirement par le serveur.**
-   Elle permet d'empêcher l'attaque par brute-force : il n'est pas possible de tester des valeurs de solde dans un certain champ, car le déchiffrement nécessiterait de connaître aussi le noise, non déterministe.


## transactions

-   Récupère les `n` dernières transactions d'un utilisateur.
-   Type **GET**
-   Endpoint: `/transactions/<login>?n=<n>`
-   `n`: nombre des dernières transactions à récupérer
-   **Réponse:**
    - ```json
      {
      "transactions": [
        <transaction_1>,
        <...>,
        <transaction_n>
       ]
      }
      ```
-   (Pour la structure d'une **transaction**, voir plus bas)

## new_transaction
---
-   Publie une nouvelle transaction pour l'ajout à la blockchain
-   Type: **POST**
-   Endpoint: `/new_transaction`
-   **Body:**
    - ```json
      {
      <transaction>
      }
      ```
-   (Pour la structure d'une **transaction**, voir plus bas)