// Generates a list of clients with their name and balance displayed.
function list(clients) {
    // Create HTML list items for each client, showing their name and balance.
    const listItems = clients.map(client => `
      <li class="list-group-item d-flex justify-content-between" data-index="${client.id}">
        <span>${client.name}</span>
        <span>$ ${client.balance.toFixed(2)}</span>
      </li>
    `);
  
    // Join all list items into a single string and return it.
    return listItems.join('');
  }
  
  // Sorts the clients array by a specified property (e.g., balance or name).
  function order(clients, property) {
    // Creates a sorted copy of the clients array based on the given property.
    return clients.slice().sort((a, b) => a[property] - b[property]);
  }
  
  // Calculates the total balance of all clients combined.
  function total(clients) {
    // Sum up the balance of all clients.
    return clients.reduce((sum, client) => sum + client.balance, 0);
  }
  
  // Retrieves information about a specific client based on their index in the array.
  function info(index) {
    // Find the client at the given index.
    const client = clients.find((client, i) => i === index);
  
    // Return the client object.
    return client;
  }
  
  // Searches for clients whose names contain the query string (case-insensitive).
  function search(query) {
    // Filter clients whose names include the search query (ignoring case).
    const results = clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()));
  
    // Return the filtered array of clients.
    return results;
  }
  