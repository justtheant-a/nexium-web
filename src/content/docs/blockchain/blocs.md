---
title: La structure des blocs
description: Architecture des blocs.
order: 2
---

# Structure des blocs

## Bloc (*variable*)
- `bloc_header` (*82 octets*)
    - En-tête du bloc.
- `transactions` (*de 330 à (2048\*`transaction_count`)*)
    - Liste des transactions concaténées.

### `bloc_header` (*82 octets*)
- `version`(*2 octets*)
    - Version du protocole adoptée (**ex: `1`**).
- `previous_block_hash` (*32 octets*)
    - Hash (= **identifiant unique**) du bloc précédant.
- `merkle_root` (*32 octets*)
    - Hash racine de l'**arbre de Merkel**.
- `timestamp` (*4 octets*)
    - **Unix Timestamp** (secondes depuis le 01/01/1970) de la création du bloc.
- `difficulty_target` (*4 octets*)
    - Nombres de zéros nécessaires au début du hash pour que le **nonce** soit valide.
- `nonce` (*4 octets*)
    - Valeur trouvée par le mineur qui remplit les conditions de **difficulty_target**.
- `transactions_size` (*4 octets*)
    - Taille totale des transactions.

---

## Tailles théoriques de blocs

Les tailles pour un **bloc de n transactions** seraient donc :
- *transactions sans description* : `82 + n*398` octets.
- *transactions avec description* : `82 + n*654` octets.

Ces tailles de blocs partent du principe que les transactions contenues dans ledit bloc sont toutes **avec** ou **sans** description. 

Cette approche n'est pas réaliste, mais permet d'encadrer la taille d'un bloc de **n** transactions.

Par exemple, **pour un bloc de 1000 transactions** :
- *transactions sans description* : `82 + 1000*398` = **398082** octets.
- *transactions avec description* : `82 + 1000*654` = **654082** octets.

**Donc,** la taille d'un bloc contenant 1000 transactions est comprise **entre environ 398 Ko et 654 Ko**. 

En supposant la taille du `bloc_header` (**80 octets**) négligeable devant la taille des transactions, on peut considérer la taille d'un bloc *proportionnelle* à son nombre de transactions : `10 fois moins de transactions <=> bloc 10 fois moins gros`.