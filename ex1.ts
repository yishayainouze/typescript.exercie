// Step 1: Define an enum for item types
export enum ItemType {
  Book = 'book',
  DVD = 'dvd',
}

// Step 2: Define interfaces for Book and DVD
interface Book {
  type: ItemType.Book;
  title: string;
  author: string;
}

interface DVD {
  type: ItemType.DVD;
  title: string;
  duration: number;
}

// Step 3: Implement a function to filter items based on a filter function
function filterItems(items: (Book | DVD)[], filterFn: (item: Book | DVD) => boolean) {
  return items.filter(filterFn);
}

// Step 4: Implement a function to print data for each item
function printItemsData(items: (Book | DVD)[]) {
  items.forEach((item: Book | DVD): void => {
    console.log('Type:', item.type);
    console.log('Title:', item.title);
    if (item.type === ItemType.Book) {
      console.log('Author:', (item as Book).author);
    } else {
      console.log('Duration:', (item as DVD).duration, 'minutes');
    }
    console.log('--------------------------------------');
  });
}

// Test data
const libraryItems: (Book | DVD)[] = [
  { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { type: ItemType.DVD, title: 'Inception', duration: 148 },
  { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { type: ItemType.DVD, title: 'Avatar', duration: 162 },
  { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];

// Step 5: Print all the data for the library items
printItemsData(libraryItems);

// Step 6: Filter and print DVD items with duration longer than 2 hours
const filteredDVDs = filterItems(libraryItems, (item: Book | DVD): boolean => {
  if (item.type === ItemType.DVD && (item as DVD).duration > 120) {
    return true;
  }
  return false;
});

console.log('Filtered DVDs with duration longer than 2 hours:');
printItemsData(filteredDVDs);

// Step 7: Filter and print books authored by "Harper Lee"
const booksByHarperLee = filterItems(libraryItems, (item: Book | DVD): boolean => {
  if (item.type === ItemType.Book && (item as Book).author === 'Harper Lee') {
    return true;
  }
  return false;
});

console.log('Books authored by Harper Lee:');
printItemsData(booksByHarperLee);