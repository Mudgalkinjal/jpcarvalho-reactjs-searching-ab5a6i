# Challenge: Real-Time Search and Filterable Product Catalog

Create a product catalog with a search bar and multiple filter options. The catalog should dynamically update based on the search term and selected filters.

## Requirements:

### Product List:

- Render a list of products, each with a name, price, category, and rating (e.g., out of 5 stars).
- Display a default set of 10 products. Each product should be represented as a card showing its name, price, category, and rating.

### Search Bar:

- Implement a search bar that allows users to search for products by name.
- As the user types, the list of products should filter dynamically to show only those that match the search term (case-insensitive).

### Category Filter:

- Add a dropdown or a set of checkboxes allowing the user to filter products by category (e.g., "Electronics", "Books", "Clothing").
- When the user selects a category, the list of products should update to show only those within the selected category.

### Rating Filter:

- Add a slider or a set of buttons to filter products based on their rating (e.g., show only products with a rating of 4 stars or higher).
- The list of products should update dynamically based on the selected rating threshold.

### Price Sorting:

- Add a button or dropdown to allow users to sort the products by price, either in ascending or descending order.
- The sorting should take into account the current filtered products.

### Bonus:

- If time permits, implement a "load more" button to dynamically load more products (e.g., fetching more from a simulated API).

### Additional Guidelines:

- Use the following api to get products info: [API URL](https://fakeapi.platzi.com/)
- Use React hooks (useState, useEffect) for managing state.
- Keep the product data in a JSON file or as a static array in the component.
- Your solution should provide a good user experience with real-time updates based on the search input and filters.
- Provide basic styling to make the UI visually organized and easy to use.

### Constraints:

- You cannot use any external component libraries like Material UI or Ant Design.
- You cannot use third-party search or filtering libraries; the search and filter functionality should be written by you.
