export interface PostTile {
   readonly img: string,
   readonly title: string,
   readonly category: string,
   readonly descr: string,
   readonly date: Date,
   readonly comments: number
}

// I rodzaj zapisu klasy

// export class PostTile {
//    public constructor(
//       public readonly img: string,
//       public readonly title: string,
//       public readonly category: string,
//       public readonly descr: string,
//       public readonly date: Date,
//       public readonly comments: number
//    ){}
// }

// II rodzaj zapisu powyższej klasy

// export class PostTile {
//   public readonly img: string;
//   public readonly title: string;
//   public readonly category: string;
//   public readonly descr: string;
//   public readonly date: Date;
//   public readonly comments: number;

//   public constructor(
//     img: string,
//     title: string,
//     category: string,
//     descr: string,
//     date: Date,
//     comments: number
//   ) {
//     this.img = img;
//     this.title = title;
//     this.category = category;
//     this.descr = descr;
//     this.date = date;
//     this.comments = comments;
//   }
// }