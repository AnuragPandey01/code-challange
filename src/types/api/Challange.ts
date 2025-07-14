import type { Models } from "appwrite";
import type { Tag } from "./Tag";

export interface Challange extends Models.Document {
  title: string;
  tags: Tag[];
  difficulty: "easy" | "medium" | "hard";
}
