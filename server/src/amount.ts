export interface InfoPerson {
    userId: string;
    products: {
        type: string;
        description: string;
        accounts: {
            id: number;
            type: string;
            number: string;
            description: string;
            amount: string;
            icon: string;
        }[];
    }[];
} 

const infoPersons: InfoPerson[] = [
    {
      "userId": "usid098392",
      "products": [
          {
            "type": "personal debit",
            "description": "Mis cuentas",
            "accounts": [
              {
                "id": 1,
                "type": "cheques",
                "number": "****7890",
                "description": "Ahorros y nómina",
                "amount": "$45,987.00",
                "icon": "credit"
              },
              {
                "id": 2,
                "type": "inversiones",
                "number": "****7891",
                "description": "Cetes 10",
                "amount": "$45,987.00",
                "icon": "other"
              }
            ]
          },
          {
            "type": "personal credit",
            "description": "Mis tarjetas",
            "accounts": [
              {
                "id": 1,
                "type": "credito diamante",
                "number": "****7893",
                "description": "Titular: Alejandro Gómez",
                "amount": "$45,987.00",
                "icon": "credit"
              },
              {
                "id": 2,
                "type": "credito diamante",
                "number": "****7893",
                "description": "Adicional: Camila Gómez",
                "amount": "$45,987.00",
                "icon": "credit"
              }
            ]
          },
          {
            "type": "personal loans",
            "description": "Mis préstamos",
            "accounts": [
              {
                "id": 1,
                "type": "automotriz",
                "number": "****7895",
                "description": "Automotriz Pipó",
                "amount": "$45,987.00",
                "icon": "car"
              },
              {
                "id": 2,
                "type": "hipotecario",
                "number": "****7896",
                "description": "Hipotecaría Fest",
                "amount": "$45,987.00",
                "icon": "house"
              }
            ]
          }
        ]
      },

      {
        "userId": "usid098720",
        "products": [
          {
            "type": "personal debit",
            "description": "Mis cuentas",
            "accounts": [
              {
                "id": 1,
                "type": "cheques",
                "number": "****7890",
                "description": "Ahorros y nómina",
                "amount": "$58,888.00",
                "icon": "credit"
              },
              {
                "id": 2,
                "type": "inversiones",
                "number": "****7891",
                "description": "Cetes 10",
                "amount": "$28,500.00",
                "icon": "other"
              }
            ]
          },
          {
            "type": "personal credit",
            "description": "Mis tarjetas",
            "accounts": [
              {
                "id": 1,
                "type": "credito diamante",
                "number": "****7893",
                "description": "Titular: Santiago Vilchis",
                "amount": "$45,987.00",
                "icon": "credit"
              },
              {
                "id": 2,
                "type": "credito diamante",
                "number": "****7893",
                "description": "Adicional: Sofia Gómez",
                "amount": "$45,987.00",
                "icon": "credit"
              }
            ]
          },
          {
            "type": "personal loans",
            "description": "Mis préstamos",
            "accounts": [
              {
                "id": 1,
                "type": "automotriz",
                "number": "****7895",
                "description": "Automotriz Ferrari",
                "amount": "$45,987.00",
                "icon": "car"
              },
              {
                "id": 2,
                "type": "hipotecario",
                "number": "****7896",
                "description": "Hipotecaría Juarez",
                "amount": "$45,987.00",
                "icon": "house"
              }
            ]
          }
        ]
      },

    ]; 

    export default infoPersons;