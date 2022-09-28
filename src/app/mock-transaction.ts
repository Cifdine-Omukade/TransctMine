
import { Label } from './label';
import { Transaction } from './transaction';

export const TRANSACTIONS: Transaction[] = [
    {
        id:1,
        date: new Date(),
        label: new Label("Alimentaire","orange"),
        amount: 126.83,
        creditor: "Carrefour"
    },
    {
        id:2,
        date: new Date(),
        label: new Label("Banque et Assurances","red"),
        amount: 95.2,
        creditor: "MAIF"
    },
    {
        id:3,
        date: new Date(),
        label:new Label( "Energies","green"),
        amount: 262.64,
        creditor: "Engis SA"
    },
    {
        id:4,
        date:new Date(),
        label: new Label( "Loisirs","yellow"),
        amount: 73.00,
        creditor: "Brasserie Moulin 1883",
    },
    {
        id:5,
        date: new Date(),
        label: new Label( "Impots",'brown'),
        amount: 12385,
        creditor: "Emmanuel Macron SARL"
    },
    {
        id:6,
        date:new Date(),
        label: new Label( "Energies", "green"),
        amount: 486.96,
        creditor: "Engis SA"

    },
    {
        id:7,
        date:new Date(),
        label: new Label( "Loyer" , "purple"),
        amount: 2685,
        debitor: "M.Dupont"
    },
    {
        id:8,
        date:new Date(),
        label: new Label( "Loyer", "purple"),
        amount: 1685,
        debitor: "Mme Alvysion"
    }

]

    
