---
title: Pourquoi utilisé GitLab ?
description: Connexion avec GitLab
order: 9
---

-   Dans le réseau Nexium, l’instance GitLab d’EPITA joue le rôle d’**autorité d’authentification**. Elle nous permet de confirmer l’identité des utilisateurs dans une structure déjà existante et fiable,  utilisée par tous les membres de l’école. Chaque utilisateur Nexium est ainsi automatiquement lié à son login GitLab (`prenom.nom`), garantissant que seul un membre d’EPITA puisse avoir accés à Nexium.

-   GitLab a une API qui nous permet de récupérer les clés publiques GPG associés à chaque compte utilisateur. Avec cette API, nous pouvons associer de manière simple et sécurisée chaque identité Nexium grâce à une clé de signature cryptographique. Ce qui permet la vérification de l'origine des transactions et des blocs dans le réseau.

-   Malgré l'utilisation de GitLab, Nexium reste complétement souverain, l'entiéreté de la blockchain est basée sur la cryptographie et les Logins. En effet, dans le cas contraire pour changer d'instance Gitlab reviendrai simplementà changer une ligne de code dans les constantes du repo, ce qui deviendrai problématique. 

-   En outre, utiliser l'instance Gitlab d'Epita nous permet de garantir l'exclusivité de Nexium aux membres de l'école.