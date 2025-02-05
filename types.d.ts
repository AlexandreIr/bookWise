interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  description: string;
  color: string;
  coverUrl: string;
  video: string;
  sumary: string;
  isLoanedBook?: boolean;
}

interface BookCover {
  variant?: BookCoverVariant
  className?: string 
  coverColor: string 
  coverUrl: string
}

interface BookList {
  title: string
  books: Book[]
  containerClass?: string
}

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  universityId: number; 
  universityCard: string;
}