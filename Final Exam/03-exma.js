function shopping(input) {
    let stores = {};

    for (let command of input) {
        if (command === 'Go Shopping') {
            break;
        }

        let [action, store, items] = command.split('->');

        switch (action) {
            case 'Add':
                items = items.split(',');
                if (!stores.hasOwnProperty(store)) {
                    stores[store] = [];

                }
                let keys = Object.keys(stores)

                items.forEach(item => {
                    for (let key of keys) {
                        if (stores[key].includes(item)) {
                            break;
                        }
                    }
                    if (!stores[store].includes(item)) {
                        stores[store].push(item);
                    }
                });

                break;
            case 'Important':
            case 'Important':
                if (!stores.hasOwnProperty(store)) {
                    stores[store] = [];
                }
                if (!stores[store].includes(items)) {
                    stores[store].unshift(items);
                }
                break;

            case 'Remove':
                if (stores.hasOwnProperty(store) && stores[store].length === 0) {
                    delete stores[store];
                }
                break;
        }
    }

    Object.entries(stores).forEach(([store, items]) => {
        console.log(`${store}:
  - ${items.join('\n  - ')}`);
        delete stores[store];
    });
}

shopping(["Add->Grocery->Dried-fruit,Nuts,Lemons",
    "Add->Market->Nuts,Juice",
    "Important->Market->Snack",
    "Remove->Market",
    "Go Shopping"])






    ;
