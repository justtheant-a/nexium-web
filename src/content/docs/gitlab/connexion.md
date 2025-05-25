---
title: Authentification GitLab
description: Connexion avec GitLab
order: 10
---
Il existe deux manières de se connecter avec GitLab :

#### Grâce au Token
---
- Créé manuellement par l'utilisateur dans les paramètres Gitlab.

- Durée de validité indéfinie, laissée à l'utilisateur.

- Peut donc être persistent

#### Avec OAuth
---
- Simple clic sur un bouton

- L'appplication Nexium ouvre une fenêtre de navigateur, sur laquelle l'utilisateur est loggé sur son compte Gitlab et doit cliquer sur le bouton "autoriser l'application". 

- Une fois l'application autorisée, la page web se ferme et l'application Nexium est alors connectée.

- La durée de validité du token OAuth est de deux heures. Passé ce délai, l'utilisateur doit se ré-authentifier.