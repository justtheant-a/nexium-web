---
title: Structure d'un transaction
description: Struture transaction
order: 7
---


## Structure d'une transaction

---

-   Une transaction est convertie au format **JSON** dans les paquets.

-   ```json
    {
        "transaction_header": {
            "transaction_size": <size>,
            "timestamp": <timestamp>,
            "fees": <fees>,
            "emitter": <login>,
            "data_type": <data_type>
        },
        "data": <data>,
        "signature": <signature>
    }
    ```
-   #### Valeurs:
    - `<size>`: Taille de `data` (en octets)
    - `<timestamp>`: Horodatage de la transaction (en UNIX Epoch)
    - `<fees>`: Frais de transaction (en µNEX/octet)
    - `<login>`: Login de l'émetteur de la transaction
    - `<data_type>`: Type de données contenu dans le `data ` de la transaction (Par défaut: `Unknow`)
    - `<signature>`: Signature de la transaction (`transaction_header` + `data`)